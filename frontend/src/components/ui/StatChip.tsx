import React from "react";

interface StatChipProps {
  label: string;
  value: string;
}

const StatChip: React.FC<StatChipProps> = ({ label, value }) => {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-3 py-2">
      <p className="text-[0.68rem] text-slate-400">{label}</p>
      <p className="text-[0.82rem] font-semibold text-slate-100">{value}</p>
    </div>
  );
};

export default StatChip;
