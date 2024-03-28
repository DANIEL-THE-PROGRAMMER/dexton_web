"use client";

export const BgGradient = () => {
  return <div className="absolute gradient1 top-0 w-full right-0 z-10"></div>;
};

export const Blurrybg = () => {
  return (
    <div className="absolute bottom-0 right-0 w-full flex justify-center">
      <div className="w-[856px] border-black border-2 h-[800px] rotate-[-46.707deg] relative">
        <div className="absolute left-0 top-0 blur1"></div>
        <div className="absolute bottom-0 right-0 blur2"></div>
      </div>
    </div>
  );
};
