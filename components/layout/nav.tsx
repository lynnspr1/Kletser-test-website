"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const C = {
  espresso:   "#795040",
  terracotta: "#B5522A",
  cream:      "#F5F0E8",
  blush:      "#FDF6EE",
}

const fontBody: React.CSSProperties = {
  fontFamily: '"Montserrat", system-ui, sans-serif',
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
      background: scrolled ? "rgba(30,19,12,0.93)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      boxShadow: scrolled ? "0 1px 0 rgba(245,240,232,0.08)" : "none",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src="/brand_assets/logo-text.png"
            alt="De Kletser"
            width={160}
            height={60}
            style={{ height: 38, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {[
            { href: "/",        label: "Home"      },
            { href: "/#menu",   label: "Menu"      },
            { href: "/contact", label: "Contact"   },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                ...fontBody,
                fontSize: "0.85rem", fontWeight: 500,
                letterSpacing: "0.01em",
                color: "rgba(245,240,232,0.75)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseOver={e => e.currentTarget.style.color = C.cream}
              onMouseOut={e => e.currentTarget.style.color = "rgba(245,240,232,0.75)"}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            style={{
              ...fontBody,
              fontSize: "0.85rem", fontWeight: 600,
              letterSpacing: "0.01em",
              color: C.cream,
              border: `1.5px solid rgba(245,240,232,0.45)`,
              borderRadius: 6,
              padding: "0.45rem 1.1rem",
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = "rgba(245,240,232,0.12)"
              e.currentTarget.style.borderColor = "rgba(245,240,232,0.8)"
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.borderColor = "rgba(245,240,232,0.45)"
            }}
          >
            Reserveer
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", padding: 4, color: C.cream,
          }}
          className="mobile-hamburger"
        >
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <path d="M0 1H24M0 9H24M0 17H24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(30,19,12,0.97)",
          padding: "1rem 1.5rem 1.5rem",
          borderTop: "1px solid rgba(245,240,232,0.08)",
          display: "flex", flexDirection: "column", gap: 0,
        }}>
          {[
            { href: "/",        label: "Home"    },
            { href: "/#menu",   label: "Menu"    },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                ...fontBody,
                fontSize: "0.9rem", fontWeight: 500,
                color: "rgba(245,240,232,0.75)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(245,240,232,0.07)",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              ...fontBody,
              marginTop: "1rem", textAlign: "center",
              background: C.terracotta, color: C.cream,
              borderRadius: 6, padding: "0.75rem",
              fontWeight: 600, fontSize: "0.875rem",
              textDecoration: "none",
            }}
          >
            Reserveer een tafel
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
