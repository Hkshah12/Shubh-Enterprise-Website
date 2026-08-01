# Shubh Enterprise — Brand Kit & Thesis
*Version 1.0 — "Fresh Precision" system. Source of truth for all site & brand work.*

---

## 1. Brand Thesis

**The name is the strategy.** *Shubh* (शुभ) is Sanskrit for **auspicious, prosperous, good-beginning**. We do not sell test tubes and reagents — we supply the *conditions for good outcomes*: a successful IVF cycle, an accurate diagnosis, a safe transfusion, a validated batch. Behind every breakthrough in a lab is a supply chain that never failed. **We are that dependable current beneath India's life sciences.**

**Positioning statement**
> For CROs, IVF centres, blood banks and diagnostic labs who cannot afford a supply that lets them down, **Shubh Enterprise** is the life-sciences supply partner that treats reliability as a scientific value — because we understand that the right product, on time and to spec, is the quiet precondition of every good result.

**Why NOT dark / navy / neon:** Dark corporate navy signals "legacy incumbent." Neon signals "consumer gadget." We are a **growing, trustworthy** brand — so the visual language is **fresh, light, clinical and alive**: the colour of clean glassware, of growth, of an auspicious start.

### Brand Pillars
1. **Precision** — spec-accurate, cold-chain-aware, zero-compromise sourcing.
2. **Reliability** — inventory depth + logistics so science never pauses.
3. **Growth** — we grow our range as our clients' labs grow. Partnership, not transaction.
4. **Auspicious outcomes** — the *shubh* promise: we exist so good things happen downstream.

### Personality & Voice
Confident, clear, warm-professional. **Expert but not cold; trustworthy but not stiff.** Say "on time and to specification," not "synergistic solutions." Lead with the client's outcome, not our catalogue.

---

## 2. Reference Study — extraordinary brands to borrow from

| Brand | Domain | What we steal |
|-------|--------|---------------|
| **Benchling** | Lab software | Fresh teal-on-white, airy whitespace, scientific credibility without darkness |
| **Ginkgo Bioworks** | Biotech | Science-as-brand — organic motifs, confident restraint |
| **Stripe** | Fintech | Trust through motion & gradient meshes; effortless polish |
| **Linear** | Dev tools | Precision, subtle scroll motion, one disciplined accent |
| **Function Health / Oura** | Health | Modern, fresh, calm palettes that feel premium yet human |
| **Mailchimp** | Marketing | Brand personality + a signature accent that owns a colour |

**Takeaway:** the best non-dark B2B brands win with *light + one ownable accent + disciplined motion*, not decoration.

---

## 3. Colour System — "Fresh Precision"

A tri-tone system: **Teal** (precision/trust) · **Growth Green** (life/CTA) · **Auspicious Gold** (the *shubh* signal, ~5% use only).

### Primary — Meridian Teal *(trust, science, fresh)*
| Token | Hex | Use |
|-------|-----|-----|
| `--teal-900` | `#0A3D3B` | Dark sections, deep text |
| `--teal-700` | `#0F766E` | **Brand primary**, headings accent |
| `--teal-600` | `#0D9488` | Icons, secondary buttons |
| `--teal-500` | `#14B8A6` | Links, hover, interactive |
| `--teal-100` | `#CCFBF1` | Tag/icon backgrounds |
| `--teal-50`  | `#F0FDFA` | Section washes |

### Growth — Verdant *(growth, life, primary CTA)*
| Token | Hex | Use |
|-------|-----|-----|
| `--green-600` | `#16A34A` | **Primary CTA buttons**, growth stats |
| `--green-500` | `#22C55E` | CTA hover, success |
| `--green-100` | `#DCFCE7` | Success tints, badges |
| `--green-50`  | `#F0FDF4` | Alt section bg |

### Auspicious — Marigold *(the shubh accent — use sparingly, ≤5%)*
| Token | Hex | Use |
|-------|-----|-----|
| `--gold-500` | `#F59E0B` | Highlight stats, premium/"auspicious" moments, underlines |
| `--gold-100` | `#FEF3C7` | Subtle highlight backgrounds |

### Neutrals & Surfaces
| Token | Hex | Use |
|-------|-----|-----|
| `--ink` | `#0B1F1E` | Headings, primary text |
| `--slate-700` | `#334155` | Body copy |
| `--slate-500` | `#64748B` | Secondary text, captions |
| `--slate-300` | `#CBD5E1` | Borders, dividers |
| `--surface` | `#FFFFFF` | Cards |
| `--canvas` | `#F5FBFA` | **Page background** (mint-white, fresh) |
| `--mist` | `#ECF5F3` | Alternate sections |

### Semantic
Success `#16A34A` · Warning `#F59E0B` · Error `#DC2626` · Info `#0891B2`

**CTA logic:** Primary CTA = **Growth Green** (signals "go"/growth, fresher than blue). Brand/secondary = Teal. Gold = highlights only. All text pairings ≥ 4.5:1 WCAG AA.

---

## 4. Typography

| Role | Font | Weights | Notes |
|------|------|---------|-------|
| **Display / Headings** | **Figtree** | 600, 700 | Geometric-humanist, fresh, warm-trustworthy |
| **Body** | **Inter** | 400, 500 | Workhorse legibility for product-dense pages |
| **Data / Codes** | **IBM Plex Mono** | 500 | Product codes, specs, stat labels — scientific credibility |

```css
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@500;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
```

**Scale:** H1 48px/800 · H2 32px/700 · H3 20px/600 · Body 16px/400 (line-height 1.6) · Small 13px · Mono-tag 12px (letter-spacing .08em, uppercase).

---

## 5. UI Elements

- **Border radius:** buttons 10px · inputs 10px · cards 14px · large containers 20px · pills 999px.
- **Shadows (teal-tinted, soft, multi-layer):**
  - sm: `0 1px 2px rgba(13,148,136,.06)`
  - md: `0 4px 12px rgba(13,148,136,.08)`
  - lg: `0 12px 32px rgba(13,148,136,.10)`
- **Buttons:** Primary = green filled; Secondary = teal outline; Tertiary = text+arrow. Height 44px, Inter 600, 150–250ms transitions, `cursor-pointer`, visible focus ring (3px teal @ 12%).
- **Cards:** white, 14px radius, 0.5px `--slate-300` border, md shadow, optional 3px teal top-accent for product categories.
- **Icons:** **Phosphor** (regular/duotone weight) — outline, rounded, never emoji.
- **Spacing:** 8pt base (8/16/24/32/48/64/96).

---

## 6. Brand Elements & Motifs

- **Signature motif — the 96-well plate grid:** a dot-matrix pattern echoing a microplate. Use as hero backdrop texture, section dividers, and loading states. It is instantly "lab" and ownable.
- **Growth contour lines:** subtle topographic/rising lines behind stats and CTAs (growth, ascent).
- **Soft gradient mesh:** teal → mint → white (never neon) for hero and CTA backgrounds.
- **Logo concept:** rounded flask/droplet whose form rises into a leaf — *"the drop that grows."* Teal body, green leaf, optional gold spark. Monogram fallback: **SE** in Figtree 800, teal, with a green ascending underline.
- **Imagery:** bright, high-key clinical photography — clean glassware macro, light-filled labs. Teal/green colour grade. **No dark, moody stock.**

---

## 7. Motion System *(GSAP — "motion graphics")*

Purposeful, 150–450ms, `prefers-reduced-motion` always respected.

- **Hero:** subtle parallax on the dot-grid backdrop (`yPercent 8–12`, scrub) + soft gradient-mesh drift.
- **Scroll reveal:** `opacity 0→1, y 12→0, 350ms, power1.out`, trigger `top 90%`.
- **Category / product grids — stagger:** `scale .92→1, y 16→0, stagger .06, back.out(1.4)`.
- **Stat counters:** count-up on scroll-into-view (500+, 5+, 100%).
- **Hover:** card lift `translateY(-4px)` + shadow bump; badge/tag gentle scale.
- **Dot-grid:** slow ambient drift (decorative layer only, `will-change: transform`).

**Do:** motion conveys meaning (reveal, ascent, count). **Don't:** animate width/height; no decorative-only spins; no motion on body copy.

---

## 8. Pre-Delivery Checklist
- [ ] SVG icons only (Phosphor) — no emoji
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover transitions 150–300ms
- [ ] Text contrast ≥ 4.5:1 (light mode)
- [ ] Visible keyboard focus states
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive @ 375 / 768 / 1024 / 1440px
- [ ] Reserve image space (CLS < 0.1), WebP/AVIF, lazy-load
