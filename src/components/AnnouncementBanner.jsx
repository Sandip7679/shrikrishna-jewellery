import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useSiteSettings from "../hooks/useSiteSettings";

const INTERVAL = 4000;

// ── Rotating variant ──────────────────────────────────────────────────────────
const RotatingBanner = ({ messages, onDismiss }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (messages.length <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % messages.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [messages.length]);

  const go = (dir) => {
    setDirection(dir);
    setIndex((i) => (i + dir + messages.length) % messages.length);
  };

  const variants = {
    enter: (d) => ({ y: d > 0 ? 8 : -8, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (d) => ({ y: d > 0 ? -8 : 8, opacity: 0 }),
  };

  return (
    <div className="bg-amber-800 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 flex items-center gap-2 select-none">
      {/* Prev arrow — hidden on mobile to save space */}
      {messages.length > 1 && (
        <button onClick={() => go(-1)} aria-label="Previous" className="hidden sm:flex flex-shrink-0 p-1 rounded hover:bg-white/20 transition">
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Text area — ghost sizer keeps height correct for any text length */}
      <div className="relative min-w-0 flex-1 flex justify-center">
        {/* Invisible copy sizes the container so long text wraps correctly */}
        <p
          aria-hidden="true"
          className="invisible font-medium tracking-wide text-center w-full leading-snug line-clamp-2 pointer-events-none"
        >
          {messages[index]}
        </p>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.p
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center font-medium tracking-wide text-center leading-snug line-clamp-2"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Dots */}
      {messages.length > 1 && (
        <div className="flex gap-1 flex-shrink-0">
          {messages.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      )}

      {/* Next arrow — hidden on mobile */}
      {messages.length > 1 && (
        <button onClick={() => go(1)} aria-label="Next" className="hidden sm:flex flex-shrink-0 p-1 rounded hover:bg-white/20 transition">
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}

      <button onClick={onDismiss} aria-label="Dismiss" className="flex-shrink-0 p-1 rounded hover:bg-white/20 transition">
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

// ── Marquee variant ───────────────────────────────────────────────────────────
const MarqueeBanner = ({ messages, onDismiss }) => {
  const text = messages.join("   ✦   ");

  return (
    <div className="bg-amber-800 text-white text-xs sm:text-sm py-2.5 flex items-center overflow-hidden select-none relative">
      <style>{`
        @keyframes skj-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .skj-marquee-inner {
          display: flex;
          width: max-content;
          animation: skj-marquee 20s linear infinite;
        }
        .skj-marquee-inner:hover {
          animation-play-state: paused;
        }
        .skj-marquee-item {
          min-width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 0 2rem;
        }
      `}</style>

      {/* Each item is min 100vw wide — Copy 2 always starts exactly at the right screen edge */}
      <div className="flex-1 overflow-hidden">
        <div className="skj-marquee-inner">
          <span className="skj-marquee-item font-medium tracking-wide">{text}</span>
          <span className="skj-marquee-item font-medium tracking-wide" aria-hidden="true">{text}</span>
        </div>
      </div>

      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        className="flex-shrink-0 mx-3 p-1 rounded hover:bg-white/20 transition"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

// ── Main wrapper ──────────────────────────────────────────────────────────────
const AnnouncementBanner = () => {
  const { data: settings } = useSiteSettings();

  const raw = settings?.announcement?.trim();
  const active = settings?.announcementActive;
  const style = settings?.announcementStyle || "rotating";

  const messages = raw
    ? raw.split("\n").map((s) => s.trim()).filter(Boolean)
    : [];

  const dismissKey = `ann_dismissed_${raw}`;
  const [dismissed, setDismissed] = useState(() => {
    if (!raw) return false;
    return localStorage.getItem(dismissKey) === "1";
  });

  const handleDismiss = () => {
    localStorage.setItem(dismissKey, "1");
    setDismissed(true);
  };

  if (!raw || !active || dismissed || messages.length === 0) return null;

  return style === "marquee"
    ? <MarqueeBanner messages={messages} onDismiss={handleDismiss} />
    : <RotatingBanner messages={messages} onDismiss={handleDismiss} />;
};

export default AnnouncementBanner;
