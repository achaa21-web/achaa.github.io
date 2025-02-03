// Array untuk menyimpan produk yang ditambahkan ke keranjang
let cart = [];

// Fungsi untuk menambahkan produk ke keranjang
function addToCart(product) {
    cart.push(product);
    alert(`${product.name} telah ditambahkan ke keranjang!`);
}

// Menangani klik pada tombol "Add to Cart"
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil semua tombol "Add to Cart"
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.card');
            const productName = productCard.querySelector('.card-title').innerText;
            const productPrice = productCard.querySelector('.card-text').innerText;

            // Membuat objek produk
            const product = {
                name: productName,
                price: productPrice
            };

            // Menambahkan produk ke keranjang
            addToCart(product);
        });
    });
});