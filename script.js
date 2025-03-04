document.addEventListener("DOMContentLoaded", function () {
    // Ambil parameter dari URL
    const params = new URLSearchParams(window.location.search);
    let namaTamu = params.get("nama"); // Ambil nilai parameter "nama"

    // Jika ada nama tamu, tampilkan di halaman
    if (namaTamu) {
        document.getElementById("nama-tamu").textContent = namaTamu;
    }
});
