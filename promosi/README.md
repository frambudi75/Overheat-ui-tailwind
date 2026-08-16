# 🌐 Panduan Deploy Web Promosi OVERHEAT UI

Folder ini berisi website promosi / landing page resmi untuk **OVERHEAT UI** yang siap di-deploy langsung ke **aaPanel** atau menggunakan **Docker**.

---

## 🚀 Opsi 1: Deploy di aaPanel (Nginx / Apache)

Website promosi ini berupa file HTML mandiri (*standalone*) dengan Tailwind CSS CDN & font Google terintegrasi, sehingga **tidak memerlukan build Node.js tambahan** di server aaPanel.

### Langkah-langkah:
1. Buka dashboard **aaPanel** Anda.
2. Masuk ke menu **Website ➔ Add Site**.
3. Masukkan domain Anda (misal: `overheat.id` atau `promo.overheat.id`).
4. Buka **Document Root** domain tersebut (biasanya di `/www/wwwroot/domain-anda/`).
5. Upload seluruh isi folder `promosi/` ini (`index.html`, `nginx.conf`, dll) ke direktori tersebut.
6. Aktifkan **SSL (Let's Encrypt)** di menu *SSL* aaPanel.
7. **Selesai!** Website promosi langsung aktif dan dapat diakses publik.

---

## 🐳 Opsi 2: Deploy Menggunakan Docker & Docker Compose

Tersedia konfigurasi Docker berbasis image `nginx:alpine` yang sangat ringan (< 25MB RAM).

### 1. Menjalankan dengan Docker Compose:
```bash
cd promosi
docker compose up -d --build
```
Aplikasi akan berjalan otomatis di background pada port **`8080`**.

### 2. Cek Status Container:
```bash
docker ps
```

### 3. Hentikan Container:
```bash
docker compose down
```

---

## 📄 File di Folder Ini:
* `index.html`: Halaman utama landing page promosi (Fitur, Komponen, Live Demo Link, Git Clone Box).
* `Dockerfile`: Konfigurasi container Nginx Alpine.
* `nginx.conf`: Konfigurasi web server Nginx dengan Gzip compression & static asset caching.
* `docker-compose.yml`: Skrip orkestrasi deploy 1-klik di server VPS.
