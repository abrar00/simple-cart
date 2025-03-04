// Products List
const products = [
    { id: 1, name: "Laptop", price: 5000 },
    { id: 2, name: "Smartphone", price: 2000 },
    { id: 3, name: "Headphones", price: 300 },
    { id: 4, name: "Keyboard", price: 150 },
    { id: 5, name: "Mouse", price: 80 }
];

// Cart Items (Object quantity will be track)
let cart = {};

// Function to display products
function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `${product.name} - $${product.price} 
            <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productList.appendChild(li);
    });
}

// Function to display cart items
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    
    cartItems.innerHTML = "";
    let total = 0;

    Object.values(cart).forEach(product => {
        total += product.price * product.quantity;
        const li = document.createElement("li");
        li.innerHTML = `${product.name} - $${product.price} 
            (x${product.quantity}) 
            <button onclick="removeFromCart(${product.id})">Remove</button>`;
        cartItems.appendChild(li);
    });

    // Update total price
    totalPriceElement.innerText = `Total: $${total}`;
}

// Function to add product to cart (Unlimite)
function addToCart(id) {
    const product = products.find(p => p.id === id);
    
    if (cart[id]) {
        cart[id].quantity += 1;
    } else {
        cart[id] = { ...product, quantity: 1 };
    }
    
    displayCart();
}

// Function to remove product from cart
function removeFromCart(id) {
    if (cart[id]) {
        if (cart[id].quantity > 1) {
            cart[id].quantity -= 1;
        } else {
            delete cart[id];
        }
    }
    displayCart();
}

// Initialize Product List
displayProducts();
