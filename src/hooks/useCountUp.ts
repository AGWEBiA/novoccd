import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 2000, start = 0, trigger = true) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start, trigger]);

  return value;
}
