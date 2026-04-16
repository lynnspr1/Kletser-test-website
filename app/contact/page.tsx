"use client"

import React, { useState } from "react"
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

const inputStyle: React.CSSProperties = {
  ...fontBody as React.CSSProperties,
  width: "100%",
  padding: "0.75rem 1rem",
  fontSize: "0.9rem",
  color: C.espresso,
  backgroundColor: C.blush,
  border: `1.5px solid rgba(30,19,12,0.15)`,
  borderRadius: 8,
  outline: "none",
  boxSizing: "border-box",
}

export default function ContactPage() {
  const [form, setForm] = useState({ naam: "", email: "", datum: "", gasten: "", bericht: "" })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main style={{ backgroundColor: C.cream, minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{
        backgroundColor: C.espresso,
        padding: "8rem 1.5rem 5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }} />
        <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
          <span style={{
            ...fontBody,
            display: "inline-block",
            border: `1.5px solid ${C.terracotta}`,
            backgroundColor: "rgba(181,82,42,0.1)",
            color: C.terracotta,
            borderRadius: 9999,
            padding: "0.25rem 1rem",
            fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}>
            Contact & Reserveren
          </span>
          <h1 style={{
            ...fontDisplay,
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            color: C.cream,
            lineHeight: 1.2,
            margin: "0 0 1rem",
          }}>
            Kom langs bij <span style={{ whiteSpace: "nowrap" }}>De Kletser</span>
          </h1>
          <p style={{
            ...fontBody,
            fontSize: "1rem", lineHeight: 1.85,
            color: "rgba(245,240,232,0.60)",
          }}>
            Een tafel reserveren, een vraag of wil je even kletsen? Neem hier contact met ons op.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(2rem, 5vw, 4rem)",
          alignItems: "start",
        }}>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h2 style={{
                ...fontDisplay,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: C.espresso,
                margin: "0 0 0.5rem",
              }}>
                Vind ons
              </h2>
              <p style={{ ...fontBody, fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(30,19,12,0.65)", margin: 0 }}>
                We zitten in het hart van Horst. Loop even binnen, we kletsen graag met je.
              </p>
            </div>

            {[
              { label: "Adres",         value: "Wilhelminaplein 13, 5961 ES Horst" },
              { label: "Email",         value: "info@dekletser.nl" },
              { label: "Telefoon",      value: "+31 6 42036967" },
            ].map(({ label, value }) => (
              <div key={label} style={{
                padding: "1.25rem",
                backgroundColor: C.blush,
                borderRadius: 12,
                border: `1px solid rgba(212,185,138,0.3)`,
              }}>
                <span style={{
                  ...fontBody,
                  display: "block",
                  fontSize: "0.7rem", fontWeight: 600,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: C.terracotta, marginBottom: "0.35rem",
                }}>
                  {label}
                </span>
                <span style={{ ...fontBody, fontSize: "0.95rem", color: C.espresso }}>
                  {value}
                </span>
              </div>
            ))}

            <div style={{
              padding: "1.25rem",
              backgroundColor: C.blush,
              borderRadius: 12,
              border: `1px solid rgba(212,185,138,0.3)`,
            }}>
              <span style={{
                ...fontBody,
                display: "block",
                fontSize: "0.7rem", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: C.terracotta, marginBottom: "0.75rem",
              }}>
                Openingstijden
              </span>
              {[
                { day: "Ma – vr",  hours: "08:00 – 23:00" },
                { day: "Zaterdag", hours: "09:00 – 00:00" },
                { day: "Zondag",   hours: "10:00 – 22:00" },
              ].map(({ day, hours }) => (
                <div key={day} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "0.3rem 0",
                  borderBottom: "1px solid rgba(30,19,12,0.06)",
                }}>
                  <span style={{ ...fontBody, fontSize: "0.875rem", color: C.espresso }}>{day}</span>
                  <span style={{ ...fontBody, fontSize: "0.875rem", color: "rgba(30,19,12,0.55)" }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: C.blush,
            borderRadius: 20,
            border: `1px solid rgba(212,185,138,0.25)`,
            boxShadow: "0 4px 24px rgba(30,19,12,0.07)",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                <h3 style={{ ...fontDisplay, fontSize: "1.8rem", color: C.espresso, margin: "0 0 0.75rem" }}>
                  Bedankt!
                </h3>
                <p style={{ ...fontBody, fontSize: "0.95rem", color: "rgba(30,19,12,0.65)", lineHeight: 1.7 }}>
                  We hebben je bericht ontvangen en nemen zo snel mogelijk contact op.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    ...fontBody,
                    marginTop: "1.5rem",
                    background: "none", border: `1.5px solid ${C.terracotta}`,
                    color: C.terracotta, borderRadius: 8,
                    padding: "0.6rem 1.25rem",
                    fontSize: "0.875rem", fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <h3 style={{
                  ...fontDisplay,
                  fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                  whiteSpace: "nowrap",
                  color: C.espresso, margin: "0 0 0.25rem",
                }}>
                  Reserveer of neem contact op
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label style={{ ...fontBody, fontSize: "0.75rem", fontWeight: 600, color: "rgba(30,19,12,0.55)", display: "block", marginBottom: "0.35rem" }}>
                      Naam
                    </label>
                    <input
                      name="naam" required
                      value={form.naam} onChange={handleChange}
                      placeholder="Jouw naam"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ ...fontBody, fontSize: "0.75rem", fontWeight: 600, color: "rgba(30,19,12,0.55)", display: "block", marginBottom: "0.35rem" }}>
                      Email
                    </label>
                    <input
                      name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="jouw@email.nl"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div>
                    <label style={{ ...fontBody, fontSize: "0.75rem", fontWeight: 600, color: "rgba(30,19,12,0.55)", display: "block", marginBottom: "0.35rem" }}>
                      Datum
                    </label>
                    <input
                      name="datum" type="date"
                      value={form.datum} onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ ...fontBody, fontSize: "0.75rem", fontWeight: 600, color: "rgba(30,19,12,0.55)", display: "block", marginBottom: "0.35rem" }}>
                      Aantal gasten
                    </label>
                    <select
                      name="gasten"
                      value={form.gasten} onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Selecteer</option>
                      {["1–2", "3–4", "5–6", "7–10", "10+"].map(n => (
                        <option key={n} value={n}>{n} personen</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ ...fontBody, fontSize: "0.75rem", fontWeight: 600, color: "rgba(30,19,12,0.55)", display: "block", marginBottom: "0.35rem" }}>
                    Bericht (optioneel)
                  </label>
                  <textarea
                    name="bericht"
                    value={form.bericht} onChange={handleChange}
                    placeholder="Eventuele wensen, vragen of bijzonderheden..."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    ...fontBody,
                    backgroundColor: C.terracotta, color: C.cream,
                    border: "none", borderRadius: 8,
                    padding: "0.85rem 1.5rem",
                    fontSize: "0.9rem", fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.2s, box-shadow 0.2s",
                    marginTop: "0.25rem",
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = C.mocha
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(181,82,42,0.3)"
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = C.terracotta
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "none"
                  }}
                >
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}
