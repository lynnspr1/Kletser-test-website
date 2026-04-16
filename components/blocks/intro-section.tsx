import React from "react"

const C = {
  espresso:   "#795040",
  terracotta: "#B5522A",
  cream:      "#F5F0E8",
  sand:       "#D4B98A",
}

const fontDisplay: React.CSSProperties = {
  fontFamily: '"Fredoka", system-ui, sans-serif',
  fontWeight: 400,
  letterSpacing: "-0.02em",
}

const fontBody: React.CSSProperties = {
  fontFamily: '"Space Grotesk", system-ui, sans-serif',
}

function DoodleLine() {
  return (
    <svg
      viewBox="0 0 320 18"
      style={{ width: "100%", maxWidth: 320, height: 18, display: "block" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M 5 12 C 22 5, 42 16, 62 10 C 82 4, 102 15, 122 10 C 142 5, 162 15, 182 10 C 202 5, 222 15, 242 10 C 262 5, 282 14, 315 11"
        stroke={C.sand}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* Small hand-drawn asterisk / star accent */
function StarAccent({ color = C.terracotta, size = 22 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <path d="M12 2 L13 10 L20 6 L15 12 L22 14 L14 14 L16 22 L12 16 L8 22 L10 14 L2 14 L9 12 L4 6 L11 10 Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

export function IntroSection() {
  return (
    <section style={{
      backgroundColor: C.cream,
      padding: "5.5rem 1.5rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Subtle background texture */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.018'/%3E%3C/svg%3E")`,
      }} />

      <div style={{
        maxWidth: 760, margin: "0 auto",
        textAlign: "center", position: "relative",
      }}>

        {/* Top accent */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
          <DoodleLine />
          <StarAccent />
          <DoodleLine />
        </div>

        {/* Pull quote */}
        <blockquote style={{
          ...fontDisplay,
          fontStyle: "italic",
          fontSize: "clamp(1.75rem, 4vw, 2.8rem)",
          color: C.espresso,
          lineHeight: 1.35,
          margin: "0 0 2rem",
        }}>
          "Kletsen doe je het best<br />
          aan een goed gevulde tafel."
        </blockquote>

        {/* Terracotta short rule */}
        <div style={{
          width: 44, height: 2.5, borderRadius: 2,
          backgroundColor: C.terracotta,
          margin: "0 auto 2rem",
        }} />

        {/* Description */}
        <p style={{
          ...fontBody,
          fontSize: "1.05rem",
          lineHeight: 1.85,
          color: "rgba(30,19,12,0.62)",
          maxWidth: 540,
          margin: "0 auto 2.5rem",
        }}>
          Café de Kletser is de plek waar mensen graag binnenstappen
          en langer blijven dan gepland.
        </p>

        {/* Three pillars */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2.5rem",
          marginTop: "1rem",
        }}>
          {[
            { label: "Koffie & brunch", sub: "Elke ochtend" },
            { label: "Lunch & diner",   sub: "Van middag tot laat" },
            { label: "Borrel & bier",   sub: "Als het moet, en als het niet moet" },
          ].map(({ label, sub }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                ...fontDisplay,
                fontSize: "1.1rem",
                color: C.espresso,
                marginBottom: "0.3rem",
              }}>
                {label}
              </div>
              <div style={{
                ...fontBody,
                fontSize: "0.8rem",
                color: "rgba(30,19,12,0.45)",
              }}>
                {sub}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "2.5rem" }}>
          <DoodleLine />
          <StarAccent />
          <DoodleLine />
        </div>

      </div>
    </section>
  )
}
