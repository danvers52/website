document.addEventListener('DOMContentLoaded', function() {
    const allAddToCartButtons = document.querySelectorAll('.btn');

    allAddToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log("Add to Cart was clicked!", this.dataset.productId);

            const productId = this.dataset.productId;
            const productName = this.dataset.productName;
            const productPrice = parseFloat(this.dataset.productPrice);

            console.log("Product info:", {productId, productName, productPrice});

            if (typeof window.addItemToCart === 'function') {
                window.addItemToCart(productId, productName, productPrice);
                console.log("addItemToCart is defined and called");
            } else {
                console.error("addItemToCart function not found. Is cart.js loaded correctly?");
            }
        });
    });

    if (typeof window.updateCartIconCount === 'function') {
        window.updateCartIconCount();
    } else {
        console.warn("updateCartIconCount is not defined.");
    }
});