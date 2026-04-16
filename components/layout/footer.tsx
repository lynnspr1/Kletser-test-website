"use client"

import React from "react"
import Link from "next/link"

const C = {
  espresso:   "#795040",
  terracotta: "#B5522A",
  cream:      "#F5F0E8",
  blush:      "#FDF6EE",
  mocha:      "#7A4035",
}

const fontBody: React.CSSProperties = {
  fontFamily: '"Montserrat", system-ui, sans-serif',
}

const fontAccent: React.CSSProperties = {
  fontFamily: '"Caveat", cursive',
  fontWeight: 500,
}

const fontDisplay: React.CSSProperties = {
  fontFamily:    '"Playfair Display", Georgia, serif',
  fontWeight:    600,
  letterSpacing: "-0.01em",
}

export function Footer() {
  return (
    <footer style={{
      backgroundColor: C.espresso,
      color: C.cream,
      borderTop: "1px solid rgba(245,240,232,0.08)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "3.5rem 1.5rem 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2.5rem",
      }}>

        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <span style={{ ...fontDisplay, fontSize: "1.4rem", color: C.cream }}>
            De Kletser
          </span>
          <p style={{
            ...fontBody,
            fontSize: "0.875rem", lineHeight: 1.7,
            color: "rgba(245,240,232,0.55)",
            maxWidth: 260,
          }}>
            Het café voor iedereen in het hart van Horst. Voor gezelligheid en geklets.
          </p>
          <span aria-hidden="true" style={{
            ...fontAccent,
            fontSize: "1.4rem",
            color: "rgba(245,240,232,0.22)",
            display: "inline-block",
            transform: "rotate(-3deg)",
            marginTop: "0.25rem",
          }}>
            Zien we je snel?
          </span>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{
            ...fontBody,
            fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: C.terracotta, marginBottom: "1rem",
          }}>
            Navigatie
          </h4>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { href: "/",        label: "Home"      },
              { href: "/#menu",   label: "Menu"      },
              { href: "/contact", label: "Contact"   },
              { href: "/contact", label: "Reserveren" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                style={{
                  ...fontBody,
                  fontSize: "0.875rem",
                  color: "rgba(245,240,232,0.60)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={e => e.currentTarget.style.color = C.cream}
                onMouseOut={e => e.currentTarget.style.color = "rgba(245,240,232,0.60)"}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{
            ...fontBody,
            fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: C.terracotta, marginBottom: "1rem",
          }}>
            Contact
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              "Wilhelminaplein 13",
              "5961 ES Horst",
              "info@dekletser.nl",
              "+31 6 42036967",
            ].map((line) => (
              <span key={line} style={{
                ...fontBody,
                fontSize: "0.875rem",
                color: "rgba(245,240,232,0.60)",
              }}>
                {line}
              </span>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 style={{
            ...fontBody,
            fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: C.terracotta, marginBottom: "1rem",
          }}>
            Openingstijden
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              { day: "Ma – vr",  hours: "08:00 – 23:00" },
              { day: "Zaterdag", hours: "09:00 – 00:00" },
              { day: "Zondag",   hours: "10:00 – 22:00" },
            ].map(({ day, hours }) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <span style={{ ...fontBody, fontSize: "0.875rem", color: "rgba(245,240,232,0.60)" }}>{day}</span>
                <span style={{ ...fontBody, fontSize: "0.875rem", color: "rgba(245,240,232,0.45)" }}>{hours}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "1.25rem 1.5rem",
        borderTop: "1px solid rgba(245,240,232,0.07)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "0.5rem",
      }}>
        <span style={{ ...fontBody, fontSize: "0.8rem", color: "rgba(245,240,232,0.35)" }}>
          © {new Date().getFullYear()} De Kletser — Horst
        </span>
        <span style={{ ...fontBody, fontSize: "0.8rem", color: "rgba(245,240,232,0.25)" }}>
          Gemaakt met liefde voor de kroeg
        </span>
      </div>
    </footer>
  )
}
