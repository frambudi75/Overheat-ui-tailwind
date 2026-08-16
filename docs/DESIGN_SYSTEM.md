# 📐 OVERHEAT Design System Specification

> **A precision-focused Tailwind CSS design system for modern business applications.**

---

## 1. Arsitektur Hirarki Sistem (System Architecture)

Overheat UI dibangun di atas arsitektur dependensi berlapis yang ketat, memisahkan fondasi token, primitif atomik, komponen visual data, hingga modul bisnis:

```text
Design Tokens (Foundations)
       ↓
UI Primitives (components/ui/)
       ↓
Data Display & Navigation (components/data-display/, components/navigation/)
       ↓
Feedback & State (components/feedback/)
       ↓
Business & Domain Components (components/business/)
       ↓
Page Patterns & Application Ecosystem
```

---

## 2. Lapisan Komponen (Component Layers)

### A. Core UI Primitives (`components/ui/`)
Komponen atomik murni tanpa keterikatan domain bisnis atau logika data:
* **`button.html`**: Tombol aksi (Primary, Secondary Raised, Outline, Ghost, Destructive).
* **`input.html`**: Field input teks dengan badge shortcut keyboard kbd.
* **`textarea.html`**: Field multi-baris untuk catatan dan deskripsi.
* **`select.html`**: Dropdown select kustom dengan chevron minimalis.
* **`checkbox.html`**: Kotak centang tunggal dan multi-pilihan.
* **`radio.html`**: Pilihan radio seleksi siklus penagihan / opsi eksklusif.
* **`switch.html`**: Saklar toggle interaktif berbasis peer-checked CSS.
* **`badge.html`**: Tag dan pill penanda status.
* **`avatar.html`**: Inisial profil dan avatar stack tumpuk.
* **`card.html`**: Kontainer kartu taktil netral.
* **`dialog.html`**: Modal pop-up dengan latar belakang backdrop-blur.
* **`dropdown.html`**: Menu popover aksi cepat.
* **`accordion.html`**: Item lipat FAQ berbasis HTML `<details>`.

### B. Data Display (`components/data-display/`)
Komponen untuk menyajikan struktur data, grafik, dan riwayat sistem:
* **`data-table.html`**: Tabel data dengan checkbox seleksi, status badge, dan baris avatar.
* **`stat-card.html`**: Kartu metrik standar dengan sparkline dan badge pertumbuhan.
* **`chart.html`**: Grafik area revenue SVG dengan interpolasi kurva dinamis.
* **`timeline.html`**: Log aktivitas kronologis dan audit jejak keamanan.

### C. Navigation (`components/navigation/`)
Sistem pemandu alur kerja dan penjelajahan modul aplikasi:
* **`sidebar.html`**: Panel navigasi vertikal lengkap dengan pelacak kuota dan profil user.
* **`command-palette.html`**: Palet dialog pencarian perintah cepat (`⌘K` / `Ctrl+K`).
* **`breadcrumbs.html`**: Jejak penunjuk lokasi halaman hirarkis.

### D. Feedback & State (`components/feedback/`)
Penyampai umpan balik status operasional kepada pengguna:
* **`toast.html`**: Notifikasi mengambang dengan titik status berwarna.
* **`alert.html`**: Banner informasi, peringatan, dan kegagalan sistem.
* **`skeleton.html`**: Placeholder kilau (*shimmer loading*) saat sinkronisasi data.
* **`empty-state.html`**: Tampilan grafis saat query atau tabel tidak memiliki data.

### E. Business & Domain Modules (`components/business/`)
Komponen siap pakai berorientasi SaaS dan model bisnis enterprise:
* **`revenue-card.html`**: Kartu omzet finansial dengan kalkulator target dan konversi mata uang.
* **`invoice.html`**: Faktur kuitansi resmi berstandar cetak A4.
* **`bulk-action-bar.html`**: Bar aksi melayang untuk manipulasi massal data terpilih.
* **`billing-summary.html`**: Ringkasan paket langganan dan sisa kuota API.
* **`auth-split.html`**: Halaman login & register split-screen dengan enkripsi indikator.

---

## 3. Token Desain (Design Tokens)

### A. Palet Mode Gelap (Obsidian Charcoal Dark)
Latar arang gelap berorientasi *low eye-strain*:

| Token CSS | Nilai Hex / RGBA | Peruntukan |
| :--- | :--- | :--- |
| `--bg-app` | `#0c0e14` | Latar utama aplikasi |
| `--bg-sidebar` | `#10131c` | Sidebar dan panel navigasi |
| `--bg-surface` | `#151924` | Kartu kontainer dan modal |
| `--bg-surface-raised`| `#1c2130` | Latar input, baris hover, sub-panel |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Garis batas kartu & pembatas |
| `--border-medium` | `rgba(255, 255, 255, 0.14)` | Garis batas popover & dropdown |
| `--text-primary` | `#f8fafc` | Judul, angka metrik, nama entitas |
| `--text-secondary` | `#94a3b8` | Teks keterangan, isi tabel |
| `--text-muted` | `#64748b` | Label waktu, subtitle, placeholder |

### B. Palet Mode Terang (Swiss Clean Light)
Kontras tinggi berbasis standar WCAG AAA tanpa keabuan pudar:

| Token CSS | Nilai Hex | Peruntukan |
| :--- | :--- | :--- |
| `--bg-app` | `#f8fafc` | Latar kanvas abu-abu sangat terang |
| `--bg-sidebar` | `#ffffff` | Sidebar putih solid |
| `--bg-surface` | `#ffffff` | Kartu putih solid |
| `--bg-surface-raised`| `#f1f5f9` | Latar input, tombol sekunder |
| `--border-subtle` | `#e2e8f0` | Garis batas netral Slate 200 |
| `--border-medium` | `#cbd5e1` | Garis batas Slate 300 |
| `--text-primary` | `#0f172a` | Slate 900 (Teks utama berbobot) |
| `--text-secondary` | `#334155` | Slate 700 (Teks isi tegas) |
| `--text-muted` | `#64748b` | Slate 500 (Teks pelengkap & label) |

---

## 4. Pola Penerapan Ekosistem Aplikasi (Application Ecosystem)

Dengan arsitektur ini, seluruh aplikasi mandiri Anda dapat menggunakan Overheat UI sebagai fondasi tunggal (*single source of truth*):

```text
OVERHEAT UI (Design System Core)
     │
     ├── 📱 Absensi App         (Menggunakan: UI Primitives + Feedback + Sidebar)
     ├── 🏢 SMAD Enterprise     (Menggunakan: Data Table + Business Modules + Analytics)
     ├── 🌐 IP Management      (Menggunakan: Data Table + Timeline + Command Palette)
     ├── 💰 Finance System      (Menggunakan: Revenue Card + Invoice + Chart + Multi-Currency)
     ├── 📡 NetScope Monitoring (Menggunakan: Metric Cards + Shimmer Skeletons + Alerts)
     └── ☁️ SaaS Portals        (Menggunakan: Auth Split + Billing Summary + Toast)
```
