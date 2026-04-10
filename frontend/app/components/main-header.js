"use client";
import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

export default function MainHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(255,255,255,0.85)",
        borderBottom: "1px solid #fce7f3",
        boxShadow: "0 2px 20px rgba(236,72,153,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              background: "linear-gradient(135deg, #f472b6, #fb923c)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heart size={20} color="white" fill="white" />
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #ec4899, #f97316)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Foodies
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[
            { href: "/", label: "Trang Chủ" },
            { href: "/meals", label: "Công Thức" },
            { href: "/community", label: "Cộng Đồng" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#6b7280",
                fontWeight: "600",
                fontSize: "0.95rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ec4899")}
              onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/meals/share"
            style={{
              padding: "0.5rem 1.25rem",
              background: "linear-gradient(135deg, #f472b6, #fb923c)",
              color: "white",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.9rem",
              boxShadow: "0 4px 15px rgba(236,72,153,0.25)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 20px rgba(236,72,153,0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 15px rgba(236,72,153,0.25)";
            }}
          >
            + Chia Sẻ Món Ăn
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#ec4899",
          }}
          className="mobile-menu-btn"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          header nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}