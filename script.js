document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling untuk tombol/link dengan hash (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default jump

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Membuat scroll menjadi halus
            });
        });
});
    // Opsional: Anda bisa menambahkan efek animasi saat scroll (misal fade-in)
    // dengan library seperti AOS (Animate On Scroll) atau custom JS jika mau
    // Namun untuk desain minimalis dan tidak norak, smooth scroll sudah cukup.
}); // Pastikan ini adalah baris terakhir dari kode yang tidak dikomentari