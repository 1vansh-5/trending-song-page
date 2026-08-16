import { useCallback, useEffect, useRef, useState } from "react";
import type { Track } from "./tracks";

/* Minimal typing for the YouTube IFrame API we actually touch. */
type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (s: number, allowSeekAhead: boolean) => void;
  loadVideoById: (id: string) => void;
  cueVideoById: (id: string) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  setVolume: (v: number) => void;
  getVolume: () => number;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;

function loadApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;
  apiPromise = new Promise<void>((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.async = true;
    document.head.appendChild(s);
  });
  return apiPromise;
}

export type Engine = {
  mountRef: (el: HTMLDivElement | null) => void;
  ready: boolean;
  playing: boolean;
  elapsed: number;
  duration: number;
  index: number;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seekToFraction: (f: number) => void;
  select: (i: number) => void;
  error: string | null;
  volume: number;
  muted: boolean;
  setVolume: (v: number) => void;
  toggleMute: () => void;
};

export function useYouTubeEngine(tracks: Track[]): Engine {
  const playerRef = useRef<YTPlayer | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const tracksRef = useRef(tracks);
  tracksRef.current = tracks;

  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(tracks[0]?.duration ?? 0);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolumeState] = useState(70);
  const [muted, setMuted] = useState(false);
  const indexRef = useRef(0);
  indexRef.current = index;

  const advance = useCallback((delta: number) => {
    const list = tracksRef.current;
    if (!list.length) return;
    const nextIndex = (indexRef.current + delta + list.length) % list.length;
    setIndex(nextIndex);
  }, []);

  const mountRef = useCallback((el: HTMLDivElement | null) => {
    hostRef.current = el;
  }, []);

  /* Create the player once the host node exists. */
  useEffect(() => {
    let cancelled = false;
    loadApi().then(() => {
      if (cancelled || !hostRef.current || playerRef.current) return;
      const first = tracksRef.current[0];
      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: first?.videoId || undefined,
        playerVars: { playsinline: 1, rel: 0, modestbranding: 1 },
        events: {
          onReady: () => {
            if (!cancelled) setReady(true);
          },
          onStateChange: (e: { data: number }) => {
            const YT = window.YT;
            if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
            else if (e.data === YT.PlayerState.PAUSED) setPlaying(false);
            else if (e.data === YT.PlayerState.ENDED) {
              setPlaying(false);
              advance(1);
            }
          },
          onError: (e: { data: number }) => {
            const t = tracksRef.current[indexRef.current];
            setError(`Playback error ${e.data} — skipping`);
            if (typeof window !== "undefined") {
              window.dispatchEvent(
                new CustomEvent("nostalgia:yt_error", {
                  detail: { code: e.data, videoId: t?.videoId ?? "" },
                }),
              );
            }
            advance(1);
          },
        },
      }) as YTPlayer;
    });
    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [advance]);

  /* Load the current track whenever the index changes. */
  useEffect(() => {
    const p = playerRef.current;
    const t = tracks[index];
    if (!ready || !p || !t) return;
    setElapsed(0);
    setDuration(t.duration);
    setError(t.videoId ? null : "No videoId set for this track yet");
    if (!t.videoId) {
      setPlaying(false);
      return;
    }
    p.loadVideoById(t.videoId);
  }, [index, ready, tracks]);

  /* Keep the YouTube player's volume in sync with the UI. */
  useEffect(() => {
    const p = playerRef.current;
    if (!ready || !p) return;
    p.setVolume(volume);
    if (muted) p.mute();
    else p.unMute();
  }, [ready, volume, muted]);

  /* Progress ticker. */
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      setElapsed(p.getCurrentTime() || 0);
      const d = p.getDuration() || 0;
      if (d > 0) setDuration(d);
    }, 400);
    return () => window.clearInterval(id);
  }, [playing]);

  const toggle = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    // Never gated behind a readiness event — the gesture drives it directly.
    if (playing) p.pauseVideo();
    else p.playVideo();
  }, [playing]);

  const seekToFraction = useCallback(
    (f: number) => {
      const p = playerRef.current;
      const target = Math.max(0, Math.min(1, f)) * (duration || 0);
      setElapsed(target);
      p?.seekTo(target, true);
    },
    [duration],
  );

  const setVolume = useCallback((v: number) => {
    const clamped = Math.max(0, Math.min(100, Math.round(v)));
    setVolumeState(clamped);
    if (clamped > 0) setMuted(false);
    if (clamped === 0) setMuted(true);
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      if (m && volume === 0) setVolumeState(40);
      return !m;
    });
  }, [volume]);

  return {
    mountRef,
    ready,
    playing,
    elapsed,
    duration,
    index,
    toggle,
    next: () => advance(1),
    prev: () => advance(-1),
    seekToFraction,
    select: setIndex,
    error,
    volume,
    muted,
    setVolume,
    toggleMute,
  };
}