'use client'

import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const target = new Date('2026-02-14T00:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = target - now

      if (diff > 0) {
        setTime({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const blocks = [
    { label: 'DAYS', value: time.days },
    { label: 'HOURS', value: time.hours },
    { label: 'MINUTES', value: time.minutes },
    { label: 'SECONDS', value: time.seconds }
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
  src={'../assets/water.jpg'}
  alt="Underwater World"
  className="
    absolute inset-0 w-full h-full object-cover
    contrast-110 saturate-110
    will-change-transform
  "
/>


      {/* OVERLAY */}

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-28 text-center">

        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          ZYPH  '26 Hackathon
        </h1>

        <p className="text-cyan-100/90 tracking-widest text-sm mb-10">
          INNOVATE FOR A SUSTAINABLE FUTURE
        </p>

        {/* TIMER */}
        {/* <div className="flex gap-6 px-10 py-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_0_70px_rgba(0,255,255,0.25)] animate-[float_6s_ease-in-out_infinite]">
          {blocks.map((b, i) => (
            <div key={i} className="text-center min-w-22.5">
              <div className="text-5xl md:text-6xl font-mono font-bold
                text-cyan-200 drop-shadow-[0_0_18px_rgba(0,255,255,0.8)]">
                {String(b.value).padStart(2, '0')}
              </div>
              <div className="mt-2 text-xs tracking-[0.35em] text-cyan-100/80">
                {b.label}
              </div>
            </div>
          ))}
        </div> */}
        <div className="
  relative px-12 py-8
  bg-black/80 backdrop-blur-md
  border border-cyan-400/40
  rounded-xl
  shadow-[0_0_80px_rgba(0,255,255,0.35)]
">

  {/* HUD HEADER */}
  <div className="absolute -top-3 left-1/2 -translate-x-1/2
    px-4 py-1 bg-black border border-cyan-400/40
    text-cyan-300 text-[10px] tracking-widest font-mono">
    MISSION STARTS IN
  </div>

  {/* TIMER */}
  <div className="flex gap-8">
    {blocks.map((b, i) => (
      <div key={i} className="text-center min-w-[90px]">

        {/* NUMBER */}
        <div className="
          text-6xl font-mono font-bold
          text-cyan-300
          drop-shadow-[0_0_20px_rgba(0,255,255,0.9)]
          animate-pulse
        ">
          {String(b.value).padStart(2, '0')}
        </div>

        {/* LABEL */}
        <div className="mt-2 text-[10px] tracking-[0.35em] text-cyan-200/80">
          {b.label}
        </div>

      </div>
    ))}
  </div>

  {/* HUD CORNERS */}
  <span className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400/60" />
  <span className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400/60" />
  <span className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400/60" />
  <span className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/60" />
</div>


        <p className="mt-8 text-cyan-100/80 text-sm">
          {/* 🌊 Building solutions beneath the surface */}
        </p>
      </div>

      {/* INLINE KEYFRAMES (APP ROUTER SAFE) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

    </div>
  )
}

export default Counter
