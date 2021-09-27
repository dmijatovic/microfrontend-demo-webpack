import { datatype } from "faker";
console.log("Cart");

const elMsg = document.getElementById("dev-cart");
const cartText = `You have ${datatype.number(100)} products in the cart.`;
elMsg.innerHTML = cartText;
