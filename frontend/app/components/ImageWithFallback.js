"use client";
import { useState } from "react";

export function ImageWithFallback({ src, alt, className, style }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={className}
        style={{
          background: "linear-gradient(135deg, #fce7f3, #ffedd5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f472b6",
          fontSize: "2rem",
          ...style,
        }}
      >
        🍽️
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
    />
  );
}
