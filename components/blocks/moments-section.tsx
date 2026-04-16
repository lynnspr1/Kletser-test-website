"use client"

import React from "react"

const C = {
  espresso:   "#795040",
  terracotta: "#B5522A",
  cream:      "#F5F0E8",
  blush:      "#FDF6EE",
  mocha:      "#7A4035",
  sand:       "#D4B98A",
}

const fontDisplay: React.CSSProperties = {
  fontFamily:    '"Fredoka", system-ui, sans-serif',
  fontWeight:    400,
  letterSpacing: "-0.02em",
  textTransform: "uppercase",
}

const fontBody: React.CSSProperties = {
  fontFamily: '"Space Grotesk", system-ui, sans-serif',
}

/* Coffee cup icon */
function CupIcon() {
  return (
    <svg viewBox="0 0 32 32" width={20} height={20} fill="none">
      <path d="M6 10 L8 26 L24 26 L26 10 Z" stroke={C.terracotta} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M26 14 C32 14, 32 22, 26 22" stroke={C.terracotta} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M11 8 C10.5 5, 11.5 4, 11 2" stroke={C.terracotta} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 7 C15.5 4, 16.5 3, 16 1" stroke={C.terracotta} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

/* Fork & knife icon */
function ForkKnifeIcon() {
  return (
    <svg viewBox="0 0 32 32" width={20} height={20} fill="none">
      <path d="M10 3 L10 12 C10 14, 12 15, 12 17 L12 29" stroke={C.terracotta} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M7 3 L7 9 M13 3 L13 9 M7 9 C7 12, 13 12, 13 9" stroke={C.terracotta} strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M22 3 C22 3, 22 16, 22 22 C22 25, 25 26, 25 29" stroke={C.terracotta} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M22 3 C25 5, 25 10, 22 12" stroke={C.terracotta} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

/* Wine glass icon */
function GlassIcon() {
  return (
    <svg viewBox="0 0 32 32" width={20} height={20} fill="none">
      <path d="M8 4 C6 14, 8 20, 16 23 C 24 20, 26 14, 24 4 Z" stroke={C.terracotta} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M16 23 L16 29" stroke={C.terracotta} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M11 31 L21 31" stroke={C.terracotta} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10 11 C11 13, 14 14, 16 14" stroke={C.terracotta} strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}

const moments = [
  {
    time:   "08:00 – 12:00",
    label:  "Ochtend",
    title:  "Begin de dag goed",
    desc:   "Koffie die warm blijft, croissants die nog warm zijn. Een rustig moment voor jezelf of samen met iemand die telt.",
    img:    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    icon:   <CupIcon />,
    rotate: "-1.2deg",
  },
  {
    time:   "12:00 – 17:00",
    label:  "Middag",
    title:  "Lunch met de tijd",
    desc:   "Geen haast, wel smaak. Dagschotels, verse soep en lunchgezelligheid die bijna overgaat in de borrel.",
    img:    "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    icon:   <ForkKnifeIcon />,
    rotate: "0.8deg",
  },
  {
    time:   "17:00 – laat",
    label:  "Avond",
    title:  "Blijf nog even",
    desc:   "Het uur van de borrel, het diner, de tweede wijn. De beste gesprekken beginnen pas na zeven uur.",
    img:    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80",
    icon:   <GlassIcon />,
    rotate: "-0.6deg",
  },
]

export function MomentsSection() {
  return (
    <section style={{
      backgroundColor: C.blush,
      padding: "5.5rem 1.5rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Subtle top border */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
        background: `linear-gradient(to right, transparent, rgba(212,185,138,0.4), transparent)`,
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{
            ...fontBody,
            display: "inline-block",
            fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: C.terracotta, marginBottom: "0.75rem",
          }}>
            Van 's ochtends tot laat
          </span>
          <h2 style={{
            ...fontDisplay,
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            color: C.espresso,
            margin: 0, lineHeight: 1.15,
          }}>
            Voor elk moment van de dag
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "1.5rem",
        }}>
          {moments.map(({ time, label, title, desc, img, icon, rotate }) => (
            <div
              key={label}
              style={{
                borderRadius: 18,
                overflow: "hidden",
                background: C.cream,
                boxShadow: "0 8px 32px rgba(30,19,12,0.09), 0 2px 8px rgba(30,19,12,0.05)",
                transform: `rotate(${rotate})`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) translateY(-4px)"
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(30,19,12,0.14), 0 4px 16px rgba(30,19,12,0.07)"
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.transform = `rotate(${rotate})`
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(30,19,12,0.09), 0 2px 8px rgba(30,19,12,0.05)"
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                <img
                  src={img}
                  alt={title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(30,19,12,0.55) 0%, transparent 60%)",
                }} />
                {/* Time badge over image */}
                <div style={{
                  position: "absolute", top: "1rem", left: "1rem",
                  ...fontBody,
                  fontSize: "0.72rem", fontWeight: 600,
                  color: C.cream,
                  backgroundColor: "rgba(30,19,12,0.55)",
                  backdropFilter: "blur(6px)",
                  borderRadius: 9999,
                  padding: "0.3rem 0.75rem",
                  letterSpacing: "0.04em",
                }}>
                  {time}
                </div>
              </div>

              {/* Text */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  {icon}
                  <span style={{
                    ...fontBody,
                    fontSize: "0.7rem", fontWeight: 600,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    color: C.terracotta,
                  }}>
                    {label}
                  </span>
                </div>
                <h3 style={{
                  ...fontDisplay,
                  fontSize: "1.3rem",
                  color: C.espresso,
                  margin: "0 0 0.6rem",
                  lineHeight: 1.2,
                }}>
                  {title}
                </h3>
                <p style={{
                  ...fontBody,
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "rgba(30,19,12,0.60)",
                  margin: 0,
                }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom border */}
      <div style={{
        position: "absolute", bottom: 0, left: "10%", right: "10%", height: 1,
        background: `linear-gradient(to right, transparent, rgba(212,185,138,0.4), transparent)`,
      }} />
    </section>
  )
}
