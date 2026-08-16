# 🎨 OVERHEAT UI — Master Component Cheatsheet

Dokumentasi cuplikan kode komponen antarmuka (*Ready-to-Use UI Kit*) berbasis **Tailwind CSS**. Anda bisa langsung menyalin (*copy-paste*) komponen di bawah ke project web apa pun (Laravel Blade, React, Vue, Svelte, Next.js, HTML murni).

---

## 1. Kartu KPI Metrik (Stat Card with Badge & Sparkline)

```html
<div class="p-5 rounded-xl bg-white dark:bg-[#151924] border border-slate-200 dark:border-white/10 shadow-sm">
  <div class="flex items-center justify-between">
    <span class="text-xs font-mono uppercase tracking-wider text-slate-500">Total Gross Revenue</span>
    <span class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
      <!-- Icon SVG -->
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    </span>
  </div>
  <div class="mt-4 flex items-center justify-between gap-2">
    <div class="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">$148,820</div>
    <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/20 shrink-0 whitespace-nowrap">
      ↑ 18.4%
    </span>
  </div>
  <div class="mt-3 flex items-center justify-between text-xs text-slate-500">
    <span>Target: $120k/bln</span>
    <span class="text-emerald-600 dark:text-emerald-400 font-semibold font-mono">124% Tercapai</span>
  </div>
</div>
```

---

## 2. Tombol Utama & Sekunder (Tactile Physics Buttons)

```html
<!-- Primary Solid Indigo Button -->
<button class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm">
  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
  + Buat Pesanan Baru
</button>

<!-- Secondary Raised Button -->
<button class="px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 active:scale-95 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-white/10 transition-all">
  Export CSV
</button>
```

---

## 3. Status Badges (Lunas, Menunggu, Refund)

```html
<!-- Badge Hijau (Lunas / Active) -->
<span class="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold">
  LUNAS
</span>

<!-- Badge Kuning (Pending / Menunggu) -->
<span class="px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 font-mono text-[10px] font-bold">
  MENUNGGU
</span>

<!-- Badge Merah (Refund / Canceled) -->
<span class="px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-700 dark:text-rose-400 font-mono text-[10px] font-bold">
  REFUND
</span>
```

---

## 4. Modal Dialog Popup

```html
<div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  <div class="w-full max-w-lg rounded-xl bg-white dark:bg-[#151924] border border-slate-200 dark:border-white/10 p-6 shadow-2xl">
    <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Judul Modal</h3>
      <button class="text-slate-400 hover:text-slate-600 dark:hover:text-white">✕</button>
    </div>
    <div class="py-4 text-xs text-slate-600 dark:text-slate-300">
      Konten modal form atau informasi penting di sini.
    </div>
    <div class="pt-4 border-t border-slate-100 dark:border-white/10 flex justify-end gap-2">
      <button class="px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 text-xs font-semibold">Batal</button>
      <button class="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-bold">Simpan</button>
    </div>
  </div>
</div>
```

---

## 5. Input Field dengan Icon Pencarian

```html
<div class="relative">
  <input type="text" placeholder="Cari order, produk, invoice..." class="w-full px-3.5 py-2 pl-9 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-600">
  <svg class="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
</div>
```
