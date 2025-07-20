   let cartItemsContainer;
   let cartTotalElement;
   let checkoutButton;
   let cartIconCountElement;
   
   //@param {string} messageText - message to display
    //@param {number} duration 
    function showNotification(message) {
        const notificationMessage = document.getElementById('notification-message');
        if (!notificationMessage) return;
        notificationMessage.innerHTML = message;
        notificationMessage.style.display = 'block';
        setTimeout(() => {
            notificationMessage.style.opacity = 1;
        }, 10);
        setTimeout(() => {
            hideNotification();
        }, 3000);
    }

    function hideNotification() {
        const notificationMessage = document.getElementById('notification-message');
        if (!notificationMessage) return;
        notificationMessage.style.opacity = 0;
        setTimeout(() => {
            notificationMessage.style.display = 'none';
        }, 500);
    }
    
    // @param {string} id - productId,
    // @param {string} name - productName,
    // @param {number} price - productPrice

    function addItemToCart(id, name, price) {
        console.log("addItemToCart called with:", id, name, price);
        let cart = getCart();
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({id, name, price, quantity: 1});
        }

        saveCart(cart);
        updateCartIconCount(cart);
        displayCart();
        showNotification(`${name} added to cart!`);
    }

   // @param {Array} [currentCart] - current cart array. If not it will fetch from localStorage
    function updateCartIconCount(currentCart) {
        if (!cartIconCountElement) return;
        const cart = currentCart || getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartIconCountElement.textContent = totalItems > 0 ? `(${totalItems})` : '';
    }

    function getCart() {
        try {
            return JSON.parse(localStorage.getItem('cart')) || [];
        } catch (error) {
            console.error("Error parsing cart from localStorage:", error);
            return [];
        }
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("Cart saved:", cart);
    }

    function displayCart() {
        const cart = getCart();
        if (!cartItemsContainer || !cartTotalElement || !checkoutButton) {
            console.error("Cart DOM elements not initialized.");
            return;
        }

        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotalElement.textContent = 'R 0.00';
            checkoutButton.disabled = true;
            updateCartIconCount(cart);
            return;
        }

        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.dataset.productId = item.id;

            cartItemDiv.innerHTML = 
                `<img src="assests/${item.id}.png" alt="${item.name}" class="cart-item-img">
                <div class="item-details">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">R ${item.price.toFixed(2)}</span>
                    <div class="quantity-controls">
                        <button class="quantity-decrease-btn" data-product-id="${item.id}">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="quantity-increase-btn" data-product-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" data-product-id="${item.id}">Remove</button>`;
            
            cartItemsContainer.appendChild(cartItemDiv);
        });

        cartTotalElement.textContent = `R ${total.toFixed(2)}`;
        checkoutButton.disabled = false;
        updateCartIconCount(cart);
    }

    function updateQuantity(productId, change) {
        let cart = getCart();
        const itemIndex = cart.findIndex(item => item.id === productId);

        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }
            saveCart(cart);
            displayCart();
        }
    }

    function removeItem(productId) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== productId);
        saveCart(cart);
        displayCart();
        updateCartIconCount();
    }

document.addEventListener('DOMContentLoaded', () => {
    cartItemsContainer = document.querySelector('.cart-items-container');
    cartTotalElement = document.getElementById('cart-total');
    checkoutButton = document.getElementById('checkout-btn');
    cartIconCountElement = document.getElementById('cartIconCount');

    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (event) => {
            const target = event.target;
            const productId = target.dataset.productId;
            if (!productId) return;

            if (target.classList.contains('quantity-increase-btn')) {
                updateQuantity(productId, 1);
            } else if (target.classList.contains('quantity-decrease-btn')) {
                updateQuantity(productId, -1);
            } else if (target.classList.contains('remove-item-btn')) {
                removeItem(productId);
            }
        });
    }
    displayCart();
    updateCartIconCount();
});

window.addItemToCart = addItemToCart;
window.updateCartIconCount = updateCartIconCount;