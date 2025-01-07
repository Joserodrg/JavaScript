const products = [
  { name: "Monitor", price: 95 },
  { name: "teclado", price: 60 },
  { name: "mesa", price: 85 },
  { name: "silla", price: 125 },
];

const filterProducts = [];

products.forEach((product) => {
  if (product.price > 80) {
    filterProducts.push(product);
  }
});

console.log(filterProducts);
