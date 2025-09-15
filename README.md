# Netflix Clone Website

Sebuah website responsif yang meniru desain dan fungsionalitas Netflix, dibangun dengan HTML, CSS, dan JavaScript murni.

## 🚀 Fitur

- **Desain Responsif**: Berfungsi sempurna di desktop, tablet, dan mobile
- **Header Transparan**: Header yang berubah saat di-scroll
- **Hero Section**: Bagian utama dengan call-to-action
- **Carousel Film**: Navigasi film dengan tombol prev/next
- **Menu Mobile**: Navigasi hamburger untuk perangkat mobile
- **Pencarian Real-time**: Fitur pencarian film
- **Modal Film**: Detail film saat diklik
- **Animasi Smooth**: Transisi dan animasi yang halus
- **Aksesibilitas**: Mendukung keyboard navigation dan screen reader

## 🛠️ Teknologi

- **HTML5**: Struktur semantik dan aksesibilitas
- **CSS3**: 
  - CSS Grid dan Flexbox untuk layout
  - CSS Variables untuk theming
  - Media queries untuk responsivitas
  - Animasi dan transisi CSS
- **JavaScript ES6+**:
  - Class-based architecture
  - Event handling
  - DOM manipulation
  - Carousel functionality

## 📱 Responsivitas

Website ini menggunakan pendekatan mobile-first dan mendukung:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎨 Desain

- **Warna**: Menggunakan palet warna Netflix asli
- **Typography**: Font Inter untuk keterbacaan yang baik
- **Spacing**: Sistem spacing yang konsisten
- **Shadows**: Efek bayangan untuk depth

## 📁 Struktur File

```
netflix-clone/
├── index.html          # File HTML utama
├── css/
│   └── styles.css      # Stylesheet utama
├── js/
│   └── app.js         # JavaScript functionality
├── assets/             # Folder untuk gambar dan media
└── README.md           # Dokumentasi proyek
```

## 🚀 Cara Menjalankan

1. **Clone atau download** proyek ini
2. **Buka folder** `netflix-clone`
3. **Double-click** file `index.html` atau buka dengan browser
4. **Atau gunakan live server**:
   ```bash
   # Jika menggunakan VS Code
   # Install extension "Live Server"
   # Right-click index.html -> "Open with Live Server"
   ```

## 🔧 Kustomisasi

### Mengubah Warna
Edit variabel CSS di `css/styles.css`:
```css
:root {
  --netflix-red: #e50914;
  --netflix-black: #000000;
  /* ... */
}
```

### Menambah Film
Edit array `sampleMovies` di `js/app.js`:
```javascript
const sampleMovies = [
  {
    title: 'Judul Film',
    year: '2024',
    rating: 'TV-14',
    image: 'path/to/image.jpg'
  }
  // ...
];
```

### Mengubah Layout
Edit CSS classes di `css/styles.css` untuk mengubah spacing, ukuran, atau layout.

## 📱 Fitur Mobile

- **Hamburger Menu**: Menu navigasi yang bisa di-toggle
- **Touch-friendly**: Tombol dan elemen yang mudah disentuh
- **Responsive Images**: Gambar yang menyesuaikan ukuran layar
- **Mobile Navigation**: Navigasi yang dioptimalkan untuk mobile

## 🎯 Aksesibilitas

- **Semantic HTML**: Struktur yang bermakna
- **ARIA Labels**: Label untuk screen reader
- **Keyboard Navigation**: Bisa dioperasikan dengan keyboard
- **Focus States**: Indikator fokus yang jelas
- **Color Contrast**: Kontras warna yang memadai

## 🌟 Fitur JavaScript

### Carousel Navigation
- Tombol prev/next untuk navigasi film
- Smooth scrolling animation
- Responsive button states

### Mobile Menu
- Toggle menu dengan animasi
- Close menu saat klik di luar
- Keyboard accessibility

### Search Functionality
- Real-time search
- Filter film berdasarkan judul
- Responsive search results

### Interactive Elements
- Hover effects pada film cards
- Click events untuk detail film
- Smooth scrolling navigation

## 🔍 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Lisensi

Proyek ini dibuat untuk tujuan edukasi dan demonstrasi. Desain Netflix adalah trademark dari Netflix, Inc.

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan:
1. Fork proyek ini
2. Buat branch fitur baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

## 📞 Support

Jika ada pertanyaan atau masalah:
- Buat issue di repository
- Atau hubungi developer

---

**Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript**
