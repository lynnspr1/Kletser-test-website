"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

const C = {
  espresso:   "#795040",
  terracotta: "#B5522A",
  cream:      "#F5F0E8",
  blush:      "#FDF6EE",
  mocha:      "#7A4035",
  sand:       "#D4B98A",
}

const fontDisplay: React.CSSProperties = {
  fontFamily: '"Playfair Display", Georgia, serif',
  fontWeight: 600,
  letterSpacing: "-0.01em",
}

const fontBody: React.CSSProperties = {
  fontFamily: '"Montserrat", system-ui, sans-serif',
}

const fontAccent: React.CSSProperties = {
  fontFamily: '"Caveat", cursive',
  fontWeight: 500,
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section style={{
      height: "100vh",
      backgroundColor: C.espresso,
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Noise texture */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 60% 60% at 0% 100%, rgba(0,0,0,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 100% 0%, rgba(0,0,0,0.10) 0%, transparent 55%)
        `,
      }} />


      {/* Drinks illustration — direct child of section so mix-blend-mode works */}
      <img
        src="/brand_assets/drinks.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-2%",
          bottom: 0,
          width: "clamp(460px, 52vw, 740px)",
          opacity: 0.32,
          mixBlendMode: "screen",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      />

      {/* Handwritten accent — above the glasses */}
      <span
        aria-hidden="true"
        style={{
          ...fontAccent,
          position: "absolute",
          bottom: "18%",
          right: "clamp(10%, 18vw, 24%)",
          fontSize: "1.65rem",
          color: "rgba(245,240,232,0.22)",
          transform: "rotate(-7deg)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 2,
        }}
      >
        Nog eentje dan?
      </span>

      {/* Two-column grid: left = content, right = illustration */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 2rem",
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: 72,
        position: "relative",
        zIndex: 2,
      }}>

        {/* Left column — content */}
        <div style={{
          padding: "5rem 3rem 6rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}>

          {/* Badge */}
          <span style={{
            ...fontBody,
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            border: `1px solid rgba(245,240,232,0.25)`,
            backgroundColor: "rgba(245,240,232,0.08)",
            color: "rgba(245,240,232,0.70)",
            borderRadius: 9999,
            padding: "0.3rem 1rem",
            fontSize: "0.72rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "2.5rem",
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%",
              backgroundColor: C.cream, display: "inline-block",
              opacity: 0.6,
            }} />
            Horst · Café & Bar
          </span>

          {/* Logo as main hero visual */}
          <h1 style={{ margin: "0 0 2rem", lineHeight: 1 }}>
            <img
              src="/brand_assets/logo-hero.png"
              alt="De Kletser"
              style={{
                display: "block",
                width: "clamp(280px, 80%, 520px)",
                filter: "drop-shadow(0 2px 32px rgba(0,0,0,0.30))",
              }}
            />
          </h1>

          {/* Italic subline */}
          <p style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
            color: "rgba(245,240,232,0.65)",
            lineHeight: 1.5,
            margin: "0 0 1.25rem",
          }}>
            Van je eerste koffie tot het laatste rondje.
          </p>

          {/* Body paragraph */}
          <p style={{
            ...fontBody,
            fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
            color: "rgba(245,240,232,0.50)",
            lineHeight: 1.75,
            margin: "0 0 2rem",
            fontWeight: 400,
          }}>
            Kom langs voor koffie, wat lekkers of een borrel<br />
            en blijf gerust wat langer hangen.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "3rem" }}>
            <Link
              href="/#menu"
              style={{
                ...fontBody,
                display: "inline-flex", alignItems: "center",
                backgroundColor: C.terracotta, color: C.cream,
                padding: "0.9rem 1.8rem",
                borderRadius: 8,
                fontSize: "0.875rem", fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = C.mocha
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(181,82,42,0.4)"
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = C.terracotta
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              Bekijk ons menu
            </Link>

            <Link
              href="/contact"
              style={{
                ...fontBody,
                display: "inline-flex", alignItems: "center",
                backgroundColor: "transparent", color: C.cream,
                border: `1.5px solid rgba(245,240,232,0.30)`,
                padding: "0.9rem 1.8rem",
                borderRadius: 8,
                fontSize: "0.875rem", fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = "rgba(245,240,232,0.10)"
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.65)"
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = "transparent"
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.30)"
              }}
            >
              Reserveer een tafel
            </Link>
          </div>

          {/* Address */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
              <path d="M6.5 1C3.46 1 1 3.46 1 6.5c0 4.5 5.5 8.5 5.5 8.5S12 11 12 6.5C12 3.46 9.54 1 6.5 1z" stroke="rgba(245,240,232,0.3)" strokeWidth="1.4" fill="none"/>
              <circle cx="6.5" cy="6.5" r="2" stroke="rgba(245,240,232,0.3)" strokeWidth="1.4" fill="none"/>
            </svg>
            <span style={{ ...fontBody, fontSize: "0.78rem", color: "rgba(245,240,232,0.30)", letterSpacing: "0.02em" }}>
              Wilhelminaplein 13, 5961 ES Horst
            </span>
          </div>

        </div>

        {/* Right column — empty, illustration is absolute on section */}
        <div aria-hidden="true" />

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        opacity: 0.3,
        zIndex: 1,
      }}>
        <span style={{
          ...fontBody, fontSize: "0.62rem",
          color: C.cream, letterSpacing: "0.1em", textTransform: "uppercase",
        }}>
          scroll
        </span>
        <div style={{
          width: 1, height: 32,
          background: `linear-gradient(to bottom, ${C.cream}, transparent)`,
        }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
