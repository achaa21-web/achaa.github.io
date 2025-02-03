// Array untuk menyimpan video yang ditambahkan ke keranjang
let cart = [];

// Fungsi untuk menambahkan video ke keranjang
function addToCart(videoTitle) {
    cart.push(videoTitle);
    alert(`${videoTitle} telah ditambahkan ke keranjang!`);
}

// Menangani klik pada tombol "Add to Cart" (jika ada di masa depan)
document.addEventListener('DOMContentLoaded', function() {
    // Misalkan Anda memiliki tombol untuk menambahkan video ke keranjang
    const addToCartButton = document.createElement('button');
    addToCartButton.innerText = 'Add Video to Cart';
    addToCartButton.style.marginTop = '20px';
    addToCartButton.style.padding = '10px 20px';
    addToCartButton.style.backgroundColor = '#007bff';
    addToCartButton.style.color = 'white';
    addToCartButton.style.border = 'none';
    addToCartButton.style.borderRadius = '5px';
    addToCartButton.style.cursor = 'pointer';

    // Menambahkan tombol ke dalam div video
    const videoSection = document.querySelector('div'); // Mengambil div video section
    videoSection.appendChild(addToCartButton);

    // Menambahkan event listener untuk tombol
    addToCartButton.addEventListener('click', function() {
        addToCart('Product Video'); // Menambahkan video ke keranjang
    });
});