import { mount } from "products/ProductsIndex";
import "cart/CartIndex";

const elProd = document.getElementById("product-list");

if (elProd) {
  mount(elProd);
}

console.log("container.mount", mount);
console.log("container.elProd", elProd);
// products.mount(elProd);

console.log("Container");
