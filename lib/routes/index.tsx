import { createFileRoute } from "@tanstack/react-router";
import { playlists } from "@/lib/tracks";
import Player from "@/components/Player";
import { Clock, Listeners, Socials } from "@/components/TopRow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rooftop Radio — Nostalgia Music, One Long Evening" },
      {
        name: "description",
        content:
          "A single-page nostalgia radio: spinning vinyl, a glass player and hand-picked playlists that run from golden hour to late night.",
      },
      { property: "og:title", content: "Rooftop Radio — Nostalgia Music" },
      {
        property: "og:description",
        content:
          "Spinning vinyl, a glass player and hand-picked playlists that run from golden hour to late night.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SAFE_B = "max(1rem, env(safe-area-inset-bottom))";
const SAFE_L = "max(1rem, env(safe-area-inset-left))";
const SAFE_R = "max(1rem, env(safe-area-inset-right))";

function Index() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      {/* 1. Scene */}
      <div className="hero-bg fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/80" />
      </div>

      {/* 2. Grain */}
      <div className="grain pointer-events-none fixed inset-0 -z-10" />

      {/* 3. Top row */}
      <Clock />
      <Listeners />
      <Socials />

      <header
        className="w-full max-w-xl px-4 pt-24 text-center"
        style={{ paddingLeft: SAFE_L, paddingRight: SAFE_R }}
      >
        <h1 className="text-[clamp(2rem,6vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
          Rooftop Radio
        </h1>
        <p className="mt-2 text-[13.5px] text-white/70">
          One long evening, on repeat.
        </p>
      </header>

      {/* 4. Player, bottom anchored */}
      <div
        className="w-full max-w-xl px-4 pb-4"
        style={{ paddingBottom: SAFE_B, paddingLeft: SAFE_L, paddingRight: SAFE_R }}
      >
        <Player lists={playlists} />
      </div>
    </main>
  );
}