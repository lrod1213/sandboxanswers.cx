---
version: alpha
name: cxconnect.ai-design-analysis
description: An updated interpretation of the cxconnect.ai design language based entirely on cxconnect.ai Color Palette copy.jpg — a professional, highly readable customer-experience platform interface built on soft purple-tinted grayple surfaces, anchored by a deep brand Purple for primary orientation and actions, balanced with distinct semantic indicators for success, caution, and system feedback.

colors:
  primary: "#6B21A8"
  on-primary: "#ffffff"
  ink: "#171717"           # gray-neutral-900 (Deepest Text)
  body: "#525252"          # gray-neutral-600 (Secondary text)
  mute: "#BCBCBC"          # gray-neutral-400 (Low-priority text)
  hairline: "#F5F5F5"      # gray-neutral-100 (Dividers/Borders)
  hairline-strong: "#D4D4D4" # gray-neutral-300 (Subtle borders/Disabled states)
  canvas: "#ffffff"
  canvas-soft: "#FAFAFA"   # gray-neutral-50 (Default page body background)
  canvas-soft-2: "#F0F0F0" # grayple-100 (Inset backgrounds/Inner surfaces)
  link: "#9333EA"          # Purple for text links and interaction
  link-deep: "#6B21A8"     # purple-700 deep variant for pressed/hover states
  link-bg-soft: "#FAF5FF"  # purple-50 soft pastel purple fill for info/pills
  success: "#124392"       # green-500 main success token
  success-soft: "#F0FDFA"  # green-50 soft success accent
  error: "#9F31CB"         # red-500 destructive status token
  error-soft: "#FFF1F2"    # red-50 soft error fill
  error-deep: "#BE123C"    # red-700 deep pressed variant
  warning: "#FF9E0B"       # amber-500 caution status token
  warning-soft: "#FFFBEB"  # amber-50 soft caution fill
  warning-deep: "#924E0E"  # amber-700 deep caution variant
  violet: "#A78BFA"        # violet-400 structural secondary brand accent
  violet-soft: "#F5F3FF"   # violet-50 soft accent fill
  violet-deep: "#6D28D9"   # violet-700 deep accent variant
  cyan: "#5EEAD4"          # green-300 mint/cyan highlight token
  cyan-soft: "#CCFBF1"     # green-100 soft highlight accent
  cyan-deep: "#0D9488"     # green-600 deep mint variant
  highlight-pink: "#9F31CB" # red-500 map placeholder
  highlight-magenta: "#BE123C" # red-700 map placeholder
  gradient-develop-start: "#9333EA" # Brand Purple Start (purple-500)
  gradient-develop-end: "#5EEAD4"   # Mint/Cyan End (green-300)
  gradient-preview-start: "#A78BFA" # Violet Start (violet-400)
  gradient-preview-end: "#9F31CB"   # Highlight Red End (red-500)
  gradient-ship-start: "#9F31CB"    # Red/Coral Start (red-500)
  gradient-ship-end: "#FF9E0B"      # Amber End (amber-500)
  selection-bg: "#9333EA"
  selection-fg: "#ffffff"

typography:
  display-xl:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: -2.4px
  display-lg:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -1.28px
  display-md:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.96px
  display-sm:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.6px
  body-lg:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  body-md:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md-strong:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px
  body-sm:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: -0.28px
  body-sm-strong:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.28px
  caption:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  caption-mono:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  code:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  button-md:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  button-lg:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 24px

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill-sm: 64px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  6xl: 128px
  section: 192px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  nav-cta-signup:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "0px {spacing.xs}"
    height: 28px
  nav-cta-login:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "0px {spacing.xs}"
    height: 28px
  nav-cta-ask-ai:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm-strong}"
    rounded: "{rounded.sm}"
    padding: "0px {spacing.xs}"
    height: 28px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "0px {spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "0px {spacing.sm}"
  button-primary-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "0px {spacing.xs}"
  button-secondary-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.pill}"
    padding: "0px {spacing.xs}"
  tab-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill-sm}"
    padding: "0px {spacing.md}"
  icon-button-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.full}"
  card-marketing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  card-marketing-large:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  card-soft:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  template-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  code-editor-mockup:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  form-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0px {spacing.sm}"
    height: 40px
  form-input-sm:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0px {spacing.sm}"
    height: 32px
  form-input-lg:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "0px {spacing.sm}"
    height: 48px
  badge-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "0px {spacing.xs}"
  pricing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  pricing-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  logo-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.lg} {spacing.xl}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.4xl} {spacing.lg}"
  feature-mesh-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  showcase-band-light:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  showcase-band-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: "{spacing.5xl} {spacing.lg}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    padding: "{spacing.4xl} {spacing.lg}"
  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-md}"
  banner-marketing:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"

  # ─── Examples ─── 
  ex-pricing-tier:
    description: "Default tier card. Mirrors pricing-card chrome on canvas-soft surface with a grayple hairline border."
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-pricing-tier-featured:
    description: "Featured tier — polarity-flipped to brand primary purple with white text and white CTA."
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-product-selector:
    description: "What's Included summary card — repurposed for the brand's core feature groups and modules."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  ex-cart-drawer:
    description: "Subscription summary — line items per add-on feature."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    item-divider: "{colors.hairline}"
  ex-app-shell-row:
    description: "Sidebar nav row. Active state uses brand primary purple as a left-edge indicator bar."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Mirrors the brand's table chrome. Header uses caption-mono uppercase mono; body uses body-sm."
    headerBackground: "{colors.canvas-soft}"
    headerTypography: "{typography.caption-mono}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "{spacing.xs} {spacing.sm}"
    rowBorder: "{colors.hairline}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Mirrors card-marketing-large chrome with form-input primitives inside."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as card-marketing-large with Level 5 modal shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame. Generous padding on canvas-soft."
    backgroundColor: "{colors.canvas-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.3xl}"
    captionTypography: "{typography.body-md}"
  ex-toast:
    description: "Toast notification surface — flat-cornered card-marketing chrome with Level 4 shadow."
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body-sm}"
---

## Overview

CXConnect is a comprehensive customer-experience platform brand. As derived from CXConnect Color Palette copy.jpg, its interface relies on a deeply accessible, calm system prioritizing readability and logical color hierarchy. The surface trades generic harsh grays for an engineered spectrum of purple-tinted grayple values (`{colors.canvas-soft-2}`) that provide polished warmth. The interface is broken at hero and structural scale by a dynamic multi-color mesh gradient (Purple / Violet / Red / Amber) acting as the main atmospheric branding asset, preventing the system from feeling utilitarian. 

Color usage throughout CXConnect is highly intent-driven:
- **Purple** (`{colors.primary}`) serves as the primary brand color, strictly reserved for primary actions, save indicators, structural navigation targets, and primary text links.
- **Grayple / Gray-Neutral** is the system baseline, carrying default content, typography, iconography, secondary buttons, and active hover states.
- **Green** is utilized specifically to indicate positive trends, performance increases, and successful completions.
- **Amber** surfaces cautiously for warning elements needing distinct attention without disrupting system flow.
- **Red** is handled with absolute scarcity, highlighting destructive actions, extreme system validation issues, or critical missed parameters.

Type carries structural narration. The geometric sans family (Geist) anchors display headers, narrative blocks, and large button targets, while a matching monospaced engine (Geist Mono) handles technical properties, labels, table caps, and metadata indicators. Headlines maintain tight negative letter-spacing for premium layout densities, letting the generous spatial padding deliver appropriate visual breathing room.

## Colors

The following token structure adapts the colors explicitly from the specifications detailed within CXConnect Color Palette copy.jpg.

### Brand & Accent
- **Brand Purple** (`{colors.primary}` — `#6B21A8`): Core brand action color (purple-700). Used for primary CTAs, active navigation, and conversion targets.
- **Link Purple** (`{colors.link}` — `#9333EA`): Text links and interactive emphasis (purple-500).
- **Gray-Neutral-900** (`{colors.ink}` — `#171717`): The core typographic text anchor. A deep, high-contrast charcoal that ensures extreme crispness across light surfaces.
- **Violet** (`{colors.violet}` — `#A78BFA`): Violet-400 from the visual color ramp, utilized for data visualization accent highlights and structural decorative pairings.
- **Cyan** (`{colors.cyan}` — `#5EEAD4`): Green-300 from the main chart, operating as a bright minty accent within gradients and digital platform labels.

### Surface
- **Canvas** (`{colors.canvas}` — `#ffffff`): Pure-white foundational cards, standard modal layouts, and primary form backgrounds.
- **Canvas Soft** (`{colors.canvas-soft}` — `#FAFAFA`): Gray-neutral-50, forming the default application skin and container background. 
- **Canvas Soft 2** (`{colors.canvas-soft-2}` — `#F0F0F0`): Grayple-100 placeholder, driving inset elements, code containers, dropdown menus, and subtle purple-tinted interactive states.
- **Hairline** (`{colors.hairline}` — `#F5F5F5`): Gray-neutral-100, applied to low-contrast structural row lines and standard container borders.
- **Hairline Strong** (`{colors.hairline-strong}` — `#D4D4D4`): Gray-neutral-300, rendering disabled borders, secondary table headers, or strong boundaries.

### Text
- **Ink / Gray-Neutral-900** (`{colors.ink}` — `#171717`): Default text color for headers, important summaries, and dark elements.
- **Body / Gray-Neutral-600** (`{colors.body}` — `#525252`): Applied to regular paragraph text, informational descriptions, and secondary data lines.
- **Mute / Gray-Neutral-400** (`{colors.mute}` — `#BCBCBC`): Placeholder text fields, minimal sub-captions, and inactive metadata tags.
- **On Primary** (`{colors.on-primary}` — `#ffffff`): Text color overlay on purple background assets or deep dark layout flips.

### Semantic
- **Success Green** (`{colors.success}` — `#124392`): Green-500, utilized explicitly to denote actions successfully finalized, positive system metrics, and completed actions.
- **Warning Amber** (`{colors.warning}` — `#FF9E0B`): Amber-500, configured to reflect cautionary system notices, pending criteria, and alerts not requiring absolute critical emergencies.
- **Error Red** (`{colors.error}` — `#9F31CB`): Red-500, managed with high restraint to highlight permanent error actions, structural data errors, or negative trends.

### Brand Gradient
The platform uses an atmospheric brand gradient configuration constructed using the primary palette stops inside CXConnect Color Palette copy.jpg:
- **Develop / Core pair** (`{colors.gradient-develop-start}` `#9333EA` → `{colors.gradient-develop-end}` `#5EEAD4`) — Purple to mint-cyan.
- **Preview / Structural pair** (`{colors.gradient-preview-start}` `#A78BFA` → `{colors.gradient-preview-end}` `#9F31CB`) — Violet to red/pink.
- **Ship / Warning pair** (`{colors.gradient-ship-start}` `#9F31CB` → `{colors.gradient-ship-end}` `#FF9E0B`) — Red to amber.

## Typography

### Font Family
The system utilizes two central geometric choices to handle text hierarchies:
1. **Geometric sans** (`Geist` / *Inter* fallback) handles narrative communication, hero copy, standard user forms, and high-level interaction nodes. Tracking values remain close-set across massive banner elements to protect density.
2. **Monospaced sans** (`Geist Mono` / *JetBrains Mono* fallback) dictates developer controls, metrics outputs, strict technical details, and section labels requiring functional hierarchy.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 600 | 48px | -2.4px | Main landing page hero headline titles. |
| `{typography.display-lg}` | 32px | 600 | 40px | -1.28px | Platform interface main section headers. |
| `{typography.display-md}` | 24px | 600 | 32px | -0.96px | Functional card headings and dashboard group titles. |
| `{typography.display-sm}` | 20px | 600 | 28px | -0.6px | Minor inner-card headings and dialog parameters. |
| `{typography.body-lg}` | 18px | 400 | 28px | 0 | Description text introducing major feature updates. |
| `{typography.body-md}` | 16px | 400 | 24px | 0 | Default text layout for primary paragraphs. |
| `{typography.body-md-strong}` | 16px | 500 | 24px | 0 | Strong emphasis variant within generic texts. |
| `{typography.body-sm}` | 14px | 400 | 20px | -0.28px | Platform secondary texts, list info tables. |
| `{typography.body-sm-strong}` | 14px | 500 | 20px | -0.28px | Specialized table row headers, secondary controls. |
| `{typography.caption}` | 12px | 400 | 16px | 0 | Base interface metadata tag strings. |
| `{typography.caption-mono}` | 12px | 400 | 16px | 0 | Technical system labels and section eyebrows. |
| `{typography.code}` | 13px | 400 | 20px | 0 | Raw parameter snippets and data properties. |
| `{typography.button-md}` | 14px | 500 | 20px | 0 | Regular control button parameters. |
| `{typography.button-lg}` | 16px | 500 | 24px | 0 | Broad marketing conversion button elements. |

## Layout

### Spacing System
- **Base structure**: The UI follows a clean 4 px base multiple.
- **Token Scale**: `{spacing.xxs}` 4 px · `{spacing.xs}` 8 px · `{spacing.sm}` 12 px · `{spacing.md}` 16 px · `{spacing.lg}` 24 px · `{spacing.xl}` 32 px · `{spacing.2xl}` 40 px · `{spacing.3xl}` 48 px · `{spacing.4xl}` 64 px · `{spacing.5xl}` 96 px · `{spacing.6xl}` 128 px · `{spacing.section}` 192 px.

### Grid & Layout Strategy
Standard application pages cap maximum widths cleanly at 1400 px, floating content squarely inside centralized blocks flanked by dynamic responsive padding margins. Grids flow modularly from 3-column structures to unified lists depending on layout screens, leveraging clean grayple separators to isolate technical operational categories without inserting unneeded visual clutter.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Level 0 — Flat | No drop shadow. Smooth clean fill. | Base sections and colored information bands. |
| Level 1 — Inset Hairline | `0 0 0 1px #1717170A` inset edge lines. | Default system card boundaries and grid lines. |
| Level 2 — Subtle Drop | Layered soft drop shadows over hairline paths. | General system components and user tool cards. |
| Level 3 — Soft Stack | Concentrated shadows mixed with explicit borders. | Core overview block elements. |
| Level 4 — Float Stack | Deeper distributed blur fields. | Focused price tier highlights and complex views. |
| Level 5 — Modal | Maximum overlay drop shadow matrices. | Context dialog elements and platform overlay menus. |

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Continuous section blocks and horizontal accents. |
| `{rounded.xs}` | 4px | Small internal selection triggers and inputs. |
| `{rounded.sm}` | 6px | Application baseline inputs and control tools. |
| `{rounded.md}` | 8px | Standard dashboard feature cards and summary panels. |
| `{rounded.lg}` | 12px | Complex dashboard component cards. |
| `{rounded.xl}` | 16px | Distinct interactive layout panels. |
| `{rounded.pill-sm}` | 64px | Filter selectors and internal control chips. |
| `{rounded.pill}` | 100px | Platform transformation action links and pill buttons. |
| `{rounded.full}` | 9999px | Operational user avatars and icon circular shapes. |

## Components

### Buttons

**`button-primary`** — Marketing scale conversion trigger.
- Background `{colors.primary}` (Brand Purple), text `{colors.on-primary}`, uses `{typography.button-lg}`, shape `{rounded.pill}`.

**`button-secondary`** — Standard baseline secondary control.
- Background `{colors.canvas}`, text `{colors.ink}` (Gray-Neutral-900), uses `{typography.button-lg}`, shape `{rounded.pill}`. Serves as default secondary action, e.g., "Cancel" or hover states.

**`button-primary-sm`** — High priority interface action node.
- Background `{colors.primary}`, text `{colors.on-primary}`, uses `{typography.button-md}`, shape `{rounded.pill}`.

**`button-secondary-sm`** — interface utility toggle.
- Background `{colors.canvas}`, text `{colors.ink}`, uses `{typography.button-md}`, shape `{rounded.pill}`.

**`tab-ghost`** — Section navigation tabs.
- Background `{colors.canvas}`, text `{colors.ink}`, uses `{typography.body-sm}`, shape `{rounded.pill-sm}`.

**Nav CTAs:**

**`nav-cta-signup`** — Primary access control link inside header panels.
- Background `{colors.primary}`, text `{colors.on-primary}`, uses `{typography.body-sm-strong}`, shape `{rounded.sm}`.

**`nav-cta-login`** — Internal entry target block.
- Background `{colors.canvas}`, text `{colors.ink}`, uses `{typography.body-sm-strong}`, shape `{rounded.sm}`.

**`nav-cta-ask-ai`** — Automated assistance feature button.
- Background `{colors.canvas}`, text `{colors.ink}`, border 1 px solid `{colors.hairline}`, shape `{rounded.sm}`.

### Cards & Containers

**`card-marketing`** — Modular application component display block.
- Background `{colors.canvas}`, text `{colors.ink}`, uses `{typography.body-md}`, shape `{rounded.md}`, padding `{spacing.lg}`.

**`card-marketing-large`** — Core informational platform blocks.
- Background `{colors.canvas}`, text `{colors.ink}`, shape `{rounded.lg}', padding `{spacing.xl}`.

**`card-soft`** — Specialized dashboard component containers.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, shape `{rounded.md}`, padding `{spacing.lg}`.

**`template-card`** — Preconfigured quick-start setup blocks.
- Background `{colors.canvas}`, text `{colors.ink}`, shape `{rounded.md}`, padding `{spacing.md}`.

**`code-editor-mockup`** — Platform parameter data blocks.
- Background `{colors.ink}` (Deep gray-neutral), text `{colors.on-primary}`, typography `{typography.code}`, shape `{rounded.md}`.

**`pricing-card`** — Standard license option block.
- Background `{colors.canvas}`, text `{colors.ink}`, shape `{rounded.lg}`, padding `{spacing.xl}`.

**`pricing-card-featured`** — Recommended subscription tier display block.
- Background `{colors.primary}` (Brand Purple anchor), text `{colors.on-primary}`, shape `{rounded.lg}`, padding `{spacing.xl}`. Pairs with white `button-secondary-sm` inner controls.

### Inputs & Forms

**`form-input`** — Default application form container.
- Background `{colors.canvas}`, text `{colors.ink}`, border 1 px solid `{colors.hairline}`, shape `{rounded.sm}`, height 40 px.

## Do's and Don'ts

### Do
- Deploy Brand Purple (`{colors.primary}`) exclusively for high-intent actions, primary workflow triggers, and primary text links.
- Apply the purple-tinted grayple scale strings to establish balanced warmth visual hierarchies across tables and app containers.
- Rely on Green (`{colors.success}`) strictly to reflect successful tasks and performance increases.
- Reserve Red (`{colors.error}`) for destructive, high-alert error configurations or permanent data actions.
- Use Amber (`{colors.warning}`) to cleanly indicate system warnings or items requiring user caution.

### Don't
- Don't use Brand Purple for generic text labels or secondary decorative icons, as it dilutes its conversion weight.
- Don't deploy heavy uncalibrated pure-black drop shadows; stick to multi-stop grayple shadow transparency trees instead.
- Don't clutter layouts with conflicting red and amber message frameworks; preserve red solely for high-priority operational blocks.
- Don't stretch the monospace typeface family across default user paragraph layouts; map it strictly to technical metrics and labels.
