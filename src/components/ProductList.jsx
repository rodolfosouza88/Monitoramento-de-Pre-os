import React from "react";

export default function ProductList({ products, onSelect, selectedId }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        maxHeight: 360,
        overflowY: "auto",
        borderRadius: 16,
        boxShadow:
          "0 12px 20px rgba(139, 92, 246, 0.1), 0 6px 16px rgba(59, 130, 246, 0.07)",
        backgroundColor: "white",
      }}
    >
      {products.map((product) => {
        const isSelected = selectedId === product.id;
        return (
          <li
            key={product.id}
            onClick={() => onSelect(product)}
            style={{
              cursor: "pointer",
              padding: "16px 24px",
              borderBottom: "1px solid #e0e7ff",
              display: "flex",
              alignItems: "center",
              backgroundColor: isSelected ? "#e0e7ff" : "transparent",
              transition: "background-color 0.25s ease",
              userSelect: "none",
            }}
            onMouseEnter={(e) => {
              if (!isSelected)
                e.currentTarget.style.backgroundColor = "#f3f4f6";
            }}
            onMouseLeave={(e) => {
              if (!isSelected)
                e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: 56,
                height: 56,
                objectFit: "contain",
                marginRight: 24,
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)",
                backgroundColor: "#f9fafb",
                padding: 8,
              }}
            />
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: "700",
                  fontSize: 17,
                  color: "#1f2937",
                }}
              >
                {product.title.length > 55
                  ? product.title.substring(0, 55) + "..."
                  : product.title}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  fontWeight: "700",
                  color: "#3b82f6",
                  marginTop: 4,
                }}
              >
                ${product.price.toFixed(2)}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
