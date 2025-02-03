// Menunggu hingga dokumen sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan keranjang dari localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    // Menampilkan produk di keranjang
    if (cart.length > 0) {
        cart.forEach((product, index) => {
            const productCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.price}</p>
                            <button class="btn btn-danger btn-remove" data-index="${index}">Remove</button>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.innerHTML += productCard;
        });
    } else {
        // Tampilkan pesan jika keranjang kosong
        emptyCartMessage.style.display = 'block';
    }

    // Menangani klik pada tombol "Remove"
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cart.splice(index, 1); // Menghapus produk dari array
            localStorage.setItem('cart', JSON.stringify(cart)); // Memperbarui localStorage
            location.reload(); // Memuat ulang halaman untuk memperbarui tampilan
        });
    });
});