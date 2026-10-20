// Mengambil elemen tombol berdasarkan ID 'sapaButton'
const tombolSapa = document.getElementById('sapaButton');

// Memastikan tombol ditemukan di halaman sebelum menjalankan fungsi (mencegah error)
if (tombolSapa) {
    // Menambahkan aksi saat tombol diklik oleh pengguna
    tombolSapa.addEventListener('click', function () {
        // Memunculkan jendela notifikasi pop-up (alert)
        alert('Halo! Terima Kasih sudah berkunjung!');
    });
}
