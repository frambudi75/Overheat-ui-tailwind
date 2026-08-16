# 🔥 OVERHEAT UI — Executive Tailwind CSS Admin OS & Design System

[![GitHub Repo](https://img.shields.io/badge/GitHub-frambudi75%2FOverheat--ui--tailwind-indigo?logo=github)](https://github.com/frambudi75/Overheat-ui-tailwind)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-v8.0-646cff?logo=vite)](https://vitejs.dev/)
[![Design](https://img.shields.io/badge/Aesthetic-Executive_Design_System-emerald)](#)
[![License](https://img.shields.io/badge/License-MIT-gray)](#)

> **OVERHEAT UI** adalah antarmuka panel admin SaaS & eksekutif bisnis modern berbasis **Tailwind CSS v4** murni. Didesain dengan prinsip estetika *World-Class Product* (setara Linear, Stripe, Raycast, & Vercel), memiliki kontras tinggi (*Swiss Studio Light* & *Obsidian Charcoal Dark*), serta kaya akan interaksi *power-user*.

---

## ✨ Fitur Unggulan (Core Highlights)

### 🎨 1. Desain & Tipografi Standar Enterprise
* **Obsidian Dark Mode**: Latar arang gelap `#0c0e14` dengan aksen solid indigo & emerald yang nyaman di mata untuk pemakaian jangka panjang.
* **Swiss Clean Light Mode**: Teks Slate 900 (`#0f172a`) dengan kontras tajam pada latar `#f8fafc` dan border taktil `#e2e8f0`.
* **Tipografi Presisi**: Kombinasi font Google *Plus Jakarta Sans*, *Inter*, dan *JetBrains Mono*.

### 📊 2. Grafik Finansial Interaktif & Data Point Inspector
* **Timeframe Switcher Nyata**: Beralih instan antara **Harian**, **Mingguan**, **Bulanan**, dan **Tahunan** dengan interpolasi kurva SVG dinamis.
* **Crosshair & Floating Glass Tooltip**: Mengarahkan kursor ke atas grafik memunculkan garis penunjuk vertikal dan detail *Gross Revenue* serta *Net Profit*.

### 💳 3. Multi-Currency Switcher (USD `$` & IDR `Rp`)
* Mengubah seluruh kalkulasi metrik secara real-time dengan menekan tombol **`USD ($)` / `IDR (Rp)`** di header atau menekan tombol shortcut **`U`**.
* Format Rupiah mengikuti standar perbankan eksekutif (**`Rp 2,35 M`** dan **`Rp 6,07 Jt`**), mencegah teks terpotong / *overflow*.

### ⌨️ 4. Pintasan Keyboard Power-User (*Two-Key Navigation Chord*)
* Tekan **`?`** untuk membuka dialog panduan shortcut keyboard.
* **`⌘K` / `Ctrl+K`**: Membuka Command Palette instan dengan pencarian fuzzy.
* **`G` lalu `D`**: Menuju Dashboard & Overview.
* **`G` lalu `A`**: Menuju Revenue & Analitik.
* **`G` lalu `O`**: Menuju Pesanan & Transaksi.
* **`G` lalu `C`**: Menuju Data Pelanggan.
* **`G` lalu `P`**: Menuju Katalog & Paket.
* **`G` lalu `V`**: Menuju Diskon & Voucher.
* **`G` lalu `S`**: Menuju Pengaturan Toko.

### 📱 5. Responsif 100% (Mobile Drawer & Tablet)
* Dilengkapi tombol **Hamburger (`☰`)** dan drawer menu *off-canvas* di layar mobile (`< 768px`) dengan backdrop blur.

### 🛠️ 6. Fitur Interaktif Lengkap
* **Export Real CSV**: Tombol *Export CSV* menghasilkan dan mengunduh file spreadsheet `.csv` transaksi resmi.
* **Kerapatan Tabel (*Density Toggle*)**: Beralih antara mode *Comfortable* dan *Compact*.
* **Cetak Kuitansi Resmi PDF**: Tombol unduh kuitansi langsung membuka dialog print sistem browser.
* **Shimmer Skeleton Loading**: Efek animasi kilau pemuatan data saat tombol *Sync Data* ditekan.
* **Katalog & Voucher**: Form modal *Edit Paket* dan salin kode promo satu klik.
* **Menu Profil & Switcher Toko**: Dropdown multi-workspace dan popover profil Superadmin di pojok kiri bawah.

---

## 🚀 Panduan Memulai (Quick Start)

### Prasyarat
* [Node.js](https://nodejs.org/) versi 18 ke atas
* NPM atau PNPM / Yarn

### 1. Clone Repositori
```bash
git clone https://github.com/frambudi75/Overheat-ui-tailwind.git
cd Overheat-ui-tailwind
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Jalankan Dev Server
```bash
npm run dev
```
Buka browser di **`http://localhost:3000/`** atau port yang tampil di terminal.

### 4. Build untuk Produksi
```bash
npm run build
```
File siap saji (*production-ready bundle*) akan tersimpan di direktori `dist/`.

---

## 📂 Struktur Repositori

```text
Overheat-ui-tailwind/
├── docs/                        # Dokumentasi arsitektur, UI/UX, dan design system
│   ├── DESIGN_SYSTEM.md         # Token CSS, panduan warna, dan tata letak
│   ├── ui-ux.md                 # Prinsip interaksi mikro dan navigasi
│   └── rules.md                 # Aturan kontras & Anti-AI Slop
├── src/
│   ├── main.js                  # Logika SPA, router hash, format currency, chart inspector
│   └── style.css                # Variabel CSS tema (Obsidian Dark & Swiss Light)
├── OVERHEAT_COMPONENTS.md       # Cheatsheet cuplikan kode komponen HTML/Tailwind
├── index.html                   # Master Single Page Application
├── vite.config.js               # Konfigurasi Vite & Tailwind v4 Plugin
└── package.json                 # Skrip proyek dan dependensi
```

---

## 🧩 Contoh Penggunaan Komponen (UI Kit)

Semua komponen dirancang agar mudah disalin langsung ke project React, Vue, Svelte, Blade, atau PHP.

### Kartu KPI Metrik (Stat Card)
```html
<div class="p-5 rounded-xl bg-white dark:bg-[#151924] border border-slate-200 dark:border-white/10 shadow-sm">
  <div class="flex items-center justify-between">
    <span class="text-xs font-mono uppercase tracking-wider text-slate-500">Total Gross Revenue</span>
    <span class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    </span>
  </div>
  <div class="mt-4 flex items-center justify-between gap-2">
    <div class="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">$148,820</div>
    <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
      ↑ 18.4%
    </span>
  </div>
</div>
```

*Lihat panduan lengkap seluruh komponen di [OVERHEAT_COMPONENTS.md](./OVERHEAT_COMPONENTS.md).*

---

## 🤝 Kontribusi & Lisensi

Dibuat dengan dedikasi tinggi oleh **[frambudi75](https://github.com/frambudi75)**.
Proyek ini didistribusikan di bawah lisensi **MIT License**. Bebas digunakan untuk kebutuhan pribadi, komersial, maupun referensi template SaaS.
