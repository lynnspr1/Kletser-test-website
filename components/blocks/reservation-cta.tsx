"use client"

import React from "react"
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
  fontFamily:    '"Playfair Display", Georgia, serif',
  fontWeight:    600,
  letterSpacing: "-0.01em",
}

const fontBody: React.CSSProperties = {
  fontFamily: '"Montserrat", system-ui, sans-serif',
}

const fontAccent: React.CSSProperties = {
  fontFamily: '"Caveat", cursive',
  fontWeight: 500,
}

function WavyLineLight() {
  return (
    <svg viewBox="0 0 280 16" style={{ width: 280, height: 14, display: "block" }} preserveAspectRatio="none">
      <path
        d="M 3 10 C 20 3, 40 14, 60 9 C 80 4, 100 14, 120 9 C 140 4, 160 14, 180 9 C 200 4, 220 14, 240 9 C 255 5, 270 11, 277 10"
        stroke="rgba(212,185,138,0.35)"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ReservationCta() {
  return (
    <section style={{
      backgroundColor: C.espresso,
      padding: "6rem 1.5rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Noise */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }} />

      {/* Terracotta radial glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(181,82,42,0.1) 0%, transparent 65%)",
      }} />

      <div style={{
        maxWidth: 700, margin: "0 auto",
        textAlign: "center", position: "relative",
      }}>

        {/* Doodle lines */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <WavyLineLight />
        </div>

        {/* Badge */}
        <span style={{
          ...fontBody,
          display: "inline-block",
          border: `1px solid rgba(181,82,42,0.4)`,
          backgroundColor: "rgba(181,82,42,0.09)",
          color: C.terracotta,
          borderRadius: 9999,
          padding: "0.28rem 1rem",
          fontSize: "0.7rem", fontWeight: 600,
          letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}>
          Reserveer een tafel
        </span>

        {/* Heading */}
        <h2 style={{
          ...fontDisplay,
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          color: C.cream,
          lineHeight: 1.2,
          margin: "0 0 1.25rem",
        }}>
          Zeker zijn van<br />een tafel?
        </h2>

        {/* Body */}
        <p style={{
          ...fontBody,
          fontSize: "1rem",
          lineHeight: 1.8,
          color: "rgba(245,240,232,0.50)",
          maxWidth: 460, margin: "0 auto 2.5rem",
        }}>
          Reserveer een tafel en wij zorgen voor de rest.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.875rem" }}>
          <Link
            href="/contact"
            style={{
              ...fontBody,
              display: "inline-flex", alignItems: "center",
              backgroundColor: C.terracotta, color: C.cream,
              padding: "0.95rem 2rem",
              borderRadius: 8,
              fontSize: "0.9rem", fontWeight: 600,
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
            Reserveer nu
          </Link>

          <Link
            href="/contact"
            style={{
              ...fontBody,
              display: "inline-flex", alignItems: "center",
              backgroundColor: "transparent", color: C.cream,
              border: `1.5px solid rgba(245,240,232,0.22)`,
              padding: "0.95rem 2rem",
              borderRadius: 8,
              fontSize: "0.9rem", fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = "rgba(245,240,232,0.07)"
              e.currentTarget.style.borderColor = "rgba(245,240,232,0.55)"
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.borderColor = "rgba(245,240,232,0.22)"
            }}
          >
            Stuur een bericht
          </Link>
        </div>

        {/* Hours note */}
        <p style={{
          ...fontBody,
          fontSize: "0.8rem",
          color: "rgba(245,240,232,0.28)",
          marginTop: "2rem",
          letterSpacing: "0.02em",
        }}>
          Ma – vr 08:00 – 23:00 &nbsp;·&nbsp; Za 09:00 – 00:00 &nbsp;·&nbsp; Zo 10:00 – 22:00
        </p>

        <span aria-hidden="true" style={{
          ...fontAccent,
          display: "inline-block",
          fontSize: "1.5rem",
          color: "rgba(245,240,232,0.18)",
          marginTop: "1.25rem",
          transform: "rotate(3deg)",
        }}>
          Tot straks!
        </span>

        {/* Bottom doodle */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <WavyLineLight />
        </div>
      </div>
    </section>
  )
}
