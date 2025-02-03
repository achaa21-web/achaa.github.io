// Menunggu hingga dokumen sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        // Mengambil nilai dari input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validasi sederhana
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Tampilkan pesan konfirmasi
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Reset formulir setelah pengiriman
        form.reset();
    });
});