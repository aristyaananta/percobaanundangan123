document.addEventListener("DOMContentLoaded", function () {
    // Ambil seluruh path setelah domain
    let path = window.location.pathname;
    let segments = path.split('/').filter(segment => segment !== ""); // Hapus slash kosong

    // Jika ada lebih dari satu segmen, ambil segmen terakhir sebagai nama tamu
    if (segments.length > 1) {
        let namaTamu = segments[segments.length - 1]; // Ambil nama terakhir
        localStorage.setItem("namaTamu", namaTamu);
        window.location.href = "/"; // Redirect ke halaman utama
    }

    // Cek apakah ada data di localStorage
    let nama = localStorage.getItem("namaTamu");
    if (nama) {
        document.getElementById("nama-tamu").textContent = nama;
        localStorage.removeItem("namaTamu"); // Hapus setelah digunakan
    }
});
