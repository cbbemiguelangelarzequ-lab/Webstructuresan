import React from "react";

const GradientBackground: React.FC = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-1/2 aspect-[1108/632] w-[72rem] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.32),_transparent_60%)]" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-[-5rem] -z-10 hidden w-[30rem] bg-[radial-gradient(circle,_rgba(56,189,248,0.18),_transparent_55%)] blur-3xl lg:block" />
    </>
  );
};

export default GradientBackground;
