// =========================
// CART VARIABLES
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

// =========================
// ADD TO CART
// =========================

function addToCart(productName, productPrice) {

    const item = {
        name: productName,
        price: productPrice
    };

    cart.push(item);

    saveCart();

    updateCart();

    alert(productName + " added to cart!");
}

// =========================
// SAVE CART
// =========================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}

// =========================
// UPDATE CART
// =========================

function updateCart() {

    const cartItems =
    document.getElementById("cart-items");

    const cartCount =
    document.getElementById("cart-count");

    const totalDisplay =
    document.getElementById("total");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const li =
        document.createElement("li");

        li.innerHTML = `

        <strong>${item.name}</strong>

        - R${item.price}

        <button
        onclick="removeItem(${index})"
        style="
        margin-left:15px;
        background:red;
        color:white;
        border:none;
        padding:6px 10px;
        border-radius:5px;
        cursor:pointer;
        ">
        Remove
        </button>

        `;

        cartItems.appendChild(li);

    });

    cartCount.textContent =
    cart.length;

    totalDisplay.textContent =
    total;
}

// =========================
// REMOVE ITEM
// =========================

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}

// =========================
// CLEAR CART
// =========================

function clearCart() {

    cart = [];

    saveCart();

    updateCart();

}

// =========================
// CHECKOUT
// =========================

function checkout() {

    if(cart.length === 0){

        alert(
        "Your cart is empty."
        );

        return;
    }

    const name =
    document.querySelector(
    'input[type="text"]'
    ).value;

    const email =
    document.querySelector(
    'input[type="email"]'
    ).value;

    const phone =
    document.querySelector(
    'input[type="tel"]'
    ).value;

    if(
        name === "" ||
        email === "" ||
        phone === ""
    ){

        alert(
        "Please complete all checkout details."
        );

        return;
    }

    alert(

    "Thank you for your purchase, " +

    name +

    "!\n\nYour order has been received.\n\nA confirmation email would normally be sent to: "

    +

    email +

    "\n\n(This is a demo checkout for school project purposes.)"

    );

    clearCart();

    document
    .querySelector(".checkout-form")
    .reset();

}

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){

        e.preventDefault();

        document
        .querySelector(
        this.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});