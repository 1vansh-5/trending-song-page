import { useEffect, useState } from "react";

const SAFE_T = "max(1rem, env(safe-area-inset-top))";
const SAFE_L = "max(1rem, env(safe-area-inset-left))";
const SAFE_R = "max(1rem, env(safe-area-inset-right))";

const fmt = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export function Clock() {
  const [parts, setParts] = useState<{ h: string; m: string; p: string } | null>(null);

  useEffect(() => {
    const tick = () => {
      const s = fmt.format(new Date());
      const m = s.match(/(\d{1,2}):(\d{2})\s*(\S+)/);
      if (m) setParts({ h: m[1]!, m: m[2]!, p: m[3]!.toLowerCase() });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="fixed z-10 tabular-nums text-white/85"
      style={{ top: SAFE_T, left: SAFE_L }}
    >
      <span className="text-[15px] font-medium tracking-wide">
        {parts ? (
          <>
            {parts.h}
            <span className="blink">:</span>
            {parts.m}
            <span className="ml-1 text-[11px] text-white/60">{parts.p} IST</span>
          </>
        ) : (
          <span className="opacity-0">00:00</span>
        )}
      </span>
    </div>
  );
}

export function Listeners() {
  const [count, setCount] = useState(1284);
  useEffect(() => {
    const id = window.setInterval(
      () => setCount((c) => Math.max(900, c + Math.round((Math.random() - 0.45) * 9))),
      4000,
    );
    return () => window.clearInterval(id);
  }, []);
  return (
    <div
      className="fixed left-1/2 z-10 -translate-x-1/2 text-center"
      style={{ top: SAFE_T }}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11.5px] text-white/80 backdrop-blur-md">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
        />
        {count.toLocaleString("en-IN")} listening
      </span>
    </div>
  );
}

export function Socials() {
  return (
    <nav
      className="fixed z-10 flex items-center gap-4 text-[11.5px] uppercase tracking-[0.18em] text-white/65"
      style={{ top: SAFE_T, right: SAFE_R }}
      aria-label="Social links"
    >
      <a className="transition-colors hover:text-white" href="#" rel="me">
        IG
      </a>
      <a className="transition-colors hover:text-white" href="#" rel="me">
        YT
      </a>
      <a className="transition-colors hover:text-white" href="#" rel="me">
        RSS
      </a>
    </nav>
  );
}