# 📜 OVERHEAT Development & Design Rules

Aturan ketat dan konvensi penulisan kode untuk menjaga kualitas kode dan estetika **OVERHEAT UI**.

---

## 1. Aturan Desain & Visual (Executive Design Principles)

1. **Menghindari Gradasi Neon Berlebihan**:
   - ❌ Jangan pernah memakai gradasi norak seperti `from-purple-500 via-pink-500 to-orange-500` pada tombol atau kartu.
   - ✅ Gunakan warna solid berbobot seperti `bg-indigo-600` atau `bg-slate-900` dengan border taktil halus `border-slate-200` atau `border-white/10`.
2. **Dilarang Menggunakan Emoji Kartun sebagai Icon Utama**:
   - ❌ Hindari emoji kuning seperti `☀️`, `🌑`, `🚀`, `🔥` sebagai representasi tombol UI.
   - ✅ Gunakan SVG icon minimalis (Lucide, Heroicons, atau Feather) dengan `stroke-width="2"`.
3. **Kepatuhan Kontras Teks (High Contrast Mode)**:
   - Di Light Mode, teks utama **wajib** menggunakan Slate 900 (`#0f172a`), bukan abu-abu pudar.
   - Di Dark Mode, teks utama menggunakan `#f8fafc` dengan latar arang pekat `#0c0e14`.

---

## 2. Aturan Kode (Coding Standards)

1. **SVG Class Manipulation**:
   - Jangan pernah menulis `svg.className = '...'` pada elemen SVG (karena `className` pada SVGElement bersifat *read-only* getter di DOM modern).
   - Selalu gunakan `svg.setAttribute('class', '...')`.
2. **Format Mata Uang Rupiah**:
   - Angka miliaran pada kartu metrik utama **wajib** diformat secara ringkas dan proporsional (contoh: `Rp 2,35 M` dan `Rp 6,07 Jt`) untuk mencegah tabrakan badge persentase atau *word-wrap* yang merusak tata letak.
3. **Tailwind CSS Utility Best Practices**:
   - Gunakan variabel CSS semantik (`var(--bg-surface)`, `var(--text-primary)`) pada elemen yang mendukung transisi tema Dark/Light.
