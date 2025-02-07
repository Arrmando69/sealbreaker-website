// Cart System
let cart = [];
document.getElementById("buy-now").addEventListener("click", function() {
    cart.push("Seal Breaker");
    updateCart();
});

function updateCart() {
    document.getElementById("cart-count").textContent = cart.length;
}

function openCart() {
    let cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "block";
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cartItems.appendChild(li);
    });
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function checkout() {
    alert("Checkout feature coming soon!");
}

// Pre-Order Form Submission
document.getElementById("preorder-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (name && email) {
        document.getElementById("form-message").textContent = "Thank you! We will contact you soon.";
        document.getElementById("preorder-form").reset();
    }
});
