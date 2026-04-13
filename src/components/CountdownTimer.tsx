import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
  label?: string;
  compact?: boolean;
}

const CountdownTimer = ({ targetDate, label = "WEBINAR GOES LIVE IN", compact = false }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Default: next Saturday at 12pm ET
    const target = targetDate || (() => {
      const now = new Date();
      const next = new Date(now);
      const daysUntilSat = (6 - now.getDay() + 7) % 7 || 7;
      next.setDate(now.getDate() + daysUntilSat);
      next.setHours(12, 0, 0, 0);
      return next;
    })();

    const tick = () => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const units = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HRS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEC" },
  ];

  if (compact) {
    return (
      <div className="text-center">
        <p className="text-[10px] text-[#b87aff] uppercase tracking-[0.2em] font-heading mb-2">{label}</p>
        <div className="flex items-center justify-center gap-1.5">
          {units.map((u, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="rounded-lg px-2.5 py-1.5 min-w-[40px] text-center" style={{ background: 'rgba(124, 58, 237, 0.15)', border: '1px solid rgba(124, 58, 237, 0.25)' }}>
                <span className="font-heading text-lg font-bold text-foreground">{pad(u.value)}</span>
              </div>
              {i < units.length - 1 && <span className="text-[#b87aff] font-bold text-sm">:</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-[10px] text-[#b87aff] uppercase tracking-[0.25em] font-heading mb-3">{label}</p>
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {units.map((u, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center">
              <div className="rounded-xl px-3 py-2 min-w-[52px] sm:min-w-[60px] text-center" style={{ background: 'linear-gradient(145deg, rgba(30, 16, 64, 0.8), rgba(15, 8, 35, 0.9))', border: '1px solid rgba(124, 58, 237, 0.3)', boxShadow: '0 0 15px rgba(124, 58, 237, 0.1)' }}>
                <span className="font-heading text-2xl sm:text-3xl font-bold bg-gradient-to-b from-[#f5c518] to-[#e8a900] bg-clip-text text-transparent">{pad(u.value)}</span>
              </div>
              <span className="text-[9px] text-[#9a8cb0] uppercase tracking-wider font-heading mt-1.5">{u.label}</span>
            </div>
            {i < units.length - 1 && <span className="text-[#b87aff] font-bold text-xl mb-4">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
