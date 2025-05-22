import React from "react";

export default function PriceAlert() {
  return (
    <div
      style={{
        marginTop: 16,
        padding: 14,
        borderRadius: 12,
        backgroundColor: "#ef4444",
        color: "white",
        fontWeight: "700",
        fontSize: 16,
        boxShadow: "0 8px 20px rgba(239, 68, 68, 0.5)",
        textAlign: "center",
        userSelect: "none",
      }}
    >
      Atenção: Houve uma variação de preço maior que 15%!
    </div>
  );
}
