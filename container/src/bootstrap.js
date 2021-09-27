import products from "products/ProductsIndex";
import cart from "cart/CartIndex";

const elProd = document.getElementById("product-list");
const elCart = document.getElementById("cart-section");

if (elProd) {
  products.mount(elProd);
}

if (elCart) {
  cart.mount(elCart);
}

// console.log("container.mount", products);
// console.log("container.elProd", elProd);
// products.mount(elProd);

console.log("Container...started");
