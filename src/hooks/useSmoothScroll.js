import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReduced || !hasFinePointer) {
      return;
    }

    let currentY = window.scrollY;
    let targetY = currentY;
    let rafId;
    let isAnimating = false;
    let isSmoothScrolling = false;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const startAnimation = () => {
      if (isAnimating) return;
      isAnimating = true;
      rafId = requestAnimationFrame(animate);
    };

    const animate = () => {
      currentY += (targetY - currentY) * 0.11;
      if (Math.abs(targetY - currentY) < 0.25) {
        currentY = targetY;
        isAnimating = false;
        isSmoothScrolling = false;
        window.scrollTo(0, currentY);
        return;
      }
      isSmoothScrolling = true;
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(animate);
    };

    const onWheel = (event) => {
      if (event.ctrlKey) return;
      event.preventDefault();
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = clamp(targetY + event.deltaY, 0, maxScroll);
      startAnimation();
    };

    const onKeyDown = (event) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const step = window.innerHeight * 0.9;
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        targetY = clamp(targetY + step, 0, maxScroll);
        startAnimation();
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        targetY = clamp(targetY - step, 0, maxScroll);
        startAnimation();
      }
      if (event.key === "Home") {
        targetY = 0;
        startAnimation();
      }
      if (event.key === "End") {
        targetY = maxScroll;
        startAnimation();
      }
    };

    const onScroll = () => {
      if (isSmoothScrolling) return;
      currentY = window.scrollY;
      targetY = window.scrollY;
    };

    const onResize = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = clamp(targetY, 0, maxScroll);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
}
