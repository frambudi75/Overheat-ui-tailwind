# Overheat UI

> **A precision-focused Tailwind CSS design system for modern business applications.**

[![GitHub Repo](https://img.shields.io/badge/GitHub-frambudi75%2FOverheat--ui--tailwind-indigo?logo=github)](https://github.com/frambudi75/Overheat-ui-tailwind)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-v8.0-646cff?logo=vite)](https://vitejs.dev/)
[![Design System](https://img.shields.io/badge/Architecture-Layered_Domain_System-emerald)](#system-architecture)
[![License](https://img.shields.io/badge/License-MIT-gray)](LICENSE)

---

## Overview

**Overheat UI** is an open-source, framework-agnostic design system and modular component foundation built with pure **Tailwind CSS v4** and modern **Vanilla JavaScript (ES Modules)**.

It provides a scalable UI architecture separating foundations, atom-level primitives, data presentation, navigation, system feedback, and domain business modules into clean, copy-paste ready HTML templates.

---

## System Architecture

Overheat UI is structured in strict dependency layers to ensure long-term scalability across multiple applications:

```text
Design Tokens (Foundations)
       ↓
UI Primitives (components/ui/)
       ↓
Data Display & Navigation (components/data-display/, components/navigation/)
       ↓
Feedback & State (components/feedback/)
       ↓
Business & Domain Modules (components/business/)
       ↓
Application Patterns (Absensi, SMAD, IP Management, Finance, NetScope)
```

---

## Core Capabilities

### 1. Dual-Theme Design Tokens
* **Obsidian Dark (`#0c0e14`)**: Low eye-strain charcoal foundation paired with subtle surface elevation and focused indigo/emerald accents.
* **Swiss Clean Light (`#f8fafc`)**: High-contrast Slate 900 typography (`#0f172a`) on tactile neutral cards with zero visual muddiness.
* **Typography Stack**: Engineered using Google *Plus Jakarta Sans*, *Inter*, and *JetBrains Mono*.

### 2. Financial Analytics Engine
* **Dynamic Timeframe Switching**: Instant toggle between Daily, Weekly, Monthly, and Annual datasets with dynamic SVG cubic bezier curve interpolation.
* **Crosshair Cursor Inspector**: Hover-tracking cursor with floating glass tooltip detailing Gross Revenue, Net Profit, and historical data points.

### 3. Dual Currency Formatter (USD & IDR)
* Live currency switching via header button or single-key keyboard shortcut (`U`).
* Full Indonesian Rupiah (`Rp`) scaling with executive banking notation (`Rp 2,35 M`, `Rp 6,07 Jt`) preventing layout overflow.

### 4. Power-User Keyboard Navigation
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

### 5. Data Operations & Bulk Actions
* **Floating Bulk Action Bar**: Appears on row checkbox selection with bulk actions (Mark as Paid, Export Selected to CSV, Bulk Delete).
* **Native CSV Exporter**: Client-side data streaming to downloadable `.csv` spreadsheets.
* **Table Density Switcher**: Toggle between Comfortable and Compact row heights.

---

## Component Vault

The Overheat UI component ecosystem is organized into **5 distinct architectural layers**:

### 1. Core UI Primitives (`components/ui/`)
| Component | File Path | Description |
| :--- | :--- | :--- |
| **Button** | [`components/ui/button.html`](components/ui/button.html) | Primary, secondary raised, outline, ghost, and destructive actions. |
| **Input** | [`components/ui/input.html`](components/ui/input.html) | Search inputs with kbd badges, password reveals, and select menus. |
| **Textarea** | [`components/ui/textarea.html`](components/ui/textarea.html) | Multi-line text field with character limit hint. |
| **Select** | [`components/ui/select.html`](components/ui/select.html) | Custom select dropdown with minimal chevron indicator. |
| **Checkbox** | [`components/ui/checkbox.html`](components/ui/checkbox.html) | Single and multi-select tactile checkboxes. |
| **Radio Group** | [`components/ui/radio.html`](components/ui/radio.html) | Radio option cards with active border highlighting. |
| **Switch** | [`components/ui/switch.html`](components/ui/switch.html) | Physics-styled toggle switch with peer-checked state. |
| **Badge** | [`components/ui/badge.html`](components/ui/badge.html) | Status pills (LUNAS, MENUNGGU, REFUND) and customer tier labels. |
| **Avatar Stack** | [`components/ui/avatar.html`](components/ui/avatar.html) | User initials with online indicator dot and team overlap stacks. |
| **Card** | [`components/ui/card.html`](components/ui/card.html) | Pure neutral tactile container card. |
| **Dialog / Modal** | [`components/ui/dialog.html`](components/ui/dialog.html) | Backdrop-blurred modal dialogs for order details and edits. |
| **Dropdown** | [`components/ui/dropdown.html`](components/ui/dropdown.html) | Quick-action popover dropdown menu. |
| **Accordion** | [`components/ui/accordion.html`](components/ui/accordion.html) | Animated collapsible FAQ items using HTML `<details>`. |

### 2. Data Display (`components/data-display/`)
| Component | File Path | Description |
| :--- | :--- | :--- |
| **Data Table** | [`components/data-display/data-table.html`](components/data-display/data-table.html) | Sortable table with checkbox selection and customer avatars. |
| **Stat Card** | [`components/data-display/stat-card.html`](components/data-display/stat-card.html) | Metric stat cards with trend badges and embedded sparklines. |
| **Chart** | [`components/data-display/chart.html`](components/data-display/chart.html) | SVG revenue area chart with gradient fills and data grid. |
| **Timeline** | [`components/data-display/timeline.html`](components/data-display/timeline.html) | Real-time audit log & activity stream timeline. |

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

### 5. Business & Domain Modules (`components/business/`)
| Component | File Path | Description |
| :--- | :--- | :--- |
| **Revenue Card** | [`components/business/revenue-card.html`](components/business/revenue-card.html) | Revenue KPI with monthly target progress and sparkline curve. |
| **Tax Invoice** | [`components/business/invoice.html`](components/business/invoice.html) | Print-optimized A4 invoice receipt with itemized breakdown. |
| **Bulk Action Bar** | [`components/business/bulk-action-bar.html`](components/business/bulk-action-bar.html) | Floating action bar for mass row modifications. |
| **Billing Summary** | [`components/business/billing-summary.html`](components/business/billing-summary.html) | SaaS subscription plan quota and API request consumption. |
| **Auth Screen** | [`components/business/auth-split.html`](components/business/auth-split.html) | Split-screen login & registration layout with security indicators. |

---

## Application Ecosystem

With this foundation, any internal or client application can consume Overheat UI as its unified core:

```text
OVERHEAT UI (Design System Core)
     │
     ├── 📱 Absensi App         (Consumes: UI Primitives + Feedback + Sidebar)
     ├── 🏢 SMAD Enterprise     (Consumes: Data Table + Business Modules + Analytics)
     ├── 🌐 IP Management      (Consumes: Data Table + Timeline + Command Palette)
     ├── 💰 Finance System      (Consumes: Revenue Card + Invoice + Chart + Multi-Currency)
     ├── 📡 NetScope Monitoring (Consumes: Metric Cards + Shimmer Skeletons + Alerts)
     └── ☁️ SaaS Portals        (Consumes: Auth Split + Billing Summary + Toast)
```

---

## Project Structure

```text
Overheat-ui-tailwind/
├── components/
│   ├── ui/                     # Pure UI Primitives (Button, Input, Select, Checkbox, etc.)
│   ├── data-display/           # Data Presentation (DataTable, StatCard, Chart, Timeline)
│   ├── navigation/             # Navigation Systems (Sidebar, Command Palette, Breadcrumbs)
│   ├── feedback/               # User Feedback (Toast, Alert, Skeleton, EmptyState)
│   └── business/               # SaaS & Domain Modules (RevenueCard, Invoice, BulkBar, Auth)
├── docs/                       # Architecture & design documentation
│   ├── DESIGN_SYSTEM.md        # CSS tokens, layered architecture, and ecosystem guide
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
The static bundle will be generated in the `dist/` directory.

---

## License

This project is open-source software licensed under the [MIT License](LICENSE).
