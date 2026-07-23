# rahulspace.com — Original Revamp Plan

> Personal internet real estate for **Rahul Gupta**.  
> Domain identity: **rahulspace** — calm, premium, quietly cosmic.  
> Work is the center of gravity. Life orbits around it.

---

## 0. What This Plan Is *Not* Copying

Explicit anti-clone list. Do not reproduce any of the following from the previous `@imabhishek/` inspiration, the current half-revamped site, generic portfolio templates, or reference sites (arpitbhayani.me / ni5arga.com) beyond *spirit* (calm typography, readability, breathing room).

### Layout & architecture — DO NOT COPY
- Narrow `max-w-4xl` single-column “everything stacked the same way” editorial template
- Avatar-left / bio-right split hero as the page’s defining composition
- Sticky frosted header with live clock + mono logo pattern
- Icon-badge-in-gradient-box + gradient title + animated full-width underline section headers
- Typical portfolio section order: About → Experience → Skills → Education → Projects → Misc → Contact
- Horizontal project cards (image ⅓ + text ⅔ rows)
- Skills as a dense icon grid with hover-scale tiles
- Experience as a plain stacked company/role list with blue accent role text
- Closing centered “mailto CTA” block as the finale pattern
- Card-heavy surfaces with blue/cyan border glow (`border-blue-500/30`, translucent panels)
- Dashboard-like multi-widget first viewport

### Visual / motion tropes — DO NOT COPY
- Blue/cyan-as-primary identity system (generic “dev portfolio blue”)
- Inter + JetBrains Mono as the default “AI portfolio” pairing (use a distinct soft sans + optional quiet display)
- Flashy neon nebula, particle storms, or SpaceX marketing pastiche
- Theme toggle that only crossfades icons / fades the page
- Generic FadeInUp on every section as the only motion language

### Content structure — DO NOT COPY
- Treating “Nihongo” or hobbies as orphaned portfolio sections with the same header pattern as Work
- Leading with education / cert stacks before work
- Template “About me” wall of text as the first scroll destination

### What we *keep* (spirit only)
- Calm, readable, professional atmosphere (arpitbhayani / ni5arga energy — not their layouts)
- High-quality micro-motion via Framer Motion
- A well-sized, human profile/avatar presence
- All of Rahul’s real content + EmailJS contact logic
- Full dark + light themes with `localStorage` persistence

---

## 1. Concept — “My Space”

**Metaphor:** The site is a quiet personal loft in orbit — not a résumé PDF converted to HTML, and not a sci-fi landing page.

- **Gravity well = Work** — projects and craft occupy the primary scroll path.
- **Orbit = Life** — blogs, anime, hobbies, notes, 日本語 sit in a secondary constellation that feels personal, not “section 6 of a portfolio.”
- **Atmosphere = Space** — distant stars, slow nebula drift, soft parallax. Always subtle. Never the main attraction.

**Brand signal:** The wordmark **rahulspace** must be hero-level in the first viewport (not only nav text). Name and domain feel like one identity.

---

## 2. Information Architecture (Original)

### 2.1 Navigation concept — “Dual Horizon”

Not a long list of section anchors (About, Experience, Skills…).

**Header (Dock)**
- Left: `rahulspace` wordmark (primary brand)
- Center / right: two destinations only — **Work** · **Life**
- Far right: theme control (delightful transition) + optional “say hi” text link
- No live clock. No icon-badge nav. No 6–8 anchor soup.

Deep links still exist as ids for Work / Life subsections, but the *concept* of nav is two horizons, not a sitemap dump.

### 2.2 Page composition (new section order)

| Order | Zone | Purpose |
|------:|------|---------|
| 1 | **Arrival** | Brand-first entrance: rahulspace + one line + avatar + soft CTA into Work |
| 2 | **Signal** | Tiny “currently” strip — what Rahul is building / exploring *now* (1 line, not stats) |
| 3 | **Builds** | Primary: projects as a vertical mission journal (Work gravity) |
| 4 | **Craft** | How the work gets made — experience + tools woven as one narrative, not two templates |
| 5 | **Life Orbit** | Personal constellation: Notes & learnings · Watching · Moving · 日本語 |
| 6 | **Open Channel** | Contact — quiet, human, form secondary to intent |
| 7 | **Colophon** | Slim footer — location, year, socials |

Education is **not** a top-level landmark. Fold a single quiet line into Craft or Life if needed — never a GlowCard-style education chapter.

### 2.3 Why this is original vs typical portfolios

- Work leads; personal life is a designed second act, not leftover sections.
- Experience and skills are one **Craft** story, not twin clones of the same list UI.
- Life uses a **constellation / mosaic** layout, not repeated section headers.
- Nav is binary (Work / Life), not an anchor laundry list.
- Space identity is atmospheric background + theme ritual — not a theme park.

---

## 3. Visual Language

### 3.1 Atmosphere (calm premium)
- Spacious margins, generous vertical rhythm, low visual noise.
- Soft modern sans for UI/body (e.g. **Plus Jakarta Sans** or **Geist** — not Inter default bias).
- Optional quiet secondary for wordmark / arrival only (restrained, not newspaper serif).
- Backgrounds: soft layered gradients + very low-contrast star field — never flat void, never cluttered.

### 3.2 Color system (space-neutral, not “dev blue”)
Avoid purple-on-white, cream+terracotta, and cyan-glow clichés.

**Direction: Lunar graphite + soft lunar silver + one restrained accent**

| Token | Light | Dark |
|-------|-------|------|
| Background | warm off-white / soft chalk (`#f7f6f3` family) | deep space ink (`#0b0c10` family) |
| Foreground | near-ink | soft white |
| Muted | stone gray | cool gray |
| Accent | muted teal-slate or soft amber-moon (pick one, use sparingly) | same hue, lifted for dark |
| Stars / particles | low-opacity ink dots | low-opacity white dots |

Accent is for links, focus rings, and rare highlights — not for bordering every card.

### 3.3 Cards policy
- Default: **no cards**.
- Cards only when interaction needs a container (e.g. contact form fields, Life Orbit selectable notes).
- Builds (projects): typographic journal entries with optional full-bleed / edge-aware media — not inset media cards in the hero, and not template project cards.

### 3.4 First viewport budget (Arrival)
Exactly:
1. **rahulspace** brand signal (hero-level)
2. One short supporting sentence
3. One CTA group (e.g. View builds · Say hi)
4. Profile/avatar as a calm visual anchor (keep a generous, nice size — spirit of the prior good avatar scale)

No stats, no skill pills, no schedule strips, no floating badges on the avatar.

---

## 4. Space Motions (Framer Motion — subtle)

All space motion must feel *restrained* — SpaceX quiet competence, not fireworks.

| Layer | Behavior |
|-------|----------|
| **Starfield** | Fixed/absolute canvas of soft dots; opacity breathes slowly; parallax on pointer/scroll at tiny amplitude |
| **Nebula wash** | Two large blurred gradient blobs drifting on a 20–40s loop; theme-aware colors |
| **Arrival avatar** | Soft float / micro-orbit (1–2px) — barely perceptible |
| **Scroll reveals** | Sparse: opacity + slight y; staggered only where it clarifies hierarchy |
| **Build entries** | Number / index ticks in; media gently reveals |
| **Life Orbit** | Nodes fade/scale in as a constellation — one coordinated sequence, not per-card bounce |
| **Micro-interactions** | Link underline grow, button press scale, theme control anticipation |

Respect `prefers-reduced-motion`: disable drift/parallax; keep instant theme swap without spectacle.

---

## 5. Theme System + Delightful Transition

### 5.1 Persistence
- `localStorage` key: `rahulspace-theme` → `'light' | 'dark'`
- Fallback: `prefers-color-scheme`
- Blocking inline script in `<head>` to set `html.dark` before paint (no FOUC)

### 5.2 Transition concept — “Horizon Wipe”
On toggle (playful, memorable, still premium):

1. Capture click origin (theme control).
2. Expand a **circular wipe** from that point across the viewport (clip-path or mask), carrying the *destination* theme.
3. Mid-wipe: brief soft **star twinkle burst** (8–16 particles, short life, low opacity) — cute, not chaotic.
4. Settle into new theme; icon morphs moon ↔ sun with a small orbital arc.

Not: hard cut, opacity-only fade, or full-screen flash.

### 5.3 Implementation sketch
- `ThemeProvider` owns theme state + `isTransitioning`
- `ThemeTransitionOverlay` (portal/fixed) runs the wipe; on complete, commit class + persist
- Duration ~600–900ms; interruptible if user toggles again quickly

---

## 6. Component Architecture (New)

```
app/
├── layout.js                 # fonts, ThemeProvider, Dock, atmosphere shell
├── page.js                   # Arrival → Signal → Builds → Craft → LifeOrbit → OpenChannel
├── globals.css               # lunar tokens, reduced-motion, atmosphere helpers
└── components/
    ├── atmosphere/
    │   ├── Starfield.jsx         # soft particles / distant stars
    │   └── NebulaWash.jsx        # slow gradient drift
    ├── theme/
    │   ├── ThemeProvider.jsx
    │   ├── ThemeToggle.jsx
    │   └── ThemeHorizonWipe.jsx  # circular wipe + twinkle
    ├── Dock.jsx                  # rahulspace wordmark + Work/Life + theme
    ├── Arrival.jsx               # brand-first entrance + avatar
    ├── SignalStrip.jsx           # “currently …” one-liner
    ├── Builds.jsx                # primary projects journal
    ├── BuildEntry.jsx            # single project entry
    ├── Craft.jsx                 # experience + tools as one narrative
    ├── LifeOrbit.jsx             # personal constellation wrapper
    ├── orbit/
    │   ├── Notes.jsx             # blogs & learnings
    │   ├── Watching.jsx          # anime currently watching
    │   ├── Moving.jsx            # gym, hiking, snooker, etc.
    │   └── Nihongo.jsx           # 日本語 (reframed inside Life)
    ├── OpenChannel.jsx           # contact intro + form
    ├── ContactForm.jsx           # EmailJS (logic preserved)
    ├── Colophon.jsx              # footer
    ├── ScrollToTop.jsx
    └── motion/
        └── Reveal.jsx            # sparse reveal primitives (not blanket FadeInUp)
lib/utils.js
utils/data/                       # existing + new life-orbit data files
```

### New data files (placeholders OK; real facts only)
| File | Content |
|------|---------|
| `utils/data/signal.js` | Current focus line |
| `utils/data/notes.js` | Blog/learning entries (title, date, link/excerpt) |
| `utils/data/watching.js` | Anime list (title, status, note) |
| `utils/data/moving.js` | Hobbies (gym, hiking, snooker, …) |
| Existing | `personal-data`, `projects-data`, `experience`, `skills`, `contactsData`, educations (demoted) |

---

## 7. Section Design Notes (Unique UI)

### Arrival
- Full-bleed atmospheric background already from shell.
- Wordmark large; name optional subtitle or integrated (“Rahul · rahulspace”).
- Avatar generous, soft ring, no badge overlays.
- CTAs: text-forward, not pill-cluster.

### Signal
- Single quiet line under Arrival: e.g. “Currently exploring GenAI & agentic workflows.”
- Feels like a status, not a feature grid.

### Builds (primary)
- Vertical **mission journal**: `01 / ShoeEsy`, title, short thesis, then bullets, then links.
- Media can sit full-width *below* the thesis or as a soft bleed — avoid template side-by-side cards.
- Clear visual weight: this is the longest, most important zone.

### Craft
- Left narrative: roles over time as a continuous story (timeline spine or year markers — not GlowCards).
- Tools appear as a quiet inline constellation or compact wrap list under the story — not a separate “Tech Arsenal” marquee/grid chapter.
- Education: one understated line if included at all.

### Life Orbit
- One composition titled for life, not four cloned sections.
- Layout idea: **constellation grid** — Notes / Watching / Moving / 日本語 as four nodes with different internal rhythms (list, chips, short notes) sharing one visual system.
- Personal, warm, still typographically calm.

### Open Channel
- Short human invite + mailto + form.
- Form is interaction-container (allowed to feel like a panel); surrounding page stays un-carded.

---

## 8. Implementation Order

1. Rewrite this plan ✓  
2. Tokens + fonts + atmosphere shell (`globals.css`, Starfield, NebulaWash)  
3. ThemeProvider + Horizon Wipe + Dock  
4. Arrival + Signal  
5. Builds (projects — primary polish)  
6. Craft (experience + skills merge)  
7. Life Orbit + data stubs  
8. Open Channel + Colophon + ScrollToTop  
9. Remove obsolete imabhishek-shaped components / dead patterns  
10. `prefers-reduced-motion`, responsive pass, `npm run build`

---

## 9. Acceptance Criteria

- [ ] Feels like **rahulspace.com** — personal space, not a cloned portfolio template  
- [ ] Work/Builds is clearly the primary focus; Life is a designed second act  
- [ ] Original IA: Arrival → Signal → Builds → Craft → Life Orbit → Open Channel  
- [ ] Dual Horizon nav (Work / Life), not 6+ section anchors  
- [ ] Dark + light polished; preference persisted; no FOUC  
- [ ] Theme toggle uses memorable Horizon Wipe + soft twinkle (with reduced-motion fallback)  
- [ ] Subtle space atmosphere via Framer Motion (stars, nebula, micro-float) — never distracting  
- [ ] No copied layout/structure from imabhishek plan or reference sites  
- [ ] Avatar remains a strong, well-sized presence in Arrival  
- [ ] Contact EmailJS logic preserved  
- [ ] Responsive; builds cleanly  

---

## 10. Content Mapping

| Zone | Source |
|------|--------|
| Arrival | `personalData` (name, designation, description, profile, socials) |
| Signal | `signal.js` (new; seed from current GenAI/agentic interest) |
| Builds | `projectsData` |
| Craft | `experiences` + `skillsData` (+ optional quiet education line) |
| Life Orbit → Notes | `notes.js` (new) |
| Life Orbit → Watching | `watching.js` (new) |
| Life Orbit → Moving | `moving.js` (new; gym, hiking, snooker from bio spirit) |
| Life Orbit → 日本語 | existing Nihongo certs / JLPT links |
| Open Channel | ContactForm + `contactsData` / email |
| Colophon | location, year, LinkedIn |

---

*Next step: implement this plan end-to-end, replacing the previous imabhishek-shaped composition.*
