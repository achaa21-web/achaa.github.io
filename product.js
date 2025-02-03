// Menunggu hingga dokumen sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil semua tombol "Add to Cart"
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    // Menambahkan event listener untuk setiap tombol
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mendapatkan data produk dari atribut data
            const productTitle = this.getAttribute('data-title');
            const productPrice = this.getAttribute('data-price');
            const productImage = this.getAttribute('data-image');

            // Membuat objek produk
            const product = {
                title: productTitle,
                price: productPrice,
                image: productImage
            };

            // Mendapatkan keranjang dari localStorage atau membuat array baru
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Menambahkan produk ke keranjang
            cart.push(product);

            // Menyimpan kembali ke localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Menampilkan pesan
            alert(`${productTitle} telah ditambahkan ke keranjang!`);
        });
    });
});