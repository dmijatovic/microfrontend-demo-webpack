import { commerce } from "faker";

const products = [];

function mount(el) {
  console.log("Products.mount...el...", el);
  // generate product names
  for (let i = 0; i < 5; i++) {
    const name = commerce.productName();
    products.push({
      name,
    });
  }

  const htmlProducts = products
    .map((item) => `<li>${item.name}</li>`)
    .toString()
    .replaceAll(",", "");

  // console.log(htmlProducts);

  el.innerHTML = `
    <ul>
    ${htmlProducts}
    </ul>
  `;
}

// FOR local development
if (process.env.NODE_ENV === "development") {
  // console.log("products...development");
  const el = document.getElementById("dev-products-only");
  if (el) {
    mount(el);
  }
}

// FOR INTEGRATION we export mount
// export default mount;
export default { mount };
