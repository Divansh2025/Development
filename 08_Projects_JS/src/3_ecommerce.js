document.addEventListener("DOMContentLoaded", () => {
  const Products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 4, name: "Product 4", price: 40.989 },
    { id: 5, name: "Product 5", price: 50.99 },
    { id: 8, name: "Product 8", price: 80.99 },
    { id: 9, name: "Product 9", price: 90.99 },
    { id: 10, name: "Product 10", price: 100.9982 },
    { id: 12, name: "Product 12", price: 120.99 },
  ];

  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const emptyCart = document.getElementById("empty-cart");
  const totalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // now for rendering products, run a loop over the products array
  // and create a div for each product with its name, price, and add to cart button to place it there
  Products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product"); // adding class .product to the div
    productDiv.innerHTML = `
    <span>${product.name} - ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
});
