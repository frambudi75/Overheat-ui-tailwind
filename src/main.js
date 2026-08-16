// Overheat Admin State & Store
let ordersData = [
  { id: 'ORD-94820', name: 'Jessica Pratama', email: 'jessica@perusahaan.com', plan: 'Enterprise Cloud Suite', amount: 890, status: 'PAID', date: 'Hari ini, 14:20' },
  { id: 'ORD-94819', name: 'Alexander Wright', email: 'alex@fintech.io', plan: 'Pro Developer Plan', amount: 450, status: 'PAID', date: 'Hari ini, 13:45' },
  { id: 'ORD-94818', name: 'Sarah Jenkins', email: 'sarah.j@acme.org', plan: 'Enterprise Cloud Suite', amount: 890, status: 'PAID', date: 'Hari ini, 11:10' },
  { id: 'ORD-94817', name: 'David Kurniawan', email: 'david@studio.co.id', plan: 'Starter Cloud Tier', amount: 120, status: 'PENDING', date: 'Kemarin, 19:30' },
  { id: 'ORD-94816', name: 'Michael Scott', email: 'michael@dunder.com', plan: 'Pro Developer Plan', amount: 450, status: 'PAID', date: 'Kemarin, 16:15' },
  { id: 'ORD-94815', name: 'Chloe Zhao', email: 'chloe@cinema.art', plan: 'Enterprise Cloud Suite', amount: 890, status: 'PAID', date: '14 Agu, 10:00' },
  { id: 'ORD-94814', name: 'Marcus Aurelius', email: 'marcus@rome.net', plan: 'Pro Developer Plan', amount: 450, status: 'REFUNDED', date: '13 Agu, 18:20' },
  { id: 'ORD-94813', name: 'Sophia Turner', email: 'sophia@design.co', plan: 'Starter Cloud Tier', amount: 120, status: 'PAID', date: '12 Agu, 09:40' },
];

let activeFilter = 'ALL';
let currentSearchQuery = '';
let currentCurrency = 'USD'; // 'USD' or 'IDR'
let currentTimeframe = 'harian';
let isTableCompact = false;
const USD_TO_IDR = 15800;

// Timeframe Datasets for Chart
const timeframeDatasets = {
  harian: {
    subtitle: 'Menampilkan data periode: Harian (Senin - Hari Ini)',
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Hari Ini ($6.4k)'],
    pathArea: 'M0,230 L0,160 C150,110 300,170 450,120 C600,60 750,140 900,40 L900,230 Z',
    pathRev: 'M0,160 C150,110 300,170 450,120 C600,60 750,140 900,40',
    pathProfit: 'M0,190 C150,150 300,195 450,155 C600,110 750,170 900,90',
    points: [
      { xPct: 0.05, date: 'Senin (10 Agu)', rev: 14200, profit: 8900, ySvg: 160 },
      { xPct: 0.25, date: 'Selasa (11 Agu)', rev: 21400, profit: 14200, ySvg: 120 },
      { xPct: 0.5, date: 'Kamis (13 Agu)', rev: 29800, profit: 19800, ySvg: 110 },
      { xPct: 0.75, date: 'Sabtu (15 Agu)', rev: 46200, profit: 31200, ySvg: 80 },
      { xPct: 1.0, date: 'Hari Ini (Peak)', rev: 64800, profit: 41200, ySvg: 40 },
    ]
  },
  mingguan: {
    subtitle: 'Menampilkan data periode: Mingguan (4 Minggu Terakhir)',
    labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4', 'Total ($148k)'],
    pathArea: 'M0,230 L0,180 C225,130 450,160 675,90 900,30 L900,230 Z',
    pathRev: 'M0,180 C225,130 450,160 675,90 900,30',
    pathProfit: 'M0,200 C225,160 450,180 675,130 900,80',
    points: [
      { xPct: 0.1, date: 'Minggu 1 (1-7 Agu)', rev: 32400, profit: 21800, ySvg: 180 },
      { xPct: 0.35, date: 'Minggu 2 (8-14 Agu)', rev: 38900, profit: 26200, ySvg: 140 },
      { xPct: 0.65, date: 'Minggu 3 (15-21 Agu)', rev: 44100, profit: 29800, ySvg: 110 },
      { xPct: 1.0, date: 'Minggu 4 (22-31 Agu)', rev: 68400, profit: 48200, ySvg: 30 },
    ]
  },
  bulanan: {
    subtitle: 'Menampilkan data periode: Bulanan (Tahun 2026)',
    labels: ['Jan', 'Mar', 'Mei', 'Jul', 'Sep', 'Nov', 'Des (Est. $1.2M)'],
    pathArea: 'M0,230 L0,190 C150,160 300,120 450,100 C600,80 750,50 900,20 L900,230 Z',
    pathRev: 'M0,190 C150,160 300,120 450,100 C600,80 750,50 900,20',
    pathProfit: 'M0,210 C150,180 300,150 450,130 C600,110 750,90 900,60',
    points: [
      { xPct: 0.1, date: 'Januari 2026', rev: 45000, profit: 30000, ySvg: 190 },
      { xPct: 0.3, date: 'Maret 2026', rev: 62000, profit: 42000, ySvg: 140 },
      { xPct: 0.5, date: 'Juni 2026', rev: 89000, profit: 61000, ySvg: 100 },
      { xPct: 0.75, date: 'September 2026', rev: 118000, profit: 82000, ySvg: 60 },
      { xPct: 1.0, date: 'Desember 2026 (Proyeksi)', rev: 148820, profit: 102000, ySvg: 20 },
    ]
  },
  tahunan: {
    subtitle: 'Menampilkan tren multi-tahun (2023 - 2026)',
    labels: ['2023 ($320k)', '2024 ($680k)', '2025 ($1.1M)', '2026 ($1.8M Target)'],
    pathArea: 'M0,230 L0,200 C300,160 600,100 900,25 L900,230 Z',
    pathRev: 'M0,200 C300,160 600,100 900,25',
    pathProfit: 'M0,215 C300,180 600,130 900,70',
    points: [
      { xPct: 0.1, date: 'Tahun 2023', rev: 320000, profit: 210000, ySvg: 200 },
      { xPct: 0.4, date: 'Tahun 2024', rev: 680000, profit: 450000, ySvg: 150 },
      { xPct: 0.7, date: 'Tahun 2025', rev: 1140000, profit: 790000, ySvg: 90 },
      { xPct: 1.0, date: 'Tahun 2026 (Target)', rev: 1840000, profit: 1250000, ySvg: 25 },
    ]
  }
};

// Format Currency Utility
function formatMoney(amountUSD, mode = 'standard') {
  if (currentCurrency === 'IDR') {
    const idrVal = amountUSD * USD_TO_IDR;
    
    if (mode === 'kpi') {
      if (idrVal >= 1000000000) {
        return `Rp ${(idrVal / 1000000000).toFixed(2).replace('.', ',')} M`;
      }
      if (idrVal >= 1000000) {
        return `Rp ${(idrVal / 1000000).toFixed(2).replace('.', ',')} Jt`;
      }
      return `Rp ${Math.round(idrVal).toLocaleString('id-ID')}`;
    }

    if (mode === 'compact') {
      if (idrVal >= 1000000000) {
        return `Rp ${(idrVal / 1000000000).toFixed(2).replace('.', ',')} M`;
      }
      if (idrVal >= 1000000) {
        return `Rp ${(idrVal / 1000000).toFixed(1).replace('.', ',')} Jt`;
      }
      if (idrVal >= 1000) {
        return `Rp ${(idrVal / 1000).toFixed(0)} rb`;
      }
      return `Rp ${Math.round(idrVal)}`;
    }

    return `Rp ${Math.round(idrVal).toLocaleString('id-ID')}`;
  }

  // USD Formatting
  if (mode === 'kpi') {
    return `$${Math.round(amountUSD).toLocaleString('en-US')}`;
  }
  if (mode === 'standard') {
    return `$${amountUSD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  if (mode === 'compact') {
    if (amountUSD >= 1000) {
      return `$${(amountUSD / 1000).toFixed(1)}k`;
    }
    return `$${amountUSD.toFixed(0)}`;
  }
  return `$${amountUSD.toLocaleString('en-US')}`;
}

// Page Metadata
const pageMeta = {
  overview: { section: 'Store Analytics', title: 'Dashboard & Overview' },
  analytics: { section: 'Store Analytics', title: 'Revenue & Analitik' },
  orders: { section: 'Transaksi', title: 'Pesanan & Transaksi' },
  customers: { section: 'CRM', title: 'Data Pelanggan' },
  products: { section: 'Manajemen Produk', title: 'Katalog & Paket' },
  discounts: { section: 'Marketing', title: 'Diskon & Voucher' },
  components: { section: 'UI Kit & Design System', title: 'Koleksi Komponen UI (OVERHEAT KIT)' },
  auth: { section: 'Autentikasi', title: 'Halaman Login & Register (Auth)' },
  settings: { section: 'Sistem', title: 'Pengaturan Toko' },
};

// Component Snippets for 1-Click Copy (OVERHEAT UI KIT)
const uiSnippets = {
  button: `<button class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold transition-all inline-flex items-center gap-2 shadow-sm">
  <span>Primary Action</span>
</button>`,
  badge: `<span class="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold inline-flex items-center gap-1.5">
  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
  <span>LUNAS</span>
</span>`,
  input: `<div class="relative w-full max-w-sm">
  <input type="text" placeholder="Cari..." class="w-full px-3.5 py-2 pl-9 pr-12 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-all">
  <kbd class="absolute right-2.5 top-2.5 px-1.5 py-0.5 text-[10px] font-mono bg-black/5 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded text-slate-500">⌘K</kbd>
</div>`,
  card: `<div class="p-5 rounded-xl bg-white dark:bg-[#151924] border border-slate-200 dark:border-white/10 shadow-sm relative overflow-hidden group hover:border-indigo-500/40 transition-all">
  <div class="flex items-center justify-between">
    <span class="text-xs font-mono uppercase tracking-wider text-slate-500">Total Gross Revenue</span>
  </div>
  <div class="mt-4 flex items-center justify-between gap-2">
    <div class="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white">$148,820</div>
    <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">↑ 18.4%</span>
  </div>
</div>`,
  accordion: `<details class="group p-3 rounded-lg bg-white dark:bg-[#151924] border border-slate-200 dark:border-white/10 text-xs">
  <summary class="flex items-center justify-between cursor-pointer font-bold text-slate-900 dark:text-white list-none">
    <span>Pertanyaan FAQ?</span>
    <svg class="w-4 h-4 text-slate-400 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
  </summary>
  <p class="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-white/10">Jawaban lengkap di sini.</p>
</details>`,
  avatar: `<div class="flex items-center -space-x-2">
  <div class="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs border-2 border-white dark:border-[#151924]">J</div>
  <div class="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs border-2 border-white dark:border-[#151924]">A</div>
  <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-[10px] border-2 border-white dark:border-[#151924]">+4</div>
</div>`,
  alert: `<div class="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center gap-3 text-xs text-emerald-800 dark:text-emerald-300">
  <svg class="w-4 h-4 shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
  <span><strong>Sukses!</strong> Transaksi telah berhasil diverifikasi.</span>
</div>`,
  switch: `<label class="inline-flex items-center gap-3 cursor-pointer">
  <input type="checkbox" checked class="sr-only peer">
  <div class="w-11 h-6 bg-slate-300 dark:bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600 relative"></div>
  <span class="text-xs font-medium text-slate-900 dark:text-white">Toggle Active</span>
</label>`
};

// Switch Page
function navigateToPage(pageKey) {
  if (!pageMeta[pageKey]) pageKey = 'overview';

  document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
  const targetView = document.getElementById(`page-${pageKey}`);
  if (targetView) targetView.classList.add('active');

  document.querySelectorAll('#sidebar-nav a').forEach(link => {
    const isTarget = link.getAttribute('data-page') === pageKey;
    const svg = link.querySelector('svg');
    if (isTarget) {
      link.className = 'nav-item active flex items-center justify-between px-3 py-2.5 rounded-lg bg-indigo-600 text-white shadow-sm transition-all';
      if (svg) svg.setAttribute('class', 'w-4 h-4 text-white');
    } else {
      link.className = 'nav-item flex items-center justify-between px-3 py-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-100 dark:hover:bg-white/5 transition-all';
      if (svg) svg.setAttribute('class', 'w-4 h-4 text-[var(--text-muted)]');
    }
  });

  const bSection = document.getElementById('header-breadcrumb-section');
  const bPage = document.getElementById('header-breadcrumb-page');
  if (bSection && bPage) {
    bSection.innerText = pageMeta[pageKey].section;
    bPage.innerText = pageMeta[pageKey].title;
  }

  window.location.hash = pageKey;
}

// Expose globally for inline onclick handlers
window.navigateToPage = navigateToPage;
window.formatMoney = formatMoney;

// Toast Notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto tactile-card px-4 py-3 border border-[var(--border-subtle)] shadow-xl flex items-center gap-3 transform translate-y-4 opacity-0 transition-all duration-300 bg-[var(--bg-surface)]';
  
  let dot = `<span class="w-2 h-2 rounded-full bg-indigo-600"></span>`;
  if (type === 'success') dot = `<span class="w-2 h-2 rounded-full bg-emerald-500"></span>`;
  if (type === 'error') dot = `<span class="w-2 h-2 rounded-full bg-rose-500"></span>`;

  toast.innerHTML = `
    ${dot}
    <div class="text-xs font-medium text-[var(--text-primary)] font-sans">${message}</div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Render Orders Table
function renderOrdersTable() {
  const tbody = document.getElementById('orders-table-body');
  const sidebarCount = document.getElementById('sidebar-order-count');
  if (sidebarCount) sidebarCount.innerText = ordersData.length;

  if (!tbody) return;

  let filtered = ordersData.filter(order => {
    const matchSearch = order.name.toLowerCase().includes(currentSearchQuery) ||
                        order.email.toLowerCase().includes(currentSearchQuery) ||
                        order.id.toLowerCase().includes(currentSearchQuery) ||
                        order.plan.toLowerCase().includes(currentSearchQuery);
    
    const matchStatus = activeFilter === 'ALL' || order.status === activeFilter;
    return matchSearch && matchStatus;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="py-8 text-center text-[var(--text-muted)] text-xs">
          Tidak ada transaksi yang cocok dengan filter atau kata kunci pencarian.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(order => {
    let statusBadge = '';
    if (order.status === 'PAID') {
      statusBadge = `<span class="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold">
        LUNAS
      </span>`;
    } else if (order.status === 'PENDING') {
      statusBadge = `<span class="px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 font-mono text-[10px] font-bold">
        MENUNGGU
      </span>`;
    } else {
      statusBadge = `<span class="px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-700 dark:text-rose-400 font-mono text-[10px] font-bold">
        REFUND
      </span>`;
    }

    return `
      <tr class="hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors duration-150 group">
        <td class="py-3.5 px-3 text-center">
          <input type="checkbox" class="order-row-checkbox rounded border-slate-300 dark:border-white/20 text-indigo-600 focus:ring-0 cursor-pointer" data-id="${order.id}">
        </td>
        <td class="py-3.5 px-4">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-full bg-slate-800 text-white dark:bg-slate-700 flex items-center justify-center font-bold text-xs">
              ${order.name.charAt(0)}
            </div>
            <div>
              <div class="font-bold text-[var(--text-primary)]">${order.name}</div>
              <div class="text-[11px] text-[var(--text-muted)]">${order.email}</div>
            </div>
          </div>
        </td>
        <td class="py-3.5 px-4 font-mono text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
          <span class="bg-[var(--bg-surface-raised)] px-1.5 py-0.5 rounded border border-[var(--border-subtle)]">${order.id}</span>
        </td>
        <td class="py-3.5 px-4 text-[var(--text-secondary)] font-medium">
          ${order.plan}
        </td>
        <td class="py-3.5 px-4 font-mono font-bold text-[var(--text-primary)]">
          ${formatMoney(order.amount)}
        </td>
        <td class="py-3.5 px-4">
          ${statusBadge}
        </td>
        <td class="py-3.5 px-4 text-[var(--text-muted)] text-[11px]">
          ${order.date}
        </td>
        <td class="py-3.5 px-4 text-right">
          <button class="btn-view-invoice tactile-btn px-2.5 py-1 rounded-lg bg-[var(--bg-surface-raised)] hover:bg-slate-200 dark:hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs border border-[var(--border-subtle)] font-medium" data-id="${order.id}">
            Rincian
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Attach Checkbox Change Listeners
  attachCheckboxListeners();

  document.querySelectorAll('.btn-view-invoice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const item = ordersData.find(o => o.id === id);
      if (item) openOrderDrawer(item);
    });
  });
}

// Update All Displayed Currency Values
function updateAllCurrencies() {
  const revEl = document.getElementById('kpi-revenue');
  const aovEl = document.getElementById('kpi-aov');
  const targetLabel = document.getElementById('kpi-target-label');
  const donutTotal = document.getElementById('donut-total');
  
  if (revEl) revEl.innerText = formatMoney(148820, 'kpi');
  if (aovEl) aovEl.innerText = formatMoney(384.50, 'kpi');
  if (targetLabel) targetLabel.innerText = `Target: ${formatMoney(120000, 'compact')}/bln`;
  if (donutTotal) donutTotal.innerText = formatMoney(148000, 'compact');

  // Bestsellers
  const b1 = document.getElementById('bestseller-1');
  const b2 = document.getElementById('bestseller-2');
  const b3 = document.getElementById('bestseller-3');
  if (b1) b1.innerText = formatMoney(68400, 'compact');
  if (b2) b2.innerText = formatMoney(48200, 'compact');
  if (b3) b3.innerText = formatMoney(32220, 'compact');

  // Analytics page
  const mrr = document.getElementById('analytics-mrr');
  const arr = document.getElementById('analytics-arr');
  if (mrr) mrr.innerText = formatMoney(94200, 'kpi');
  if (arr) arr.innerText = formatMoney(1130400, 'kpi');

  const rUS = document.getElementById('reg-us');
  const rID = document.getElementById('reg-id');
  const rEU = document.getElementById('reg-eu');
  const rJP = document.getElementById('reg-jp');
  if (rUS) rUS.innerText = formatMoney(64800, 'compact');
  if (rID) rID.innerText = formatMoney(38200, 'compact');
  if (rEU) rEU.innerText = formatMoney(27400, 'compact');
  if (rJP) rJP.innerText = formatMoney(18420, 'compact');

  // Customer LTV
  const ltv1 = document.getElementById('cust-ltv-1');
  const ltv2 = document.getElementById('cust-ltv-2');
  if (ltv1) ltv1.innerText = formatMoney(12460, 'standard');
  if (ltv2) ltv2.innerText = formatMoney(6800, 'standard');

  // Products
  const p1 = document.getElementById('plan-price-1');
  const p2 = document.getElementById('plan-price-2');
  const p3 = document.getElementById('plan-price-3');
  if (p1) p1.innerHTML = `${formatMoney(890, 'standard')} <span class="text-xs font-sans text-[var(--text-muted)]">/ bulan</span>`;
  if (p2) p2.innerHTML = `${formatMoney(450, 'standard')} <span class="text-xs font-sans text-[var(--text-muted)]">/ bulan</span>`;
  if (p3) p3.innerHTML = `${formatMoney(120, 'standard')} <span class="text-xs font-sans text-[var(--text-muted)]">/ bulan</span>`;

  // Currency button label
  const curBtn = document.getElementById('currency-label');
  if (curBtn) curBtn.innerText = currentCurrency === 'USD' ? 'USD ($)' : 'IDR (Rp)';

  // Update chart timeframes
  applyTimeframe(currentTimeframe);
  renderOrdersTable();
}

// Drawer
function openOrderDrawer(order) {
  const modal = document.getElementById('drawer-modal');
  const box = document.getElementById('drawer-box');

  document.getElementById('drawer-order-id').innerText = `Invoice #${order.id}`;
  document.getElementById('drawer-avatar').innerText = order.name.charAt(0);
  document.getElementById('drawer-customer-name').innerText = order.name;
  document.getElementById('drawer-customer-email').innerText = order.email;
  document.getElementById('drawer-product').innerText = order.plan;
  document.getElementById('drawer-amount').innerText = formatMoney(order.amount);

  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    box.classList.remove('translate-x-full');
  });
}

function closeOrderDrawer() {
  const modal = document.getElementById('drawer-modal');
  const box = document.getElementById('drawer-box');
  modal.classList.add('opacity-0');
  box.classList.add('translate-x-full');
  setTimeout(() => modal.classList.add('hidden'), 250);
}

// Bulk Selection Logic
let selectedOrderIds = new Set();

function attachCheckboxListeners() {
  const selectAll = document.getElementById('select-all-orders');
  const rowCheckboxes = document.querySelectorAll('.order-row-checkbox');

  if (selectAll) {
    selectAll.checked = rowCheckboxes.length > 0 && Array.from(rowCheckboxes).every(cb => selectedOrderIds.has(cb.getAttribute('data-id')));
    selectAll.onchange = (e) => {
      const isChecked = e.target.checked;
      rowCheckboxes.forEach(cb => {
        const id = cb.getAttribute('data-id');
        cb.checked = isChecked;
        if (isChecked) selectedOrderIds.add(id);
        else selectedOrderIds.delete(id);
      });
      updateBulkBar();
    };
  }

  rowCheckboxes.forEach(cb => {
    const id = cb.getAttribute('data-id');
    cb.checked = selectedOrderIds.has(id);
    cb.onchange = (e) => {
      if (e.target.checked) selectedOrderIds.add(id);
      else selectedOrderIds.delete(id);
      if (selectAll) selectAll.checked = Array.from(rowCheckboxes).every(c => selectedOrderIds.has(c.getAttribute('data-id')));
      updateBulkBar();
    };
  });
}

function updateBulkBar() {
  const bar = document.getElementById('floating-bulk-bar');
  const countEl = document.getElementById('bulk-selected-count');
  if (!bar || !countEl) return;

  const count = selectedOrderIds.size;
  countEl.innerText = count;

  if (count > 0) {
    bar.classList.remove('translate-y-28');
  } else {
    bar.classList.add('translate-y-28');
  }
}

// Live Sales Stream
function initLiveSalesStream() {
  const feed = document.getElementById('live-sales-stream');
  if (!feed) return;

  const mockPurchases = [
    { customer: 'Sarah Jenkins', plan: 'Enterprise Cloud Suite', amount: 890, time: '2m lalu' },
    { customer: 'Budi Santoso', plan: 'Pro Developer Plan', amount: 450, time: '4m lalu' },
    { customer: 'Devon Miles', plan: 'Starter Cloud Tier', amount: 120, time: '9m lalu' },
    { customer: 'Liam Henderson', plan: 'Enterprise Cloud Suite', amount: 890, time: '14m lalu' },
    { customer: 'Nadya Putri', plan: 'Pro Developer Plan', amount: 450, time: '21m lalu' },
  ];

  function renderFeed() {
    feed.innerHTML = mockPurchases.map(item => `
      <div class="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-surface-raised)] border border-[var(--border-subtle)] transition-all">
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full bg-slate-800 text-white dark:bg-slate-700 flex items-center justify-center font-bold text-xs">
            ${item.customer.charAt(0)}
          </div>
          <div>
            <div class="font-bold text-[var(--text-primary)]">${item.customer}</div>
            <div class="text-[11px] text-[var(--text-muted)]">Membeli <span class="text-indigo-600 dark:text-indigo-400 font-medium">${item.plan}</span></div>
          </div>
        </div>
        <div class="text-right">
          <div class="font-mono font-bold text-emerald-600 dark:text-emerald-400">${formatMoney(item.amount)}</div>
          <div class="text-[10px] text-[var(--text-muted)]">${item.time}</div>
        </div>
      </div>
    `).join('');
  }

  renderFeed();

  setInterval(() => {
    const names = ['Rian Pratama', 'Evelyn Reed', 'Hiroshi Tanaka', 'Clara Novak', 'Zack Vance'];
    const plans = ['Enterprise Cloud Suite', 'Pro Developer Plan', 'Starter Cloud Tier'];
    const amounts = [890, 450, 120];
    const idx = Math.floor(Math.random() * names.length);

    mockPurchases.unshift({
      customer: names[idx],
      plan: plans[idx % 3],
      amount: amounts[idx % 3],
      time: 'Baru saja'
    });

    if (mockPurchases.length > 7) mockPurchases.pop();
    renderFeed();
  }, 4500);
}

// Apply Timeframe for Chart
function applyTimeframe(tfKey) {
  currentTimeframe = tfKey;
  const ds = timeframeDatasets[tfKey] || timeframeDatasets.harian;

  const subtitle = document.getElementById('chart-subtitle');
  if (subtitle) subtitle.innerText = ds.subtitle;

  const area = document.getElementById('chart-area-fill');
  const lineRev = document.getElementById('chart-line-rev');
  const lineProf = document.getElementById('chart-line-profit');
  if (area) area.setAttribute('d', ds.pathArea);
  if (lineRev) lineRev.setAttribute('d', ds.pathRev);
  if (lineProf) lineProf.setAttribute('d', ds.pathProfit);

  const bottomLabels = document.getElementById('chart-bottom-labels');
  if (bottomLabels) {
    bottomLabels.innerHTML = ds.labels.map((lbl, i) => {
      const isLast = i === ds.labels.length - 1;
      return `<span class="${isLast ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}">${lbl}</span>`;
    }).join('');
  }

  document.querySelectorAll('.btn-timeframe').forEach(btn => {
    if (btn.getAttribute('data-timeframe') === tfKey) {
      btn.className = 'btn-timeframe active px-2.5 py-1 rounded-md bg-indigo-600 text-white font-semibold';
    } else {
      btn.className = 'btn-timeframe px-2.5 py-1 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)]';
    }
  });
}

// Chart Interactive Hover Crosshair & Tooltip
function initChartInspector() {
  const container = document.getElementById('chart-container');
  const tooltip = document.getElementById('chart-tooltip');
  const crosshair = document.getElementById('chart-crosshair');
  const hoverDot = document.getElementById('chart-hover-dot');
  const tDate = document.getElementById('tooltip-date');
  const tRev = document.getElementById('tooltip-rev');
  const tProfit = document.getElementById('tooltip-profit');

  if (!container || !tooltip) return;

  container.addEventListener('mousemove', (e) => {
    const ds = timeframeDatasets[currentTimeframe] || timeframeDatasets.harian;
    const pointsData = ds.points;

    const rect = container.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    
    let closest = pointsData[0];
    let minDiff = 999;
    pointsData.forEach(p => {
      const diff = Math.abs(p.xPct - relX);
      if (diff < minDiff) {
        minDiff = diff;
        closest = p;
      }
    });

    const svgX = closest.xPct * 900;
    const pxX = closest.xPct * rect.width;
    const pxY = (closest.ySvg / 260) * rect.height;

    tooltip.style.left = `${pxX}px`;
    tooltip.style.top = `${pxY}px`;
    tooltip.classList.remove('hidden');

    tDate.innerText = closest.date;
    tRev.innerText = `Gross: ${formatMoney(closest.rev)}`;
    tProfit.innerText = `Net Profit: ${formatMoney(closest.profit)}`;

    if (crosshair && hoverDot) {
      crosshair.setAttribute('x1', svgX);
      crosshair.setAttribute('x2', svgX);
      crosshair.classList.remove('hidden');

      hoverDot.setAttribute('cx', svgX);
      hoverDot.setAttribute('cy', closest.ySvg);
      hoverDot.classList.remove('hidden');
    }
  });

  container.addEventListener('mouseleave', () => {
    tooltip.classList.add('hidden');
    if (crosshair) crosshair.classList.add('hidden');
    if (hoverDot) hoverDot.classList.add('hidden');
  });
}

// Modals
function openCreateModal() {
  const modal = document.getElementById('modal-create-order');
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('.tactile-card').classList.remove('scale-95');
    document.getElementById('order-customer-name').focus();
  });
}

function closeCreateModal() {
  const modal = document.getElementById('modal-create-order');
  modal.classList.add('opacity-0');
  modal.querySelector('.tactile-card').classList.add('scale-95');
  setTimeout(() => modal.classList.add('hidden'), 200);
}

function openCmd() {
  const modal = document.getElementById('cmd-modal');
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    document.getElementById('cmd-card').classList.remove('scale-95');
    document.getElementById('cmd-input').focus();
  });
}

function closeCmd() {
  const modal = document.getElementById('cmd-modal');
  modal.classList.add('opacity-0');
  document.getElementById('cmd-card').classList.add('scale-95');
  setTimeout(() => modal.classList.add('hidden'), 200);
}

function openShortcutsModal() {
  const modal = document.getElementById('shortcuts-modal');
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('.tactile-card').classList.remove('scale-95');
  });
}

function closeShortcutsModal() {
  const modal = document.getElementById('shortcuts-modal');
  modal.classList.add('opacity-0');
  modal.querySelector('.tactile-card').classList.add('scale-95');
  setTimeout(() => modal.classList.add('hidden'), 200);
}

// Edit Package Modal Handlers
function openEditPackageModal(name, price) {
  const modal = document.getElementById('modal-edit-package');
  document.getElementById('edit-pkg-name').value = name;
  document.getElementById('edit-pkg-price').value = price;
  modal.classList.remove('hidden');
  requestAnimationFrame(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('.tactile-card').classList.remove('scale-95');
  });
}

function closeEditPackageModal() {
  const modal = document.getElementById('modal-edit-package');
  modal.classList.add('opacity-0');
  modal.querySelector('.tactile-card').classList.add('scale-95');
  setTimeout(() => modal.classList.add('hidden'), 200);
}

// Export Real CSV File
function downloadCSV() {
  const headers = ['Invoice ID', 'Nama Pelanggan', 'Email', 'Paket', 'Nominal (USD)', 'Status', 'Tanggal'];
  const rows = ordersData.map(o => [
    o.id,
    `"${o.name}"`,
    `"${o.email}"`,
    `"${o.plan}"`,
    o.amount,
    o.status,
    `"${o.date}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `overheat_transactions_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('File CSV laporan transaksi berhasil diunduh!', 'success');
}

// Theme Toggle
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'swiss-light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  localStorage.setItem('overheat-theme', theme);
  
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  
  if (sunIcon && moonIcon) {
    if (theme === 'swiss-light') {
      sunIcon.classList.remove('hidden');
      sunIcon.classList.add('block');
      moonIcon.classList.remove('block');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.remove('block');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
      moonIcon.classList.add('block');
    }
  }

  showToast(`Tema aktif: ${theme === 'obsidian-dark' ? 'Obsidian Dark' : 'Swiss Clean Light'}`, 'info');
}

// Two-Key Chord Navigation Listener (G then D, O, A, etc.)
let lastKeyTime = 0;
let lastKey = '';

document.addEventListener('keydown', (e) => {
  if (['input', 'select', 'textarea'].includes(document.activeElement.tagName.toLowerCase())) return;

  const now = Date.now();
  const k = e.key.toLowerCase();

  // '?' shortcuts cheat-sheet
  if (e.key === '?') {
    openShortcutsModal();
    return;
  }

  // 'u' Currency Switcher
  if (k === 'u') {
    currentCurrency = currentCurrency === 'USD' ? 'IDR' : 'USD';
    updateAllCurrencies();
    showToast(`Mata uang diubah ke: ${currentCurrency}`, 'info');
    return;
  }

  // Two-key navigation chord (G + key)
  if (now - lastKeyTime < 700 && lastKey === 'g') {
    if (k === 'd') navigateToPage('overview');
    if (k === 'a') navigateToPage('analytics');
    if (k === 'o') navigateToPage('orders');
    if (k === 'c') navigateToPage('customers');
    if (k === 'p') navigateToPage('products');
    if (k === 'v') navigateToPage('discounts');
    if (k === 's') navigateToPage('settings');
    lastKey = '';
    return;
  }

  if (k === 'g') {
    lastKey = 'g';
    lastKeyTime = now;
  } else {
    lastKey = '';
  }

  if ((e.metaKey || e.ctrlKey) && k === 'k') {
    e.preventDefault();
    openCmd();
  }

  if (e.key === 'Escape') {
    closeCmd();
    closeCreateModal();
    closeOrderDrawer();
    closeShortcutsModal();
    closeEditPackageModal();
  }
});

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('overheat-theme') || 'obsidian-dark';
  setTheme(savedTheme);

  const currentHash = window.location.hash.replace('#', '') || 'overview';
  navigateToPage(currentHash);

  document.querySelectorAll('#sidebar-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToPage(link.getAttribute('data-page'));
    });
  });

  // Profile Dropdown Popover
  const btnProfile = document.getElementById('btn-profile-dropdown');
  const profilePopover = document.getElementById('profile-popover');
  if (btnProfile && profilePopover) {
    btnProfile.addEventListener('click', (e) => {
      // If clicking shortcuts button or theme toggle, do not toggle profile
      if (e.target.closest('#btn-open-shortcuts') || e.target.closest('#sidebar-theme-toggle')) return;
      e.stopPropagation();
      profilePopover.classList.toggle('hidden');
    });

    document.querySelectorAll('.profile-menu-item').forEach(item => {
      item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        profilePopover.classList.add('hidden');
        if (action === 'settings' || action === 'api') {
          navigateToPage('settings');
        } else if (action === 'logs') {
          showToast('Audit log aktif: 0 anomali keamanan terdeteksi.', 'success');
        }
      });
    });

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        profilePopover.classList.add('hidden');
        showToast('Sesi akun Habibullah berhasil di-logout.', 'info');
      });
    }

    document.addEventListener('click', (e) => {
      if (!profilePopover.contains(e.target) && !btnProfile.contains(e.target)) {
        profilePopover.classList.add('hidden');
      }
    });
  }

  // Timeframe Buttons Click Listeners
  document.querySelectorAll('.btn-timeframe').forEach(btn => {
    btn.addEventListener('click', () => {
      const tf = btn.getAttribute('data-timeframe');
      applyTimeframe(tf);
      showToast(`Periode grafik diubah ke: ${tf.toUpperCase()}`, 'info');
    });
  });

  // Workspace Switcher Dropdown
  const btnWorkspace = document.getElementById('btn-workspace-dropdown');
  const workspaceMenu = document.getElementById('workspace-menu');
  const workspaceChevron = document.getElementById('workspace-chevron');

  if (btnWorkspace && workspaceMenu) {
    btnWorkspace.addEventListener('click', (e) => {
      e.stopPropagation();
      workspaceMenu.classList.toggle('hidden');
      if (workspaceChevron) workspaceChevron.classList.toggle('rotate-180');
    });

    document.querySelectorAll('.workspace-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const name = opt.getAttribute('data-name');
        const region = opt.getAttribute('data-region');
        document.getElementById('current-workspace-name').innerText = name;
        document.getElementById('current-workspace-region').innerText = region;
        workspaceMenu.classList.add('hidden');
        if (workspaceChevron) workspaceChevron.classList.remove('rotate-180');
        showToast(`Beralih ke workspace: ${name}`, 'success');
      });
    });

    document.addEventListener('click', () => {
      workspaceMenu.classList.add('hidden');
      if (workspaceChevron) workspaceChevron.classList.remove('rotate-180');
    });
  }

  // 1-Click Component Code Copy (Shadcn Style)
  document.querySelectorAll('.btn-copy-component').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const snippetKey = e.currentTarget.getAttribute('data-snippet');
      const code = uiSnippets[snippetKey];
      if (code) {
        navigator.clipboard.writeText(code);
        showToast(`Kode komponen "${snippetKey.toUpperCase()}" disalin ke clipboard!`, 'success');
      }
    });
  });

  // Edit Package Buttons
  document.querySelectorAll('#page-products button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.tactile-card');
      if (card) {
        const title = card.querySelector('h3') ? card.querySelector('h3').innerText : 'Paket';
        openEditPackageModal(title, title.includes('Enterprise') ? 890 : title.includes('Pro') ? 450 : 120);
      }
    });
  });

  const btnCloseEditPkg = document.getElementById('btn-close-edit-pkg');
  if (btnCloseEditPkg) btnCloseEditPkg.addEventListener('click', closeEditPackageModal);

  const btnCancelEditPkg = document.getElementById('btn-cancel-edit-pkg');
  if (btnCancelEditPkg) btnCancelEditPkg.addEventListener('click', closeEditPackageModal);

  const formEditPkg = document.getElementById('form-edit-package');
  if (formEditPkg) {
    formEditPkg.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('edit-pkg-name').value;
      const price = document.getElementById('edit-pkg-price').value;
      closeEditPackageModal();
      showToast(`Paket "${name}" berhasil diperbarui menjadi $${price}/bulan!`, 'success');
    });
  }

  // Voucher Cards Copy
  document.querySelectorAll('#page-discounts .tactile-card').forEach(card => {
    card.classList.add('cursor-pointer', 'hover:border-indigo-500/40');
    card.addEventListener('click', () => {
      const code = card.querySelector('.font-mono') ? card.querySelector('.font-mono').innerText : 'OVERHEAT50';
      navigator.clipboard.writeText(code);
      showToast(`Kode voucher "${code}" berhasil disalin ke clipboard!`, 'success');
    });
  });

  // Customer Profile Actions
  document.querySelectorAll('#page-customers button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const row = e.currentTarget.closest('tr');
      const name = row.querySelector('.font-bold').innerText;
      showToast(`Membuka profil & riwayat transaksi ${name}...`, 'info');
    });
  });

  // Settings Save Form
  document.querySelectorAll('#page-settings button').forEach(btn => {
    if (btn.innerText.includes('Simpan')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const inputStore = document.querySelector('#page-settings input[type="text"]');
        if (inputStore && inputStore.value) {
          document.getElementById('current-workspace-name').innerText = inputStore.value;
          showToast(`Pengaturan toko "${inputStore.value}" berhasil disimpan!`, 'success');
        }
      });
    }
  });

  // Search input
  const searchInput = document.getElementById('orders-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase();
      renderOrdersTable();
    });
  }

  // Filters
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab-btn').forEach(b => {
        b.classList.remove('active', 'bg-indigo-600', 'text-white');
        b.classList.add('text-[var(--text-muted)]');
      });
      btn.classList.add('active', 'bg-indigo-600', 'text-white');
      btn.classList.remove('text-[var(--text-muted)]');

      activeFilter = btn.getAttribute('data-filter');
      renderOrdersTable();
    });
  });

  // Currency Toggle Button
  const curToggle = document.getElementById('btn-currency-toggle');
  if (curToggle) {
    curToggle.addEventListener('click', () => {
      currentCurrency = currentCurrency === 'USD' ? 'IDR' : 'USD';
      updateAllCurrencies();
      showToast(`Mata uang: ${currentCurrency}`, 'info');
    });
  }

  // Table Density Toggle
  const densityBtn = document.getElementById('btn-density-toggle');
  const densityLabel = document.getElementById('density-label');
  const ordersTable = document.getElementById('main-orders-table');
  if (densityBtn && ordersTable) {
    densityBtn.addEventListener('click', () => {
      isTableCompact = !isTableCompact;
      if (isTableCompact) {
        ordersTable.classList.add('table-compact');
        if (densityLabel) densityLabel.innerText = 'Compact';
      } else {
        ordersTable.classList.remove('table-compact');
        if (densityLabel) densityLabel.innerText = 'Comfort';
      }
      showToast(`Kerapatan tabel: ${isTableCompact ? 'Compact' : 'Comfortable'}`, 'info');
    });
  }

  // Sync Data Shimmer Loader
  const syncBtn = document.getElementById('btn-sync-data');
  const syncIcon = document.getElementById('sync-icon');
  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      if (syncIcon) syncIcon.classList.add('animate-spin');
      
      const cards = document.querySelectorAll('#kpi-grid .tactile-card');
      cards.forEach(c => c.classList.add('skeleton-loading'));

      setTimeout(() => {
        if (syncIcon) syncIcon.classList.remove('animate-spin');
        cards.forEach(c => c.classList.remove('skeleton-loading'));
        updateAllCurrencies();
        showToast('Data analitik dan transaksi tersinkronisasi 100%!', 'success');
      }, 450);
    });
  }

  // Shortcuts Modal
  const btnOpenShortcuts = document.getElementById('btn-open-shortcuts');
  if (btnOpenShortcuts) btnOpenShortcuts.addEventListener('click', openShortcutsModal);

  const btnCloseShortcuts = document.getElementById('btn-close-shortcuts');
  if (btnCloseShortcuts) btnCloseShortcuts.addEventListener('click', closeShortcutsModal);

  // Modals & Order Form
  const btnAddOrder = document.getElementById('btn-add-order');
  if (btnAddOrder) btnAddOrder.addEventListener('click', openCreateModal);

  const btnCloseModal = document.getElementById('btn-close-modal');
  if (btnCloseModal) btnCloseModal.addEventListener('click', closeCreateModal);

  const btnCancelModal = document.getElementById('btn-cancel-modal');
  if (btnCancelModal) btnCancelModal.addEventListener('click', closeCreateModal);

  const formOrder = document.getElementById('form-new-order');
  if (formOrder) {
    formOrder.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('order-customer-name').value;
      const email = document.getElementById('order-customer-email').value;
      const plan = document.getElementById('order-plan').value;
      const amount = parseFloat(document.getElementById('order-amount').value) || 890;

      const newOrder = {
        id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
        name: name,
        email: email,
        plan: plan,
        amount: amount,
        status: 'PAID',
        date: 'Baru saja'
      };

      ordersData.unshift(newOrder);
      renderOrdersTable();
      closeCreateModal();
      formOrder.reset();
      showToast(`Pesanan #${newOrder.id} untuk ${name} berhasil diterbitkan!`, 'success');
    });
  }

  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeOrderDrawer);

  const drawerModal = document.getElementById('drawer-modal');
  if (drawerModal) {
    drawerModal.addEventListener('click', (e) => {
      if (e.target === drawerModal) closeOrderDrawer();
    });
  }

  // Real Print Receipt
  const btnPrintReceipt = document.getElementById('btn-print-receipt');
  if (btnPrintReceipt) {
    btnPrintReceipt.addEventListener('click', () => {
      window.print();
    });
  }

  const searchBtn = document.getElementById('btn-open-search');
  if (searchBtn) searchBtn.addEventListener('click', openCmd);

  const cmdModal = document.getElementById('cmd-modal');
  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) closeCmd();
    });
  }

  document.querySelectorAll('.cmd-row').forEach(row => {
    row.addEventListener('click', () => {
      const nav = row.getAttribute('data-nav');
      if (nav) navigateToPage(nav);
      closeCmd();
    });
  });

  const themeToggle = document.getElementById('sidebar-theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'obsidian-dark' ? 'swiss-light' : 'obsidian-dark');
    });
  }

  // Real Export CSV Button
  const btnExport = document.getElementById('btn-export-csv');
  if (btnExport) {
    btnExport.addEventListener('click', downloadCSV);
  }

  // Notifications Popover Toggle
  const btnNotif = document.getElementById('btn-notifications');
  const notifPopover = document.getElementById('notifications-popover');
  if (btnNotif && notifPopover) {
    btnNotif.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPopover.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!notifPopover.contains(e.target) && !btnNotif.contains(e.target)) {
        notifPopover.classList.add('hidden');
      }
    });
  }

  // Mobile Sidebar Drawer
  const btnOpenMobileSidebar = document.getElementById('btn-open-mobile-sidebar');
  const btnCloseMobileSidebar = document.getElementById('btn-close-mobile-sidebar');
  const mobileBackdrop = document.getElementById('mobile-sidebar-backdrop');
  const sidebar = document.getElementById('sidebar');

  function openMobileSidebar() {
    if (sidebar && mobileBackdrop) {
      sidebar.classList.remove('-translate-x-full');
      mobileBackdrop.classList.remove('hidden');
      requestAnimationFrame(() => mobileBackdrop.classList.remove('opacity-0'));
    }
  }

  function closeMobileSidebar() {
    if (sidebar && mobileBackdrop) {
      sidebar.classList.add('-translate-x-full');
      mobileBackdrop.classList.add('opacity-0');
      setTimeout(() => mobileBackdrop.classList.add('hidden'), 300);
    }
  }

  if (btnOpenMobileSidebar) btnOpenMobileSidebar.addEventListener('click', openMobileSidebar);
  if (btnCloseMobileSidebar) btnCloseMobileSidebar.addEventListener('click', closeMobileSidebar);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileSidebar);

  // Auto-close sidebar on mobile when a link is clicked
  document.querySelectorAll('#sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) closeMobileSidebar();
    });
  });

  // Announcement Banner Close
  const btnCloseAnnounce = document.getElementById('btn-close-announcement');
  const announceBanner = document.getElementById('system-announcement-banner');
  if (btnCloseAnnounce && announceBanner) {
    btnCloseAnnounce.addEventListener('click', () => {
      announceBanner.classList.add('-translate-y-full', 'opacity-0');
      setTimeout(() => announceBanner.remove(), 300);
    });
  }

  // Floating Bulk Action Buttons
  const btnBulkPaid = document.getElementById('btn-bulk-mark-paid');
  const btnBulkExport = document.getElementById('btn-bulk-export');
  const btnBulkDelete = document.getElementById('btn-bulk-delete');
  const btnBulkCancel = document.getElementById('btn-bulk-cancel');

  if (btnBulkPaid) {
    btnBulkPaid.addEventListener('click', () => {
      let count = 0;
      ordersData.forEach(order => {
        if (selectedOrderIds.has(order.id)) {
          order.status = 'PAID';
          count++;
        }
      });
      selectedOrderIds.clear();
      renderOrdersTable();
      updateBulkBar();
      showToast(`${count} transaksi berhasil ditandai LUNAS!`, 'success');
    });
  }

  if (btnBulkExport) {
    btnBulkExport.addEventListener('click', () => {
      const selectedOrders = ordersData.filter(o => selectedOrderIds.has(o.id));
      if (selectedOrders.length === 0) return;
      let csvContent = "Invoice ID,Customer Name,Customer Email,Plan,Amount (USD),Status,Date\n";
      selectedOrders.forEach(row => {
        csvContent += `"${row.id}","${row.name}","${row.email}","${row.plan}",${row.amount},"${row.status}","${row.date}"\n`;
      });
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `overheat_selected_orders_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast(`Mengekspor ${selectedOrders.length} data terpilih ke CSV!`, 'success');
    });
  }

  if (btnBulkDelete) {
    btnBulkDelete.addEventListener('click', () => {
      const count = selectedOrderIds.size;
      if (confirm(`Yakin ingin menghapus ${count} data transaksi terpilih?`)) {
        ordersData = ordersData.filter(o => !selectedOrderIds.has(o.id));
        selectedOrderIds.clear();
        renderOrdersTable();
        updateBulkBar();
        showToast(`${count} transaksi telah dihapus dari sistem.`, 'error');
      }
    });
  }

  if (btnBulkCancel) {
    btnBulkCancel.addEventListener('click', () => {
      selectedOrderIds.clear();
      renderOrdersTable();
      updateBulkBar();
    });
  }

  // Initialize
  updateAllCurrencies();
  initLiveSalesStream();
  initChartInspector();
});
