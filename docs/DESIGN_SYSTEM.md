# 📐 OVERHEAT Design System Specification

Panduan resmi token desain, palet warna, tipografi, dan komponen antarmuka **OVERHEAT UI**.

---

## 1. Prinsip Desain (Design Philosophy)

1. **Anti-AI Slop**: Menolak gradasi neon acak yang membuat sakit mata (*purple-orange high glow blobs*). Mengutamakan palet solid, proporsional, dan elegan.
2. **High-Contrast Readability**: Memastikan seluruh teks, angka metrik, dan tabel memiliki rasio kontras WCAG AAA baik di mode gelap maupun terang.
3. **Tactile Micro-Physics**: Tombol dan elemen interaktif memberikan *feedback* pegas halus (`active:scale-95` atau `active:scale-98`) saat diklik.
4. **Data-Dense Yet Breathable**: Menampilkan metrik dalam struktur hierarki visual yang jelas tanpa membuat pengguna kewalahan.

---

## 2. Palet Warna (Color Palette Tokens)

### A. Mode Gelap (Obsidian Charcoal Dark)
Digunakan sebagai mode default yang mewah dan nyaman di mata untuk penggunaan jangka panjang:

| Token CSS | Hex Code / Nilai | Penggunaan |
| :--- | :--- | :--- |
| `--bg-app` | `#0c0e14` | Latar belakang aplikasi utama |
| `--bg-sidebar` | `#10131c` | Latar belakang sidebar navigasi |
| `--bg-surface` | `#151924` | Latar belakang kartu kontainer |
| `--bg-surface-raised`| `#1c2130` | Latar input, baris tabel hover, sub-panel |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Garis batas (*border*) halus kartu |
| `--border-medium` | `rgba(255, 255, 255, 0.14)` | Garis batas dropdown & popover |
| `--text-primary` | `#f8fafc` | Judul, angka metrik utama, nama pelanggan |
| `--text-secondary` | `#94a3b8` | Teks keterangan, isi tabel, link menu |
| `--text-muted` | `#64748b` | Label waktu, subtitle, placeholder |

### B. Mode Terang (Swiss Studio Clean Light)
Dirancang untuk kontras tinggi, bebas dari teks pudar / tidak terbaca:

| Token CSS | Hex Code / Nilai | Penggunaan |
| :--- | :--- | :--- |
| `--bg-app` | `#f8fafc` | Latar abu-abu terang sangat halus |
| `--bg-sidebar` | `#ffffff` | Latar sidebar putih solid |
| `--bg-surface` | `#ffffff` | Latar kartu putih solid |
| `--bg-surface-raised`| `#f1f5f9` | Latar input field dan tombol sekunder |
| `--border-subtle` | `#e2e8f0` | Garis batas netral Slate 200 |
| `--border-medium` | `#cbd5e1` | Garis batas Slate 300 |
| `--text-primary` | `#0f172a` | Slate 900 (Teks hitam pekat berbobot) |
| `--text-secondary` | `#334155` | Slate 700 (Teks pendukung tegas) |
| `--text-muted` | `#64748b` | Slate 500 (Teks pelengkap & label) |

### C. Aksen Status Finansial
* **Primary Accent (Indigo)**: `#4f46e5` (Hover: `#4338ca`) — Tombol utama, tab aktif, kurva revenue.
* **Success / Lunas (Emerald)**: `#10b981` (Light Mode: `#059669`) — Laba bersih, badge transaksi berhasil.
* **Warning / Menunggu (Amber)**: `#f59e0b` — Tagihan pending, repeat buyers.
* **Danger / Refund (Rose)**: `#f43f5e` — Transaksi dikembalikan / dibatalkan.

---

## 3. Tipografi (Typography Hierarchy)

| Kategori | Font Family | Contoh Penggunaan |
| :--- | :--- | :--- |
| **Display & Heading** | `Plus Jakarta Sans` | Judul H1 halaman, judul modal, nama brand |
| **Body & Navigation** | `Inter` | Menu sidebar, teks paragraf, tombol aksi |
| **Code & Numerical** | `JetBrains Mono` | Invoice ID, nominal harga, persentase metrik |

---

## 4. Efek Bayangan & Elevasi (Shadow System)

* **Kartu Taktil (Dark)**: `0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.2)`
* **Kartu Taktil (Light)**: `0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)`
* **Floating Modal / Drawer**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`
