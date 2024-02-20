// script.js

let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear the current cart items
    cartList.innerHTML = '';

    // Populate the cart with the updated items
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Rs. ${item.price}`;
        cartList.appendChild(listItem);
    });

    // Calculate and display the total price
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
    cartTotal.textContent = `Rs. ${total.toFixed(2)}`;
}

function checkout() {
    // For simplicity, just alert the total price
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
    alert(`Total: Rs. ${total.toFixed(2)}\nThank you for shopping with 500finds!`);
    window.location.href='confirmation.html'
    // Clear the cart after checkout
    cartItems = [];
    updateCart();
}
