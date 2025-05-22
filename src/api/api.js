// src/api.js
const productsMock = [
  {
    id: 1,
    name: "Smartphone XYZ",
    store: "Loja A",
    currentPrice: 1500,
    priceHistory: [1600, 1550, 1500],
  },
  {
    id: 2,
    name: "Notebook ABC",
    store: "Loja B",
    currentPrice: 3500,
    priceHistory: [3700, 3600, 3500],
  },
  {
    id: 3,
    name: "Fone Bluetooth",
    store: "Loja C",
    currentPrice: 250,
    priceHistory: [300, 270, 250],
  },
];

export function fetchProducts(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        resolve(productsMock);
      } else {
        const filtered = productsMock.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filtered);
      }
    }, 500);
  });
}
