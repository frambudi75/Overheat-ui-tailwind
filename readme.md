# Overheat UI

> **A premium Tailwind CSS v4 admin UI system and modular component kit for SaaS and business applications.**

[![GitHub Repo](https://img.shields.io/badge/GitHub-frambudi75%2FOverheat--ui--tailwind-indigo?logo=github)](https://github.com/frambudi75/Overheat-ui-tailwind)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-v8.0-646cff?logo=vite)](https://vitejs.dev/)
[![Components](https://img.shields.io/badge/Components-Modular_HTML-emerald)](#component-vault)
[![License](https://img.shields.io/badge/License-MIT-gray)](LICENSE)

---

## Overview

**Overheat UI** is an open-source, framework-agnostic admin dashboard and UI component kit built with pure **Tailwind CSS v4** and modern **Vanilla JavaScript (ES Modules)**. 

It provides an enterprise design system featuring crisp dual-theme support (*Obsidian Charcoal Dark* & *Swiss Clean Light*), keyboard-first power-user workflows, interactive financial analytics, and copy-paste ready HTML components that can be dropped into any backend stack (Laravel, Django, Rails, Go) or frontend framework (React, Vue, Svelte).

---

## Core Capabilities

### 1. Dual-Theme Design System
* **Obsidian Dark (`#0c0e14`)**: Low eye-strain charcoal foundation paired with subtle surface elevation and focused indigo/emerald accents.
* **Swiss Clean Light (`#f8fafc`)**: High-contrast Slate 900 typography (`#0f172a`) on tactile neutral cards with zero visual muddiness.
* **Typography Stack**: Engineered using Google *Plus Jakarta Sans*, *Inter*, and *JetBrains Mono*.

### 2. Copy-Paste Modular Component Vault
* Standalone, self-contained HTML component templates located in `components/ui/` ready for immediate 1-click integration.
* Interactive showcase page (`#components`) with instant clipboard copy and live preview.

### 3. Financial Analytics & Chart Inspector
* **Dynamic Timeframe Switching**: Instant toggle between Daily, Weekly, Monthly, and Annual datasets with dynamic SVG cubic bezier curve interpolation.
* **Crosshair Cursor Inspector**: Hover-tracking cursor with floating glass tooltip detailing Gross Revenue, Net Profit, and historical data points.

### 4. Dual Currency Formatter (USD & IDR)
* Live currency switching via header button or single-key keyboard shortcut (`U`).
* Full Indonesian Rupiah (`Rp`) scaling with executive banking notation (`Rp 2,35 M`, `Rp 6,07 Jt`) preventing layout overflow.

### 5. Power-User Keyboard Navigation
* **Command Palette (`⌘K` / `Ctrl+K`)**: Instant fuzzy search and route jumping across views and actions.
* **Two-Key Navigation Chords (`G + Key`)**:
  * `G` → `D`: Overview & KPI Dashboard
  * `G` → `A`: Revenue & Financial Analytics
  * `G` → `O`: Orders & Transactions Table
  * `G` → `C`: Customer CRM & Profiles
  * `G` → `P`: Product Catalog & Plans
  * `G` → `V`: Discounts & Promo Vouchers
  * `G` → `K`: UI Component Showcase
  * `G` → `L`: Authentication / Login Screen
  * `G` → `S`: System & Store Settings
* **Quick Reference Guide**: Press `?` anywhere to reveal the modal cheat-sheet.

### 6. Interactive Data Table Operations
* **Floating Bulk Action Bar**: Appears on row checkbox selection with bulk actions (Mark as Paid, Export Selected to CSV, Bulk Delete).
* **Native CSV Exporter**: Client-side data streaming to downloadable `.csv` spreadsheets.
* **Table Density Switcher**: Toggle between Comfortable and Compact row heights.
* **Invoice Modal & Print Optimization**: A4 print-ready tax invoice preview with native browser print triggers.

---

## Component Vault

The Overheat UI component ecosystem is categorized into 4 domain directories:

### 1. Core UI Primitives (`components/ui/`)
| Component | File Path | Description |
| :--- | :--- | :--- |
| **Button** | [`components/ui/button.html`](components/ui/button.html) | Primary, secondary raised, outline, ghost, and destructive actions. |
| **Input** | [`components/ui/input.html`](components/ui/input.html) | Search inputs with kbd badges, password reveals, and select menus. |
| **Dialog / Modal** | [`components/ui/dialog.html`](components/ui/dialog.html) | Backdrop-blurred modal dialogs for order details and edits. |
| **Badge** | [`components/ui/badge.html`](components/ui/badge.html) | Status pills (LUNAS, MENUNGGU, REFUND) and customer tier labels. |
| **Card** | [`components/ui/card.html`](components/ui/card.html) | Metric stat cards with trend badges and embedded sparklines. |
| **Switch** | [`components/ui/switch.html`](components/ui/switch.html) | Physics-styled toggle switch with peer-checked state. |
| **Accordion** | [`components/ui/accordion.html`](components/ui/accordion.html) | Animated collapsible FAQ items using HTML `<details>`. |
| **Avatar Stack** | [`components/ui/avatar.html`](components/ui/avatar.html) | User initials with online indicator dot and team overlap stacks. |
| **Auth Screen** | [`components/ui/auth.html`](components/ui/auth.html) | Split-screen login & registration layout with security indicators. |

### 2. Data Display (`components/data-display/`)
| Component | File Path | Description |
| :--- | :--- | :--- |
| **Data Table** | [`components/data-display/data-table.html`](components/data-display/data-table.html) | Sortable table with checkbox selection and customer avatars. |
| **Stat Card** | [`components/data-display/stat-card.html`](components/data-display/stat-card.html) | Metric stat cards with trend badges and embedded sparklines. |
| **Chart** | [`components/data-display/chart.html`](components/data-display/chart.html) | SVG revenue area chart with gradient fills and data grid. |
| **Timeline** | [`components/data-display/timeline.html`](components/data-display/timeline.html) | Real-time audit log & activity stream timeline. |
| **Tax Invoice** | [`components/data-display/invoice.html`](components/data-display/invoice.html) | Print-optimized A4 invoice receipt with itemized breakdown. |

### 3. Navigation (`components/navigation/`)
| Component | File Path | Description |
| :--- | :--- | :--- |
| **Sidebar** | [`components/navigation/sidebar.html`](components/navigation/sidebar.html) | Collapsible navigation sidebar with quota tracker & profile dropdown. |
| **Command Palette** | [`components/navigation/command-palette.html`](components/navigation/command-palette.html) | Quick-search command dialog (`⌘K`) with keyboard shortcuts. |
| **Breadcrumbs** | [`components/navigation/breadcrumbs.html`](components/navigation/breadcrumbs.html) | Hierarchical page trail navigation links. |

### 4. Feedback & Status (`components/feedback/`)
| Component | File Path | Description |
| :--- | :--- | :--- |
| **Toast** | [`components/feedback/toast.html`](components/feedback/toast.html) | Floating notification toast popups with status dot indicators. |
| **Alert** | [`components/feedback/alert.html`](components/feedback/alert.html) | Success, warning, and error callout banners with inline SVG icons. |
| **Skeleton** | [`components/feedback/skeleton.html`](components/feedback/skeleton.html) | Shimmer loading skeleton placeholders for data fetching states. |
| **Empty State** | [`components/feedback/empty-state.html`](components/feedback/empty-state.html) | Zero-data empty state graphic with call-to-action triggers. |

---

## Project Structure

```text
Overheat-ui-tailwind/
├── components/
│   ├── ui/                     # Core Primitives (Button, Input, Dialog, Badge, Card, Switch)
│   ├── data-display/           # Visual Data & Stats (DataTable, StatCard, Chart, Timeline, Invoice)
│   ├── navigation/             # Routing Systems (Sidebar, Command Palette, Breadcrumbs)
│   └── feedback/               # State & Notifications (Toast, Alert, Skeleton, EmptyState)
├── docs/                       # Architecture & design documentation
│   ├── DESIGN_SYSTEM.md        # CSS tokens and color scales
│   ├── ui-ux.md                # Interaction principles and keyboard shortcuts
│   └── rules.md                # Contrast rules and quality guidelines
├── public/
│   └── favicon.svg             # Vector brand favicon
├── src/
│   ├── main.js                 # SPA routing, currency conversions, chart inspector
│   └── style.css               # Tailwind v4 import & CSS custom properties
├── index.html                  # Master Single-Page Application & Showcase
├── package.json                # Project dependencies and build scripts
└── vite.config.js              # Vite bundler configuration
```

---

## Quickstart

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher)
* `npm`, `pnpm`, or `yarn`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/frambudi75/Overheat-ui-tailwind.git

# 2. Enter directory
cd Overheat-ui-tailwind

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will be accessible at `http://localhost:3000/`.

### Production Build

```bash
npm run build
```
The optimized static bundle will be generated in the `dist/` directory.

---

## Framework Integration

Because Overheat UI uses **standard HTML5 and Tailwind CSS v4 classes**, it requires no framework-specific wrappers:

### Laravel / Blade
Copy the desired component from `components/ui/*.html` into `resources/views/components/` (e.g., `resources/views/components/stat-card.blade.php`).

### React / Next.js / Vue
Copy the markup into your JSX/TSX/Vue template and replace `class=` with `className=` where applicable.

---

## Design System Tokens

Colors and spacing are defined using CSS custom properties in `src/style.css`:

```css
:root {
  /* Obsidian Dark (Default) */
  --bg-app: #0c0e14;
  --bg-sidebar: #10131c;
  --bg-surface: #151924;
  --bg-surface-raised: #1c2130;
  --text-primary: #f8fafc;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --color-primary: #4f46e5;
  --color-accent: #10b981;
}

[data-theme="swiss-light"] {
  /* Swiss Clean Light */
  --bg-app: #f8fafc;
  --bg-sidebar: #ffffff;
  --bg-surface: #ffffff;
  --bg-surface-raised: #f1f5f9;
  --text-primary: #0f172a;
  --border-subtle: #e2e8f0;
}
```

---

## License

This project is open-source software licensed under the [MIT License](LICENSE).
