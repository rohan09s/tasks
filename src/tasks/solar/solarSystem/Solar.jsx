import React from "react";

export default function Solar() {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-black via-slate-950 to-black flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .orbit {
          position: absolute;
          border-radius: 9999px;
          animation-name: orbit;
          animation-timing-function: linear;
          animation-iteration-count: infinite;

          /* More defined orbit look */
          border: 1.5px dashed rgba(180, 220, 255, 0.45);
          box-shadow:
            0 0 6px rgba(150, 200, 255, 0.35),
            inset 0 0 6px rgba(150, 200, 255, 0.15);
        }

        .planet {
          position: absolute;
          top: 50%;
          right: -0.5rem;
          transform: translateY(-50%);
          border-radius: 9999px;
        }
      `}</style>

      <div className="relative w-[720px] h-[720px] flex items-center justify-center">

        {/* Sun */}
        <div className="absolute w-28 h-28 bg-yellow-400 rounded-full z-50
          shadow-[0_0_80px_30px_rgba(255,200,0,0.75)]" />

        {/* MERCURY */}
        <div className="orbit w-[120px] h-[120px]" style={{ animationDuration: "4s" }}>
          <div className="planet w-2.5 h-2.5 bg-gray-400 shadow-md" />
        </div>

        {/* VENUS */}
        <div className="orbit w-[170px] h-[170px]" style={{ animationDuration: "7s" }}>
          <div className="planet w-3.5 h-3.5 bg-orange-400 shadow-md" />
        </div>

        {/* EARTH + MOON */}
        <div className="orbit w-[230px] h-[230px]" style={{ animationDuration: "10s" }}>
          <div className="planet w-4.5 h-4.5 bg-blue-500 relative shadow-lg">
            <div className="absolute w-1.5 h-1.5 bg-gray-300 rounded-full 
              -right-3 top-1/2 -translate-y-1/2 animate-[orbit_1.6s_linear_infinite]" />
          </div>
        </div>

        {/* MARS */}
        <div className="orbit w-[300px] h-[300px]" style={{ animationDuration: "14s" }}>
          <div className="planet w-3.5 h-3.5 bg-red-600 shadow-md" />
        </div>

        {/* JUPITER */}
        <div className="orbit w-[380px] h-[380px]" style={{ animationDuration: "20s" }}>
          <div className="planet w-9 h-9 bg-amber-300 shadow-xl" />
        </div>

        {/* SATURN */}
        <div className="orbit w-[470px] h-[470px]" style={{ animationDuration: "26s" }}>
          <div className="planet w-7 h-7 bg-yellow-200 relative shadow-lg">
            <div className="absolute w-14 h-[7px] border border-yellow-100 rounded-full
              top-1/2 -translate-y-1/2 -left-3 -rotate-12 opacity-90" />
          </div>
        </div>

        {/* URANUS */}
        <div className="orbit w-[560px] h-[560px]" style={{ animationDuration: "32s" }}>
          <div className="planet w-5.5 h-5.5 bg-cyan-200 shadow-md" />
        </div>

        {/* NEPTUNE */}
        <div className="orbit w-[650px] h-[650px]" style={{ animationDuration: "40s" }}>
          <div className="planet w-5.5 h-5.5 bg-blue-700 shadow-lg" />
        </div>

      </div>
    </div>
  );
}
