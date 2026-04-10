"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Heart, Search, Menu, X, User } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home", emoji: "🏠" },
  { href: "/meals", label: "Recipes", emoji: "📖" },
  { href: "/restaurants", label: "Restaurants", emoji: "🍽️" },
  { href: "/blog", label: "Blog", emoji: "👍" },
  { href: "/feed", label: "Feed", emoji: "🎬" },
];

export default function MainHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(255,255,255,0.92)",
          borderBottom: "1.5px solid #fce7f3",
          boxShadow: "0 2px 16px rgba(236,72,153,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "1rem 3rem",
            display: "flex",
            alignItems: "center",
            height: "64px",
            gap: "2rem",
          }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #f472b6, #fb923c)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(236,72,153,0.3)",
              }}
            >
              <Heart size={20} color="white" fill="white" style={{ width: 20, height: 20 }} />
            </div>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.45rem",
                fontWeight: "700",
                color: "#ec4899",
              }}
            >
              Foodies
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav
            className="main-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              flex: 1,
              paddingLeft: "10rem",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.45rem 1.1rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    fontWeight: isActive ? "800" : "700",
                    fontSize: "1rem",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    transition: "all 0.2s ease",
                    background: isActive
                      ? "linear-gradient(135deg, #fb923c, #f97316)"
                      : "transparent",
                    color: isActive ? "white" : "#4b5563",
                    boxShadow: isActive
                      ? "0 4px 14px rgba(249,115,22,0.35)"
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "#fef3c7";
                      e.currentTarget.style.color = "#f97316";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#4b5563";
                    }
                  }}
                >
                  <span style={{ fontSize: "1rem", lineHeight: 1 }}>
                    {item.emoji}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Right Actions ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexShrink: 0,
            }}
          >
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#6b7280",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.4rem",
                borderRadius: "50%",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fce7f3";
                e.currentTarget.style.color = "#ec4899";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "#6b7280";
              }}
            >
              <Search size={25}/>
            </button>

            {/* Avatar */}
            <Link
              href="/profile"
              aria-label="Profile"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #fb923c, #f97316)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(249,115,22,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(249,115,22,0.3)";
              }}
            >
              <User size={18} color="white" style={{ width: "18px", height: "18px" }} />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle"
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#ec4899",
                padding: "0.3rem",
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Search Bar (expandable) ── */}
        {searchOpen && (
          <div
            style={{
              borderTop: "1px solid #fce7f3",
              padding: "0.75rem 2rem",
              background: "rgba(255,255,255,0.97)",
            }}
          >
            <div
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Search size={20}  style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af", width: "20px", height: "20px"   }} />  
              <input
                autoFocus
                type="text"
                placeholder="Search recipes, restaurants…"
                style={{
                  width: "100%",
                  padding: "0.65rem 1rem 0.65rem 2.75rem",
                  border: "2px solid #fce7f3",
                  borderRadius: "9999px",
                  fontSize: "0.95rem",
                  outline: "none",
                  color: "#1f2937",
                  background: "#fff",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#f9a8d4")}
                onBlur={(e) => (e.target.style.borderColor = "#fce7f3")}
              />
            </div>
          </div>
        )}

        {/* ── Mobile Nav Drawer ── */}
        {mobileOpen && (
          <nav
            style={{
              borderTop: "1px solid #fce7f3",
              padding: "1rem 2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.97)",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.25rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    background: isActive
                      ? "linear-gradient(135deg, #fb923c, #f97316)"
                      : "#fef3c7",
                    color: isActive ? "white" : "#92400e",
                  }}
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        <style>{`
          @media (max-width: 768px) {
            .main-nav { display: none !important; }
            .mobile-toggle { display: flex !important; }
          }
        `}</style>
      </header>
    </>
  );
}