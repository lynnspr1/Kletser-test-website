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
}

const fontBody: React.CSSProperties = {
  fontFamily: '"Space Grotesk", system-ui, sans-serif',
}

/* Hand-drawn looping underline / highlight stroke */
function LoopAccent({ color = C.terracotta }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 260 22"
      style={{ position: "absolute", left: "-4px", bottom: -6, width: "calc(100% + 8px)", height: 18, pointerEvents: "none" }}
      preserveAspectRatio="none"
    >
      <path
        d="M 4 16 C 30 6, 65 18, 100 13 C 135 8, 170 18, 205 13 C 230 9, 248 14, 256 13"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  )
}

/* Small hand-drawn circle / ring accent */
function RingAccent() {
  return (
    <svg viewBox="0 0 48 48" width={48} height={48} fill="none" style={{ display: "block" }}>
      <path
        d="M 24 4 C 34 4, 44 12, 44 24 C 44 36, 34 44, 24 44 C 14 44, 4 36, 4 24 C 4 12, 14 3, 24 4 Z"
        stroke={C.sand}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
    </svg>
  )
}

/* Loose hand-drawn arrow — points right */
function ArrowDoodle() {
  return (
    <svg viewBox="0 0 60 24" width={52} height={20} fill="none" style={{ display: "block" }}>
      <path
        d="M 2 13 C 15 10, 32 11, 48 12"
        stroke={C.sand}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 42 7 C 46 9, 50 12, 42 17"
        stroke={C.sand}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function AtmosphereSection() {
  return (
    <section style={{
      backgroundColor: C.espresso,
      padding: "0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Noise overlay */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.042'/%3E%3C/svg%3E")`,
      }} />

      {/* Full-bleed editorial layout */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 560,
      }}
        className="atmosphere-grid"
      >

        {/* Left — image, slightly offset */}
        <div style={{
          position: "relative",
          overflow: "hidden",
          minHeight: 480,
        }}>
          <img
            src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=900&q=80"
            alt="Sfeer bij De Kletser"
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center",
              display: "block",
              filter: "brightness(0.75) saturate(0.9)",
            }}
            loading="lazy"
          />
          {/* Colour treatment layer */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(181,82,42,0.18) 0%, rgba(30,19,12,0.3) 70%)",
            mixBlendMode: "multiply",
          }} />
          {/* Right edge fade into dark section */}
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0, width: "40%",
            background: `linear-gradient(to right, transparent, ${C.espresso})`,
          }} />
        </div>

        {/* Right — text content */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem 5% 4rem 10%",
          position: "relative", zIndex: 2,
        }}>

          {/* Decorative ring + arrow cluster */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
            <RingAccent />
            <ArrowDoodle />
          </div>

          {/* Label */}
          <span style={{
            ...fontBody,
            fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: C.terracotta,
            marginBottom: "1.1rem",
            display: "block",
          }}>
            De sfeer
          </span>

          {/* Main statement */}
          <h2 style={{
            ...fontDisplay,
            fontStyle: "italic",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: C.cream,
            lineHeight: 1.25,
            margin: "0 0 1.5rem",
            textTransform: "none",
          }}>
            Je bent er nog niet{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              klaar mee
              <LoopAccent color={C.terracotta} />
            </span>{" "}
            als je al binnenstapt.
          </h2>

          {/* Body copy */}
          <p style={{
            ...fontBody,
            fontSize: "0.975rem",
            lineHeight: 1.85,
            color: "rgba(245,240,232,0.55)",
            maxWidth: 420,
            margin: "0 0 1.75rem",
          }}>
            Bij De Kletser plof je neer en vergeet je de tijd. Het geluid van
            kopjes, de geur van koffie, de gesprekken aan de tafels naast je —
            dit is een plek die aanvoelt als thuis, maar dan met betere wijn.
          </p>

          {/* Signature detail */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(245,240,232,0.08)",
          }}>
            <div style={{ width: 32, height: 1, backgroundColor: C.terracotta, flexShrink: 0 }} />
            <span style={{
              ...fontBody,
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.35)",
              fontStyle: "italic",
            }}>
              Horst, al jaren een vertrouwde plek
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .atmosphere-grid {
            grid-template-columns: 1fr !important;
          }
          .atmosphere-grid > div:first-child {
            min-height: 300px !important;
          }
        }
      `}</style>
    </section>
  )
}
