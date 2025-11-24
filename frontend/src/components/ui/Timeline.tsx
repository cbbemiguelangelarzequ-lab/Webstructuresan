import React from "react";

export interface Step {
  title: string;
  description: string;
}

interface TimelineProps {
  steps: Step[];
  accent: "sky" | "emerald";
}

const Timeline: React.FC<TimelineProps> = ({ steps, accent }) => {
  const accentColor =
    accent === "sky"
      ? "bg-sky-500 text-sky-100 ring-sky-400/80"
      : "bg-emerald-500 text-emerald-950 ring-emerald-400/80";

  const lineColor =
    accent === "sky" ? "bg-sky-500/40" : "bg-emerald-500/40";

  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full text-[0.8rem] ring-2 ${accentColor}`}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`mt-1 h-full w-px ${lineColor}`} />
            )}
          </div>
          <div className="rounded-2xl bg-slate-900/80 px-3 py-2.5 text-[0.86rem] text-slate-100 ring-1 ring-white/5">
            <p className="font-semibold">{step.title}</p>
            <p className="mt-1 text-slate-300">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
