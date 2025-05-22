import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import PriceChart from "./components/PriceChart";
import PriceAlert from "./components/PriceAlert";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  function generatePriceHistory(currentPrice) {
    const history = [];
    for (let i = 6; i >= 0; i--) {
      const variation = currentPrice * (Math.random() * 0.2 - 0.1);
      history.push({
        day: `-${i}d`,
        price: +(currentPrice + variation).toFixed(2),
      });
    }
    return history;
  }

  function checkPriceAlert(history) {
    if (history.length < 2) return false;
    const first = history[0].price;
    const last = history[history.length - 1].price;
    const change = ((last - first) / first) * 100;
    return Math.abs(change) > 15;
  }

  const priceHistory = selectedProduct
    ? generatePriceHistory(selectedProduct.price)
    : [];

  const hasAlert = checkPriceAlert(priceHistory);

  return (
    <div
      style={{
        maxWidth: 960,
        margin: "48px auto",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f0f2f5",
        borderRadius: 12,
        boxShadow:
          "0 10px 25px rgba(59, 130, 246, 0.15), 0 4px 10px rgba(59, 130, 246, 0.1)",
        padding: 36,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 36,
          color: "#1f2937",
          fontWeight: "800",
          fontSize: 32,
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          userSelect: "none",
        }}
      >
        Monitoramento de Preços
      </h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ProductList
        products={filteredProducts}
        onSelect={setSelectedProduct}
        selectedId={selectedProduct ? selectedProduct.id : null}
      />

      {selectedProduct && (
        <section
          style={{
            marginTop: 40,
            backgroundColor: "white",
            padding: 28,
            borderRadius: 16,
            boxShadow:
              "0 12px 24px rgba(139, 92, 246, 0.15), 0 8px 16px rgba(59, 130, 246, 0.1)",
            transition: "transform 0.3s ease",
          }}
        >
          <h2
            style={{
              marginBottom: 20,
              color: "#4b5563",
              fontWeight: "700",
              fontSize: 22,
              borderBottom: "2px solid #8b5cf6",
              paddingBottom: 6,
            }}
          >
            Detalhes do Produto
          </h2>

          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{
                width: 180,
                height: 180,
                objectFit: "contain",
                borderRadius: 16,
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.3)",
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
                padding: 12,
              }}
            />
            <div style={{ maxWidth: 480 }}>
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontWeight: "700",
                  fontSize: 20,
                  color: "#1f2937",
                }}
              >
                {selectedProduct.title}
              </h3>
              <p
                style={{
                  fontSize: 24,
                  fontWeight: "800",
                  color: "#3b82f6",
                  margin: 0,
                }}
              >
                ${selectedProduct.price.toFixed(2)}
              </p>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <PriceChart data={priceHistory} />
            {hasAlert && <PriceAlert />}
          </div>
        </section>
      )}
    </div>
  );
}
