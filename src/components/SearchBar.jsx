import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar produtos..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "14px 20px",
        width: "100%",
        fontSize: 18,
        borderRadius: 16,
        border: "2px solid transparent",
        boxShadow:
          "0 2px 8px rgba(59, 130, 246, 0.2), inset 0 1px 3px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        outline: "none",
        fontWeight: "600",
        color: "#1f2937",
        backgroundColor: "white",
      }}
      onFocus={(e) => {
        e.target.style.borderColor = "#8b5cf6";
        e.target.style.boxShadow =
          "0 4px 16px rgba(139, 92, 246, 0.5), inset 0 1px 3px rgba(0,0,0,0.1)";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = "transparent";
        e.target.style.boxShadow =
          "0 2px 8px rgba(59, 130, 246, 0.2), inset 0 1px 3px rgba(0,0,0,0.05)";
      }}
    />
  );
}
