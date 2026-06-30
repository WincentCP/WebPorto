"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [time, setTime] = useState<{ hour: string; minute: string; period: string }>({
    hour: "",
    minute: "",
    period: "",
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // Japan time (JST = UTC+9)
      const jstOptions: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formatted = new Intl.DateTimeFormat("en-US", jstOptions).format(now);
      // formatted is like "10:30 PM"
      const match = formatted.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/);
      if (match) {
        setTime({ hour: match[1], minute: match[2], period: match[3] });
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="localtime">
      <span className="text-base-site ink-anim">Iwate, Japan</span>
      &nbsp;
      <span className="text-base-site ink-anim">{time.hour}</span>
      <span className="text-base-site blink ink-anim">:</span>
      <span className="text-base-site ink-anim">{time.minute}</span>
      <span className="text-base-site ink-anim">{time.period}</span>
    </span>
  );
}
