import { datatype } from "faker";

function mount(el) {
  console.log("Cart.mount...el...", el);
  const cartText = `You have ${datatype.number(100)} products in the cart.`;
  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === "development") {
  const elMsg = document.getElementById("dev-cart");
  if (elMsg) {
    mount(elMsg);
  }
}

export default {
  mount,
};
