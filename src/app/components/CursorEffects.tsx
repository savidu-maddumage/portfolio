"use client";

import { useEffect } from "react";

export default function CursorEffects() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".custom-cursor");
    if (!cursor) return;

    const moveCursor = (event: PointerEvent) => {
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");
    };
    const hideCursor = () => cursor.classList.remove("is-visible");
    window.addEventListener("pointermove", moveCursor);
    document.documentElement.addEventListener("pointerleave", hideCursor);

    const smoothWheel = window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    let scrollFrame = 0;
    let scrollTarget = window.scrollY;
    let restoreScrollBehavior: ReturnType<typeof setTimeout>;
    const onWheel = (event: WheelEvent) => {
      if (!smoothWheel || event.ctrlKey || !(event.target instanceof Element)) return;
      if (event.target.closest("input, textarea, select, [contenteditable='true'], [data-native-scroll]")) return;

      if (!scrollFrame) scrollTarget = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextTarget = Math.max(0, Math.min(maxScroll, scrollTarget + event.deltaY));
      if (nextTarget === scrollTarget) return;

      event.preventDefault();
      scrollTarget = nextTarget;
      document.documentElement.style.scrollBehavior = "auto";
      window.clearTimeout(restoreScrollBehavior);
      if (!scrollFrame) {
        const animateScroll = () => {
          const distance = scrollTarget - window.scrollY;
          if (Math.abs(distance) < 0.7) {
            window.scrollTo(0, scrollTarget);
            scrollFrame = 0;
            restoreScrollBehavior = window.setTimeout(() => {
              document.documentElement.style.scrollBehavior = originalScrollBehavior;
            }, 80);
            return;
          }
          window.scrollTo(0, window.scrollY + distance * 0.12);
          scrollFrame = window.requestAnimationFrame(animateScroll);
        };
        scrollFrame = window.requestAnimationFrame(animateScroll);
      }
    };
    if (smoothWheel) window.addEventListener("wheel", onWheel, { passive: false });

    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    revealItems.forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.documentElement.removeEventListener("pointerleave", hideCursor);
      window.removeEventListener("wheel", onWheel);
      window.cancelAnimationFrame(scrollFrame);
      window.clearTimeout(restoreScrollBehavior);
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      observer.disconnect();
    };
  }, []);

  return <div className="custom-cursor" aria-hidden="true" />;
}
