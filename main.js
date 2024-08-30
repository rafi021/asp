document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            alert(`Product ${productId} added to cart!`);
            // Logic to handle adding the product to the cart goes here.
        });
    });
});
