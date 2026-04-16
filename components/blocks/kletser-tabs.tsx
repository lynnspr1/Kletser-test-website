"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { UtensilsCrossed, CalendarDays, Users, ArrowRight } from "lucide-react"

/* ─────────────────────────────────────────────
   Brand colours
───────────────────────────────────────────── */
const C = {
  terracotta: "#B5522A",
  cream:      "#F5F0E8",
  blush:      "#FDF6EE",
  espresso:   "#795040",
  mocha:      "#7A4035",
  sand:       "#D4B98A",
} as const

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
export interface TabContent {
  badge:       string
  title:       string
  description: string
  buttonText:  string
  buttonHref?: string
  imageSrc:    string
  imageAlt:    string
}

export interface Tab {
  value:   string
  icon:    React.ReactNode
  label:   string
  content: TabContent
}

export interface KletserTabsProps {
  heading?:     string
  description?: string
  tabs?:        Tab[]
}

/* ─────────────────────────────────────────────
   Default content
───────────────────────────────────────────── */
const defaultTabs: Tab[] = [
  {
    value: "menu",
    icon:  <UtensilsCrossed size={16} />,
    label: "Menu",
    content: {
      badge:       "Onze kaart",
      title:       "Wat er op tafel komt",
      description: "Van goede koffie en een Limburgs stuk gebak tot bitterballen, Aperol Spritz en speciaalbier. Op onze kaart vind je smaakvolle hapjes en drankjes voor ieder moment van de dag.",
      buttonText:  "Bekijk menu",
      buttonHref:  "#",
      imageSrc:    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
      imageAlt:    "Smaakvolle gerechten bij De Kletser",
    },
  },
  {
    value: "reserveren",
    icon:  <CalendarDays size={16} />,
    label: "Reserveren",
    content: {
      badge:       "Plan je bezoek",
      title:       "Zeker zijn van een tafel bij De Kletser?",
      description: "Kom langs voor koffie, lunch, borrel of diner en reserveer eenvoudig jouw tafel. Zo ben je verzekerd van een fijne plek om samen te genieten.",
      buttonText:  "Reserveer nu",
      buttonHref:  "#",
      imageSrc:    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
      imageAlt:    "Gezellige tafelopstelling bij De Kletser",
    },
  },
  {
    value: "werken-bij",
    icon:  <Users size={16} />,
    label: "Werken bij",
    content: {
      badge:       "Join the team",
      title:       "Werken op een plek vol sfeer en gezelligheid",
      description: "Lijkt het je leuk om onderdeel te zijn van De Kletser? We zijn altijd op zoek naar enthousiaste mensen met gevoel voor gastvrijheid en energie.",
      buttonText:  "Bekijk vacatures",
      buttonHref:  "#",
      imageSrc:    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80",
      imageAlt:    "Het team van De Kletser aan het werk",
    },
  },
]

/* ─────────────────────────────────────────────
   Shared font styles
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function KletserTabs({
  heading     = "Kies je moment",
  description = "Bijkletsen met een vriendin, een borrel na werk of een avond die nét iets langer duurt, bij De Kletser is er altijd een reden om langs te komen.",
  tabs        = defaultTabs,
}: KletserTabsProps) {
  const [active, setActive] = React.useState(tabs[0].value)

  return (
    <section id="menu" style={{ backgroundColor: C.cream, padding: "5rem 0", position: "relative", overflow: "hidden" }}>

      {/* Noise texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>

          <h2 style={{
            ...fontDisplay,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: C.espresso,
            maxWidth: 600, margin: "0 auto 1rem",
            lineHeight: 1.2,
          }}>
            {heading}
          </h2>

          <p style={{
            ...fontBody,
            fontSize: "1rem", lineHeight: 1.85,
            color: "rgba(30,19,12,0.60)",
            maxWidth: 480, margin: "0 auto 1.25rem",
          }}>
            {description}
          </p>

          <span aria-hidden="true" style={{
            ...fontAccent,
            fontSize: "1.5rem",
            color: "rgba(121,80,64,0.28)",
            display: "inline-block",
            transform: "rotate(-4deg)",
          }}>
            Kom langs
          </span>
        </div>

        {/* ── Tabs ── */}
        <TabsPrimitive.Root value={active} onValueChange={setActive}>

          {/* Tab list */}
          <TabsPrimitive.List style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: "0.375rem",
            width: "fit-content", margin: "0 auto 1.75rem",
            padding: "0.375rem",
            borderRadius: 16,
            backgroundColor: "rgba(30,19,12,0.05)",
            border: `1px solid rgba(212,185,138,0.40)`,
          }}>
            {tabs.map((tab) => {
              const isActive = active === tab.value
              return (
                <TabsPrimitive.Trigger
                  key={tab.value}
                  value={tab.value}
                  style={{
                    ...fontBody,
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    padding: "0.625rem 1.25rem",
                    borderRadius: 12,
                    fontSize: "0.875rem", fontWeight: 600,
                    cursor: "pointer", border: "none",
                    transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s",
                    backgroundColor: isActive ? C.terracotta : "transparent",
                    color:           isActive ? C.cream       : "rgba(30,19,12,0.55)",
                    boxShadow:       isActive ? "0 3px 16px rgba(181,82,42,0.30), 0 1px 4px rgba(181,82,42,0.15)" : "none",
                    transform:       isActive ? "translateY(-1px)" : "translateY(0)",
                    outline: "none",
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </TabsPrimitive.Trigger>
              )
            })}
          </TabsPrimitive.List>

          {/* Content panel */}
          <div style={{
            borderRadius: 20,
            backgroundColor: C.blush,
            border: `1px solid rgba(212,185,138,0.25)`,
            boxShadow: "0 4px 24px rgba(30,19,12,0.07), 0 1px 6px rgba(30,19,12,0.04)",
            padding: "clamp(1.5rem, 5vw, 3.5rem)",
          }}>
            {tabs.map((tab) => (
              <TabsPrimitive.Content
                key={tab.value}
                value={tab.value}
                style={{ outline: "none" }}
              >
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                  gap: "clamp(2rem, 5vw, 3.5rem)",
                  alignItems: "center",
                }}>

                  {/* Left: text */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

                    <span style={{
                      ...fontBody,
                      display: "inline-flex", width: "fit-content",
                      border: `1.5px solid ${C.terracotta}`,
                      backgroundColor: "rgba(181,82,42,0.05)",
                      color: C.terracotta,
                      borderRadius: 9999,
                      padding: "0.2rem 0.875rem",
                      fontSize: "0.7rem", fontWeight: 600,
                    }}>
                      {tab.content.badge}
                    </span>

                    <h3 style={{
                      ...fontDisplay,
                      fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                      color: C.espresso,
                      lineHeight: 1.2,
                      margin: 0,
                    }}>
                      {tab.content.title}
                    </h3>

                    <p style={{
                      ...fontBody,
                      fontSize: "1rem", lineHeight: 1.85,
                      color: "rgba(30,19,12,0.65)",
                      margin: 0, textTransform: "none",
                    }}>
                      {tab.content.description}
                    </p>

                    <a
                      href={tab.content.buttonHref ?? "#"}
                      style={{
                        ...fontBody,
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        width: "fit-content",
                        backgroundColor: C.terracotta, color: C.cream,
                        padding: "0.75rem 1.5rem",
                        borderRadius: 8,
                        fontSize: "0.875rem", fontWeight: 600,
                        textDecoration: "none",
                        marginTop: "0.25rem",
                        transition: "background 0.2s, box-shadow 0.2s",
                      }}
                      onMouseOver={e => {
                        e.currentTarget.style.backgroundColor = C.mocha
                        e.currentTarget.style.boxShadow = "0 4px 16px rgba(181,82,42,0.3)"
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.backgroundColor = C.terracotta
                        e.currentTarget.style.boxShadow = "none"
                      }}
                    >
                      {tab.content.buttonText}
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Right: image */}
                  <div style={{
                    position: "relative", overflow: "hidden",
                    borderRadius: 16, aspectRatio: "4 / 3",
                    boxShadow: "0 20px 48px rgba(30,19,12,0.12), 0 4px 12px rgba(30,19,12,0.08)",
                  }}>
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      loading="lazy"
                    />
                    <div style={{
                      position: "absolute", inset: 0, pointerEvents: "none",
                      background: "linear-gradient(to top, rgba(30,19,12,0.28) 0%, transparent 55%)",
                    }} />
                  </div>

                </div>
              </TabsPrimitive.Content>
            ))}
          </div>

        </TabsPrimitive.Root>
      </div>
    </section>
  )
}
