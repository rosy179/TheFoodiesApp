"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "./components/ImageWithFallback";
import { Heart, Star, Sparkles, Coffee } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #fdf2f8, #fff7ed, #fefce8)",
      }}
    >
      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Decorative floating icons */}
        <div
          style={{
            position: "absolute",
            top: "5rem",
            right: "5rem",
            color: "#fbcfe8",
            animation: "pulse 2s ease-in-out infinite",
            lineHeight: 1,
          }}
        >
          <Sparkles size={60} style={{ display: "block", width: 60, height: 60 }} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "8rem",
            left: "2.5rem",
            color: "#fed7aa",
            animation: "bounce 1.5s ease-in-out infinite",
          }}
        >
          <Heart size={50} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "33%",
            right: "25%",
            color: "#fef08a",
          }}
        >
          <Star size={40} />
        </div>

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.5rem",
            width: "100%",
          }}
        >
          <div className="hero-grid">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.5rem",
                  background: "#fbcfe8",
                  borderRadius: "9999px",
                  marginBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#9d174d",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  <Sparkles size={16} style={{ flexShrink: 0, width: 16, height: 16 }} />
                  Welcome to Foodies!
                </p>
              </div>

              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(4rem, 10vw, 6rem)",
                  color: "#db2777",
                  marginBottom: "1.5rem",
                  lineHeight: "1.05",
                  fontWeight: "700",
                }}
              >
                Sweet
                <br />
                Moments
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#374151",
                  marginBottom: "2rem",
                  lineHeight: "1.75",
                  maxWidth: "480px",
                }}
              >
                Explore the colorful world of food with delicious recipes and great restaurants! 🍰✨
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link
                  href="/meals"
                  style={{
                    padding: "1rem 2rem",
                    background:
                      "linear-gradient(135deg, #f472b6, #ec4899)",
                    color: "white",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 25px rgba(236,72,153,0.35)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(236,72,153,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(236,72,153,0.35)";
                  }}
                >
                  <Coffee size={20} />
                  View Recipes
                </Link>

                <Link
                  href="/community"
                  style={{
                    padding: "1rem 2rem",
                    background: "white",
                    color: "#ec4899",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    border: "2px solid #f9a8d4",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(236,72,153,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Explore Now
                </Link>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                }}
              >
                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle, #f9a8d4, #fdba74)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    opacity: 0.35,
                  }}
                />
                {/* Circle image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
                    border: "8px solid white",
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1623073284788-0d846f75e329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Delicious dessert"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Floating star badge */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    top: "-1rem",
                    right: "-1rem",
                    background: "white",
                    borderRadius: "50%",
                    padding: "1.25rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    border: "4px solid #fef08a",
                  }}
                >
                  <Star
                    size={32}
                    color="#eab308"
                    fill="#eab308"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Món Ưa Thích (3 Circles) ── */}
      <section style={{ padding: "5rem 0", background: "#fce7f3" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                color: "#db2777",
                marginBottom: "0.75rem",
                fontWeight: "700",
              }}
            >
              Favourite Dishes
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.05rem" }}>
              The most popular dishes
            </p>
          </motion.div>

          <div className="circles-grid">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1628838463043-b81a343794d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Fresh Fruit Tart",
                price: "65,000đ",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1775760306749-e950e57494af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Berry Parfait",
                price: "55,000đ",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1767408406141-6201dd5a265c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Artisan Toast",
                price: "45,000đ",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    marginBottom: "1rem",
                  }}
                >
                  {/* Glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle, #f9a8d4, #fdba74)",
                      borderRadius: "50%",
                      filter: "blur(30px)",
                      opacity: 0.5,
                    }}
                  />
                  {/* Image circle */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
                      border: "4px solid white",
                    }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s",
                      }}
                    />
                  </div>
                  {/* Heart badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-0.5rem",
                      right: "-0.5rem",
                      background: "white",
                      borderRadius: "50%",
                      padding: "0.5rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      border: "2px solid #f9a8d4",
                    }}
                  >
                    <Heart
                      size={20}
                      color="#ec4899"
                      fill="#ec4899"
                    />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.2rem",
                      color: "#1f2937",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#db2777",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Snack Cafe (4-column cards) ── */}
      <section style={{ padding: "5rem 0", background: "#fff7ed" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                color: "#c2410c",
                marginBottom: "0.75rem",
                fontWeight: "700",
              }}
            >
              Snack Cafe ☕
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.05rem" }}>
              Delicious snacks
            </p>
          </motion.div>

          <div className="snack-grid">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1643757343278-5d50309dfa44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Breakfast Bowl",
                gradient: "linear-gradient(135deg,#f9a8d4,#f472b6)",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1599731316496-a3018cde6bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Gourmet Fish",
                gradient: "linear-gradient(135deg,#fdba74,#f97316)",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1758796626175-cfbb6ed524d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Butter Lobster",
                gradient: "linear-gradient(135deg,#fde68a,#eab308)",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1775498011193-be0746a0e2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                title: "Seafood Special",
                gradient: "linear-gradient(135deg,#f9a8d4,#f472b6)",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    padding: "1rem",
                    transition: "box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0,0,0,0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.08)")
                  }
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "4 / 3",
                      borderRadius: "1rem",
                      overflow: "hidden",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s",
                      }}
                    />
                    {/* gradient overlay on hover via CSS class */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: item.gradient,
                        opacity: 0,
                        transition: "opacity 0.3s",
                      }}
                      className="snack-overlay"
                    />
                  </div>
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      color: "#1f2937",
                      margin: 0,
                      fontSize: "1rem",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link
              href="/meals"
              style={{
                display: "inline-block",
                padding: "1rem 2.5rem",
                background:
                  "linear-gradient(135deg, #fb923c, #f472b6)",
                color: "white",
                borderRadius: "9999px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1rem",
                boxShadow: "0 8px 25px rgba(249,115,22,0.35)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(249,115,22,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(249,115,22,0.35)";
              }}
            >
              View All Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section
        style={{
          padding: "6rem 0",
          background:
            "linear-gradient(135deg, #fbcfe8, #fed7aa, #fef08a)",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <Sparkles
                size={30}
                color="#db2777"
                style={{ display: "inline-block", width: 80, height: 80 }}
              />
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#db2777",
                marginBottom: "1.5rem",
                fontWeight: "300",
              }}
            >
              Share Your Sweet Moments
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#374151",
                marginBottom: "2rem",
                lineHeight: "1.75",
              }}
            >
              Join the foodie community and share your sweet moments! 🥰
            </p>
            <Link
              href="/community"
              style={{
                display: "inline-block",
                padding: "1.25rem 2.5rem",
                background: "white",
                color: "#db2777",
                borderRadius: "9999px",
                textDecoration: "none",
                border: "4px solid #f9a8d4",
                fontWeight: "700",
                fontSize: "1.05rem",
                boxShadow: "0 8px 30px rgba(236,72,153,0.18)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(236,72,153,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(236,72,153,0.18)";
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "100%",
                }}
              >
                <Heart size={20} color="#db2777" fill="#db2777" style={{ width: 20, height: 20 }} />
                Join Now
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Responsive + hover styles */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .circles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .snack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .snack-overlay { pointer-events: none; }
        .group:hover .snack-overlay { opacity: 0.2 !important; }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .circles-grid { grid-template-columns: repeat(2, 1fr); }
          .snack-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .circles-grid { grid-template-columns: 1fr; }
          .snack-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
