document.addEventListener('DOMContentLoaded', function () {
    // Mengambil elemen menu
    const biodataLink = document.getElementById('biodata_dashboard-link');
    const riwayatLink = document.getElementById('riwayathidup_dashboard-link');
    const prestasiLink = document.getElementById('prestasi_dashboard-link');
    const visiMisiLink = document.getElementById('visimisi_dashboard-link');
    const hobiMinatLink = document.getElementById('hobiminat_dashboard-link');
    const projectLink = document.getElementById('project_dashboard-link'); // Ambil elemen link Proyek
    const sosialmediaLink = document.getElementById('sosialmedia_dashboard-link'); // Ambil elemen link Sosial Media

    // Cek apakah elemen ditemukan sebelum menambahkan event listener
    if (biodataLink) {
        biodataLink.addEventListener('click', function () {
            window.location.href = 'biodata_dashboard.html';  // Arahkan ke halaman biodata_dashboard.html
        });
    }

    if (riwayatLink) {
        riwayatLink.addEventListener('click', function () {
            window.location.href = 'riwayathidup_dashboard.html';  // Arahkan ke halaman riwayathidup_dashboard.html
        });
    }

    if (prestasiLink) {
        prestasiLink.addEventListener('click', function () {
            window.location.href = 'prestasi_dashboard.html';  // Arahkan ke halaman prestasi_dashboard.html
        });
    }

    if (visiMisiLink) {
        visiMisiLink.addEventListener('click', function () {
            window.location.href = 'visimisi_dashboard.html';  // Arahkan ke halaman visimisi_dashboard.html
        });
    }

    if (hobiMinatLink) {
        hobiMinatLink.addEventListener('click', function () {
            window.location.href = 'hobiminat_dashboard.html';  // Arahkan ke halaman hobiminat_dashboard.html
        });
    }

    if (projectLink) {
        projectLink.addEventListener('click', function () {
            window.location.href = 'project_dashboard.html';  // Arahkan ke halaman project_dashboard.html
        });
    }

    if (sosialmediaLink) {
        sosialmediaLink.addEventListener('click', function () {
            window.location.href = 'sosialmedia_dashboard.html';  // Arahkan ke halaman sosialmedia_dashboard.html
        });
    }
});
