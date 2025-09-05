"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hover SFX with best-effort auto-unlock and a tiny enable button fallback.
 * - Crops /sfx/bubble.mp3 to 0.5s..1.0s on each hover.
 * - Tries to unlock on pointermove / first hover; if blocked, shows a pill button.
 * - Remembers user consent in localStorage.
 */
export default function SoundFX() {
  const bubbleRef = useRef<HTMLAudioElement | null>(null);
  const [needsUnlock, setNeedsUnlock] = useState(false);
  const tryingRef = useRef(false);

  useEffect(() => {
    // Base audio (we clone on each hover)
    const bubble = new Audio("/sfx/bubble.mp3");
    bubble.preload = "auto";
    bubble.volume = 0.65;
    bubbleRef.current = bubble;

    const START = 0.5;   // seconds
    const LENGTH = 0.5;  // seconds (so end is 1.0s)

    // Play a cropped copy
    const playBubble = () => {
      const base = bubbleRef.current;
      if (!base) return;

      const clip = new Audio(base.src);
      clip.volume = base.volume;

      const startIt = () => {
        try { clip.currentTime = START; } catch {}
        void clip.play().catch(() => {
          // If even starting fails, we’ll ask for unlock
          setNeedsUnlock(true);
        });
        setTimeout(() => { try { clip.pause(); } catch {} }, Math.floor(LENGTH * 1000));
      };

      if (clip.readyState >= 1) startIt();
      else clip.addEventListener("loadedmetadata", startIt, { once: true });
    };

    const selectors = [
      "a",
      "button",
      "[role='button']",
      ".card",
      ".badge",
      "[data-sfx-hover]",
    ];

    // bind hover listeners
    const bind = () => {
      document.querySelectorAll(selectors.join(",")).forEach((el) => {
        el.addEventListener("mouseenter", playBubble);
      });
    };
    const unbind = () => {
      document.querySelectorAll(selectors.join(",")).forEach((el) => {
        el.removeEventListener("mouseenter", playBubble);
      });
    };

    bind();
    const mo = new MutationObserver(() => { unbind(); bind(); });
    mo.observe(document.body, { childList: true, subtree: true });

    // ---- Best-effort auto-unlock attempts ----
    const tryUnlock = async () => {
      if (tryingRef.current) return;
      tryingRef.current = true;

      // If user already enabled before, try to “prime” by silent play/pause
      const prior = localStorage.getItem("sfxEnabled") === "1";

      // Any attempt to play/pause will throw if blocked
      try {
        // prime base element
        await bubble.play();
        bubble.pause();
        bubble.currentTime = 0;
        // If we got here, audio is allowed
        if (prior) setNeedsUnlock(false);
      } catch {
        // Still blocked — show pill (unless already clicked)
        if (!prior) setNeedsUnlock(true);
      } finally {
        tryingRef.current = false;
      }
    };

    // Try on pointer move and first hover over the document
    const pointerProbe = () => tryUnlock();
    window.addEventListener("pointermove", pointerProbe, { once: true });
    document.addEventListener("mouseenter", pointerProbe, { once: true });

    // If they already consented in a previous visit, try immediately too
    if (localStorage.getItem("sfxEnabled") === "1") {
      // next microtask so media is ready
      setTimeout(tryUnlock, 0);
    }

    return () => {
      unbind();
      mo.disconnect();
      bubbleRef.current = null;
      window.removeEventListener("pointermove", pointerProbe);
      document.removeEventListener("mouseenter", pointerProbe);
    };
  }, []);

  // Click handler for the enable pill
  const enableNow = async () => {
    try {
      const base = bubbleRef.current;
      if (!base) return;
      await base.play();  // this is the user gesture the browser accepts
      base.pause();
      base.currentTime = 0;
      localStorage.setItem("sfxEnabled", "1");
      setNeedsUnlock(false);
    } catch {
      // if still blocked, keep the pill visible
      setNeedsUnlock(true);
    }
  };

  // Tiny floating enable pill (only shows if needed)
  return needsUnlock ? (
    <button
      onClick={enableNow}
      className="fixed bottom-4 right-4 z-50 rounded-full px-3 py-1.5
                 text-xs font-medium text-white bg-blue-600/90 hover:bg-blue-500
                 border border-white/20 shadow-lg shadow-black/30"
      aria-label="Enable sound"
    >
      🔊 Enable sound
    </button>
  ) : null;
}
