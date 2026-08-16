import { useRef, useState } from "react";
import { formatTime, type Playlist, type Track } from "@/lib/tracks";
import { useYouTubeEngine, type Engine } from "@/lib/useYouTube";

/* ------------------------------------------------------------------ *
 * All sub-components live at MODULE scope so their identity is stable
 * across renders — otherwise React remounts the subtree on every
 * progress tick and the vinyl animation restarts from 0deg.
 * ------------------------------------------------------------------ */

const GLASS = "glass rounded-full";

function Vinyl({ size, playing }: { size: number; playing: boolean }) {
  return (
    <div
      className="relative shrink-0 self-start overflow-hidden rounded-full"
      style={{ width: size, height: size }}
    >
      <div
        className="vinyl-spin h-full w-full rounded-full"
        style={{
          animationPlayState: playing ? "running" : "paused",
          background:
            "repeating-radial-gradient(circle at 50% 50%, #1b1512 0 2px, #0d0a09 2px 4px), radial-gradient(circle at 32% 28%, rgba(255,255,255,0.22), transparent 55%)",
          boxShadow: "inset 0 0 24px rgba(0,0,0,0.9), 0 6px 18px rgba(0,0,0,0.6)",
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: size * 0.46,
            height: size * 0.46,
            background:
              "radial-gradient(circle at 40% 35%, var(--accent), var(--accent-strong))",
          }}
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 ring-2 ring-white/40" />
    </div>
  );
}

function Meta({ track, compact }: { track: Track; compact?: boolean }) {
  return (
    <div className="min-w-0 flex-1">
      <p
        className="truncate font-semibold text-white"
        style={{ fontSize: compact ? 15 : 15 }}
      >
        {track.title}
      </p>
      <p className="truncate text-white/70" style={{ fontSize: 12.5 }}>
        {track.artist} · {track.film} · {track.year}
      </p>
    </div>
  );
}

function SeekBar({ engine }: { engine: Engine }) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const pct =
    engine.duration > 0 ? Math.min(100, (engine.elapsed / engine.duration) * 100) : 0;

  const apply = (clientX: number) => {
    const el = railRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    engine.seekToFraction((clientX - r.left) / r.width);
  };

  return (
    <div
      ref={railRef}
      role="slider"
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      tabIndex={0}
      className="group/seek relative flex h-6 w-full cursor-pointer touch-none items-center"
      onPointerDown={(e) => {
        draggingRef.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        apply(e.clientX);
      }}
      onPointerMove={(e) => {
        if (draggingRef.current) apply(e.clientX);
      }}
      onPointerUp={() => {
        draggingRef.current = false;
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
      }}
    >
      <div className="relative h-[3px] w-full rounded-full bg-white/15">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${pct}%`,
            background: "var(--accent)",
            boxShadow: "0 0 10px var(--accent)",
          }}
        />
        <div
          className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 shadow transition-opacity group-hover/seek:opacity-100"
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Times({ engine }: { engine: Engine }) {
  return (
    <span
      className="shrink-0 tabular-nums text-white/70"
      style={{ fontSize: 10.5 }}
    >
      {formatTime(engine.elapsed)} / {formatTime(engine.duration)}
    </span>
  );
}

function IconPrev() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M7 6h2v12H7zM20 6v12L10 12z" />
    </svg>
  );
}
function IconNext() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M15 6h2v12h-2zM4 6l10 6-10 6z" />
    </svg>
  );
}
function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M7 5l13 7-13 7z" />
    </svg>
  );
}
function IconPause() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
    </svg>
  );
}

function PlayButton({ engine, size }: { engine: Engine; size: number }) {
  return (
    <button
      type="button"
      onClick={engine.toggle}
      aria-label={engine.playing ? "Pause" : "Play"}
      className="flex shrink-0 items-center justify-center rounded-full text-black ring-1 ring-white/25 transition-transform active:scale-95"
      style={{
        width: size,
        height: size,
        backgroundImage:
          "linear-gradient(to bottom, var(--accent), var(--accent-strong))",
        boxShadow: "0 8px 24px -6px var(--accent)",
      }}
    >
      {engine.playing ? <IconPause /> : <IconPlay />}
    </button>
  );
}

function StepButton({
  onClick,
  label,
  children,
  min,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  min?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex items-center justify-center rounded-full text-white/80 transition-colors hover:text-white"
      style={{ minWidth: min ?? 36, minHeight: min ?? 36 }}
    >
      {children}
    </button>
  );
}

function PlaylistSwitcher({
  lists,
  activeId,
  onSelect,
}: {
  lists: Playlist[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const active = lists.find((l) => l.id === activeId);
  return (
    <div className="mb-3">
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Playlists"
      >
        {lists.map((p) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={p.id === activeId}
            onClick={() => onSelect(p.id)}
            className={`rounded-full border px-3 py-1.5 text-[11.5px] tracking-wide transition-colors ${
              p.id === activeId
                ? "border-white/30 bg-white/20 text-white"
                : "border-white/10 bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            {p.name}
            <span className="ml-1.5 text-white/40">{p.tracks.length}</span>
          </button>
        ))}
      </div>
      {active ? (
        <p className="mt-1.5 text-center text-[11px] text-white/50">{active.blurb}</p>
      ) : null}
    </div>
  );
}

function IconVolume({ muted, level }: { muted: boolean; level: number }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4 9h3l5-4v14l-5-4H4z" />
      {muted ? (
        <path
          d="M16 9l5 6M21 9l-5 6"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M16.5 9.2a4 4 0 0 1 0 5.6"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
          {level > 55 ? (
            <path
              d="M19 7.2a7 7 0 0 1 0 9.6"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
            />
          ) : null}
        </>
      )}
    </svg>
  );
}

function VolumeControl({ engine }: { engine: Engine }) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const level = engine.muted ? 0 : engine.volume;

  const apply = (clientX: number) => {
    const el = railRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    engine.setVolume(((clientX - r.left) / r.width) * 100);
  };

  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        onClick={engine.toggleMute}
        aria-label={engine.muted ? "Unmute" : "Mute"}
        aria-pressed={engine.muted}
        className="flex items-center justify-center rounded-full text-white/80 transition-colors hover:text-white"
        style={{ minWidth: 32, minHeight: 32 }}
      >
        <IconVolume muted={engine.muted} level={level} />
      </button>
      <div
        ref={railRef}
        role="slider"
        aria-label="Volume"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(level)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") engine.setVolume(level - 5);
          if (e.key === "ArrowRight") engine.setVolume(level + 5);
        }}
        className="group/vol relative flex h-6 w-20 cursor-pointer touch-none items-center"
        onPointerDown={(e) => {
          draggingRef.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          apply(e.clientX);
        }}
        onPointerMove={(e) => {
          if (draggingRef.current) apply(e.clientX);
        }}
        onPointerUp={() => {
          draggingRef.current = false;
        }}
        onPointerCancel={() => {
          draggingRef.current = false;
        }}
      >
        <div className="relative h-[3px] w-full rounded-full bg-white/15">
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${level}%`,
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
            }}
          />
          <div
            className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 shadow transition-opacity group-hover/vol:opacity-100"
            style={{ left: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function CopyLinkButton({
  playlistId,
  trackId,
}: {
  playlistId: string;
  trackId: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("list", playlistId);
    url.searchParams.set("track", trackId);
    const link = url.toString();
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = link;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] text-white/80 transition-colors hover:border-white/30 hover:text-white"
      style={{ minHeight: 32 }}
    >
      {copied ? "Link copied" : "Copy link"}
    </button>
  );
}

function NowPlaying({
  engine,
  track,
  playlist,
}: {
  engine: Engine;
  track: Track;
  playlist: Playlist;
}) {
  return (
    <section
      aria-live="polite"
      className="glass mb-3 rounded-2xl px-4 py-3"
    >
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
            Now playing · {playlist.name}
          </p>
          <p className="mt-1 truncate text-[15px] font-semibold text-white">
            {track.title}
          </p>
          <p className="truncate text-[12.5px] text-white/70">{track.artist}</p>
          <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-white/55">
            <div className="flex gap-1.5">
              <dt className="text-white/40">Film</dt>
              <dd className="text-white/75">{track.film}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="text-white/40">Year</dt>
              <dd className="tabular-nums text-white/75">{track.year}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="text-white/40">Length</dt>
              <dd className="tabular-nums text-white/75">
                {formatTime(engine.duration || track.duration)}
              </dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="text-white/40">Track</dt>
              <dd className="tabular-nums text-white/75">
                {engine.index + 1} of {playlist.tracks.length}
              </dd>
            </div>
          </dl>
        </div>
        <CopyLinkButton playlistId={playlist.id} trackId={track.id} />
      </div>
    </section>
  );
}

/** The visible YouTube player — never hidden, never 1px, never opacity-0. */
function Stage({
  engine,
  track,
  notice,
}: {
  engine: Engine;
  track: Track;
  notice: string | null;
}) {
  return (
    <div className="glass mb-3 overflow-hidden rounded-2xl p-1.5">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/70">
        <div ref={engine.mountRef} className="h-full w-full" />
        {notice ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center text-[12px] text-white/70">
            {notice}
          </div>
        ) : null}
      </div>
      <p className="px-2 py-1.5 text-[10.5px] text-white/50">
        {track.film} ({track.year})
      </p>
    </div>
  );
}

export default function Player({ lists }: { lists: Playlist[] }) {
  const [activeId, setActiveId] = useState(lists[0]!.id);
  const active = lists.find((l) => l.id === activeId) ?? lists[0]!;
  const engine = useYouTubeEngine(active.tracks);
  const track = active.tracks[engine.index] ?? active.tracks[0]!;
  const select = engine.select;

  /* Switching playlist always restarts at track 1. */
  const switchPlaylist = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    select(0);
  };

  return (
    <div className="w-full max-w-xl">
      <PlaylistSwitcher lists={lists} activeId={activeId} onSelect={switchPlaylist} />

      <Stage
        engine={engine}
        track={track}
        notice={
          track.videoId
            ? engine.error
            : "No videoId set yet — add one you have the rights to in src/lib/tracks.ts"
        }
      />

      <NowPlaying engine={engine} track={track} playlist={active} />

      {/* DESKTOP — horizontal glass pill */}
      <div className={`hidden items-center gap-4 p-3 pr-5 sm:flex ${GLASS}`}>
        <Vinyl size={80} playing={engine.playing} />
        <div className="min-w-0 flex-1">
          <Meta track={track} />
          <SeekBar engine={engine} />
        </div>
        <Times engine={engine} />
        <VolumeControl engine={engine} />
        <div className="flex shrink-0 items-center gap-1">
          <StepButton onClick={engine.prev} label="Previous track">
            <IconPrev />
          </StepButton>
          <PlayButton engine={engine} size={44} />
          <StepButton onClick={engine.next} label="Next track">
            <IconNext />
          </StepButton>
        </div>
      </div>

      {/* MOBILE — stacked card */}
      <div className="glass rounded-[26px] p-4 sm:hidden">
        <div className="flex items-center gap-3">
          <Vinyl size={64} playing={engine.playing} />
          <Meta track={track} compact />
        </div>
        <div className="mt-3">
          <SeekBar engine={engine} />
        </div>
        <div className="mt-1 flex items-center justify-between">
          <Times engine={engine} />
          <div className="flex items-center gap-3">
            <StepButton onClick={engine.prev} label="Previous track" min={44}>
              <IconPrev />
            </StepButton>
            <PlayButton engine={engine} size={52} />
            <StepButton onClick={engine.next} label="Next track" min={44}>
              <IconNext />
            </StepButton>
          </div>
          <span className="w-10" />
        </div>
        <div className="mt-3 flex justify-center">
          <VolumeControl engine={engine} />
        </div>
      </div>
    </div>
  );
}