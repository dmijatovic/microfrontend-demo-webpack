// use async import to ensure preloading of shared libraries
let mount;
import("./bootstrap").then((bs) => {
  console.log("products.index...bs..", bs);
  mount = bs.mount;
});

export { mount };
