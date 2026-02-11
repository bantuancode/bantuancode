"use client";

import React, { useState, useEffect } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(percentage, 100));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-800/50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
