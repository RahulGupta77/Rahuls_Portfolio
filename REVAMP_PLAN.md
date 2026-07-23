# Portfolio Revamp Plan — Rahul Gupta

> Design inspiration only from `@imabhishek/`. All content remains Rahul’s original data.

---

## 1. Analysis Summary

### 1.1 Current `@Rahuls_Portfolio/` (Before)

| Area | Current State |
|------|---------------|
| **Stack** | Next.js 14, React, Tailwind 3, Sass, Lottie, react-fast-marquee, EmailJS |
| **Layout** | Wide container (`lg:max-w-[70rem]`–`2xl:max-w-[92rem]`), dark-only (`#0d1224`) |
| **Nav** | Transparent navbar with section anchors (About, Experience, Skills, Projects, Education, 日本語) |
| **Hero** | Split: greeting text + pink/teal accents + “code editor” mockup card |
| **Sections** | About, Experience (GlowCard + Lottie), Skills (marquee), Education (GlowCard + Lottie), Projects (sticky cards), Nihongo, Contact (EmailJS form) |
| **Theme** | Dark only — no light mode, no toggle |
| **Motion** | Minimal (CSS hover / Lottie); no Framer Motion |
| **Content to keep** | `personal-data`, `experience`, `educations`, `skills`, `projects-data`, `contactsData`, Nihongo certs, contact form logic |

### 1.2 Design System of `@imabhishek/` (Inspiration)

| Element | Pattern to Adopt |
|---------|------------------|
| **Layout** | Narrow centered column (`max-w-4xl mx-auto p-6 lg:p-8`) — editorial single-column feel |
| **Header** | Sticky, translucent (`bg-black/50 backdrop-blur`), logo + live clock, mono accents |
| **Hero** | Avatar left / name + title + description + CTA right; location + social icons under avatar |
| **Section headers** | Icon badge (gradient border box) + large gradient title + animated full-width underline |
| **Typography** | Inter (sans) + JetBrains Mono; bold tracking-tight titles; muted gray body |
| **Color** | Near-black/white neutrals; blue/cyan accents (`blue-400`, `border-blue-500/30`); soft gradient text on headings |
| **Cards** | Subtle `rounded-xl` + `border-blue-500/30` + translucent bg; hover lift/scale |
| **Skills** | Responsive icon grid (2/4/5 cols), not marquee |
| **Projects** | Horizontal media + content rows (image 1/3, details 2/3) with live/code links |
| **Experience** | Clean stacked entries: company bold, role in accent blue, period muted, optional bullets |
| **CTA** | Centered closing block with mailto button |
| **Motion** | Framer Motion: `FadeInUp` wrappers, `whileInView`, staggered children, `whileHover` / `whileTap` |
| **Footer** | Minimal (imabhishek relies on CTA; we’ll keep a slim Rahul footer) |

### 1.3 Key Design Elements We Will Adopt

1. Narrow `max-w-4xl` single-column composition  
2. Avatar-led hero (profile image + location + socials | name + title + bio + CTA)  
3. Icon-badge + gradient section titles + expanding underline  
4. Blue/cyan accent system (replacing pink/violet)  
5. Skills as hoverable icon grid  
6. Project cards as horizontal image + text layouts  
7. Experience as clean typographic list (no GlowCard/Lottie)  
8. Sticky frosted header with clock + theme toggle  
9. Framer Motion section reveals and micro-interactions  
10. CSS variable–based light/dark theming (imabhishek tokens exist but dark is forced — we enable both)

---

## 2. Detailed Implementation Plan

### 2.1 New Folder Structure

```
Rahuls_Portfolio/
├── app/
│   ├── layout.js                 # MODIFY — ThemeProvider, fonts, globals.css
│   ├── page.js                   # MODIFY — new section composition + FadeInUp
│   ├── globals.css               # CREATE — replace Sass; theme tokens
│   └── components/
│       ├── Header.jsx            # CREATE — sticky nav + clock + theme toggle
│       ├── Footer.jsx            # REWRITE — slim themed footer
│       ├── ThemeProvider.jsx     # CREATE — dark/light + localStorage
│       ├── ThemeToggle.jsx       # CREATE — sun/moon toggle
│       ├── SectionHeading.jsx    # CREATE — reusable icon + gradient title
│       ├── MotionWrapper.jsx     # CREATE — FadeInUp, FadeIn, SlideIn*
│       ├── HeroSection.jsx       # CREATE — avatar hero
│       ├── WorkExperience.jsx    # CREATE — experience list
│       ├── TechnicalSkills.jsx   # CREATE — skills grid
│       ├── Education.jsx         # CREATE — education list
│       ├── Projects.jsx          # CREATE — horizontal project cards
│       ├── Nihongo.jsx           # CREATE — Japanese study / certs
│       ├── Contact.jsx           # CREATE — contact + form (restyle)
│       ├── ContactForm.jsx       # CREATE — themed EmailJS form
│       ├── ScrollToTop.jsx       # REWRITE — themed button
│       └── (delete old homepage/, navbar.jsx, helper/, css/)
├── lib/
│   └── utils.js                  # CREATE — cn() helper
├── utils/data/                   # KEEP — all Rahul content unchanged
├── public/                       # KEEP — profile, project images, skill SVGs
├── package.json                  # MODIFY — add framer-motion, clsx, tailwind-merge
├── tailwind.config.js            # MODIFY — darkMode: 'class', theme tokens
└── REVAMP_PLAN.md                # THIS FILE
```

### 2.2 Files to Create / Modify / Delete

#### Create
| File | Purpose |
|------|---------|
| `app/globals.css` | CSS variables for light/dark; base styles |
| `app/components/ThemeProvider.jsx` | Theme context + localStorage + FOUC prevention script |
| `app/components/ThemeToggle.jsx` | Animated sun/moon button |
| `app/components/Header.jsx` | Sticky header: brand, nav anchors, clock, toggle |
| `app/components/SectionHeading.jsx` | Shared section header pattern |
| `app/components/MotionWrapper.jsx` | FadeInUp / FadeIn / SlideInLeft / SlideInRight |
| `app/components/HeroSection.jsx` | New hero |
| `app/components/WorkExperience.jsx` | Experience section |
| `app/components/TechnicalSkills.jsx` | Skills grid |
| `app/components/Education.jsx` | Education section |
| `app/components/Projects.jsx` | Projects section |
| `app/components/Nihongo.jsx` | 日本語 / JLPT section |
| `app/components/Contact.jsx` | Contact section wrapper |
| `app/components/ContactForm.jsx` | Restyled form (same EmailJS logic) |
| `app/components/Footer.jsx` | Slim footer |
| `app/components/ScrollToTop.jsx` | Scroll-to-top FAB |
| `lib/utils.js` | `cn()` with clsx + tailwind-merge |

#### Modify
| File | Changes |
|------|---------|
| `app/layout.js` | New fonts, ThemeProvider, Header, globals.css; remove old Sass/navbar |
| `app/page.js` | Compose new sections with FadeInUp |
| `package.json` | Add `framer-motion`, `clsx`, `tailwind-merge` |
| `tailwind.config.js` | `darkMode: 'class'`, semantic color tokens |
| `utils/data/*` | Keep content; optionally enrich experience with shortDesc if needed (no invented facts — use existing titles/companies only) |

#### Delete (after replacements work)
| Path | Reason |
|------|--------|
| `app/css/globals.scss` | Replaced by `globals.css` |
| `app/css/card.scss` | Glow-card styles unused |
| `app/components/navbar.jsx` | Replaced by Header |
| `app/components/footer.jsx` | Replaced |
| `app/components/homepage/**` | Fully rebuilt |
| `app/components/helper/**` | Lottie/GlowCard no longer used |

### 2.3 Dark / Light Mode Strategy

1. **Tailwind** `darkMode: 'class'` — toggle `.dark` on `<html>`.  
2. **CSS variables** in `:root` (light) and `.dark` (dark) for:
   - `--background`, `--foreground`, `--card`, `--muted`, `--muted-foreground`
   - `--accent`, `--accent-foreground`, `--border`, `--primary`, `--ring`
3. **ThemeProvider** (client):
   - Read `localStorage.theme` (`'light' | 'dark'`) on mount
   - Fallback: `prefers-color-scheme`
   - Persist on toggle
4. **Inline blocking script** in `layout.js` `<head>` to set class before paint (prevent FOUC).  
5. **ThemeToggle** in Header — Framer Motion icon swap (sun ↔ moon).  
6. Components use semantic classes (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, accent utilities) so both themes stay cohesive.

### 2.4 Framer Motion Animation Map

| Component | Animation | Trigger |
|-----------|-----------|---------|
| `Header` | Fade + slide down (`y: -20 → 0`) | Mount |
| `ThemeToggle` | Rotate / crossfade icons | Click |
| Page sections via `FadeInUp` | `opacity 0→1`, `y: 20→0`, staggered delays | Mount (initial load) |
| `SectionHeading` | Icon: scale+rotate in; underline: width 0→100% | `whileInView` (once) |
| `HeroSection` | Avatar scale-in; text cascade; social icons stagger; CTA hover scale | Mount + hover |
| `WorkExperience` | Entry fade-up staggered by index | `whileInView` |
| `TechnicalSkills` | Grid items stagger fade-up; hover `scale 1.05` | `whileInView` + hover |
| `Education` | Same pattern as experience | `whileInView` |
| `Projects` | Card fade-up; link `whileHover` / `whileTap` | `whileInView` + hover |
| `Nihongo` | Cert link cards scale-in + hover lift | `whileInView` + hover |
| `Contact` / form | Fade-in; button hover/tap | `whileInView` + hover |
| `ScrollToTop` | Fade when visible; tap scale | Scroll position |
| `Footer` | Subtle fade-in | `whileInView` |

---

## 3. Implementation Order

1. Install deps (`framer-motion`, `clsx`, `tailwind-merge`)  
2. Update `tailwind.config.js` + create `app/globals.css` + `lib/utils.js`  
3. Build `ThemeProvider` + `ThemeToggle` + wire into `layout.js`  
4. Build `MotionWrapper`, `SectionHeading`, `Header`, `Footer`, `ScrollToTop`  
5. Build content sections: Hero → Experience → Skills → Education → Projects → Nihongo → Contact  
6. Rewrite `page.js` composition  
7. Remove obsolete files / Sass  
8. Verify dark/light persistence, responsiveness, animations  

---

## 4. Final Checklist (Acceptance Criteria)

- [x] Dark and light mode both look polished and switch cleanly  
- [x] Theme preference persists via `localStorage`  
- [x] No FOUC on reload (inline theme script in layout)  
- [x] All Framer Motion animations feel smooth (no janky layout shifts)  
- [x] Visual language matches imabhishek quality (narrow layout, section headers, accents, cards)  
- [x] 100% Rahul content preserved (no Abhishek text/data)  
- [x] Contact EmailJS form still works (logic preserved, restyled)  
- [x] Fully responsive (mobile → desktop)  
- [x] Old pink/violet/GlowCard/Lottie/marquee styles removed  
- [x] Site builds without errors (`npm run build` ✓)  

---

## 5. Content Mapping (Rahul → New Sections)

| New Section | Source Data |
|-------------|-------------|
| Hero | `personalData` (name, designation, description, profile, address, socials) |
| Work Experience | `experiences` |
| Tech Arsenal / Skills | `skillsData` + `skill-image` SVGs |
| Education | `educations` |
| Featured Projects | `projectsData` |
| 日本語 | Existing Nihongo certs / JLPT links |
| Contact | ContactForm + `personalData` / `contactsData` |
| Footer | “Made with ❤️ in India” + LinkedIn |

*Proceeding to implementation after this plan is saved.*
