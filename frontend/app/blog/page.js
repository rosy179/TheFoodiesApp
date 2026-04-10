"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Calendar, Clock, Heart, Sparkles } from "lucide-react";

const FEATURED_ARTICLE = {
  image:
    "https://images.unsplash.com/photo-1633797750051-3cf09df9484e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmb29kJTIwcGhvdG9ncmFwaHklMjBlZGl0b3JpYWwlMjBtYWdhemluZXxlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  title: "The Philosophy of Plating: Where Art Meets Appetite",
  author: "Isabella Chen",
  date: "April 9, 2026",
  readTime: "8 min read",
  category: "Editorial",
  excerpt:
    "Food presentation has evolved from mere arrangement to a delicate art form that captivates all the senses before the first bite.",
  gradientFrom: "#f9a8d4",
  gradientTo: "#f472b6",
};

const ARTICLES = [
  {
    image:
      "https://images.unsplash.com/photo-1619189082417-49d5e40e6f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmb29kJTIwcGhvdG9ncmFwaHklMjBlZGl0b3JpYWwlMjBtYWdhemluZXxlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Seasonal Vegetables: A Spring Guide",
    author: "Thomas Berg",
    date: "April 7, 2026",
    readTime: "6 min read",
    category: "Ingredients",
    gradientFrom: "#86efac",
    gradientTo: "#22c55e",
  },
  {
    image:
      "https://images.unsplash.com/photo-1637348417095-bda3088f592c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBlZGl0b3JpYWwlMjBtYWdhemluZXxlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "The Revival of Ancient Grains",
    author: "Maya Patel",
    date: "April 5, 2026",
    readTime: "7 min read",
    category: "Trends",
    gradientFrom: "#fde68a",
    gradientTo: "#eab308",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633344302433-544a560e7bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Zm9vZCUyMHBob3RvZ3JhcGh5JTIwZWRpdG9yaWFsJTIwbWFnYXppbmV8ZW58MXx8fHwxNzc1NzkzNjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Pastry Techniques from Paris",
    author: "Amélie Dubois",
    date: "April 3, 2026",
    readTime: "10 min read",
    category: "Techniques",
    gradientFrom: "#f9a8d4",
    gradientTo: "#f472b6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1637572166930-a649420a465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmb29kJTIwcGhvdG9ncmFwaHklMjBlZGl0b3JpYWwlMjBtYWdhemluZXxlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Street Food Culture Explored",
    author: "Diego Martinez",
    date: "April 1, 2026",
    readTime: "12 min read",
    category: "Culture",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535386007170-0b3a132fc630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxmb29kJTIwcGhvdG9ncmFwaHklMjBlZGl0b3JpYWwlMjBtYWdhemluZXxlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "The Science of Flavour Pairing",
    author: "Dr. Sarah Williams",
    date: "March 28, 2026",
    readTime: "9 min read",
    category: "Science",
    gradientFrom: "#d8b4fe",
    gradientTo: "#a855f7",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597676718706-a87e84aaa8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZWNpcGUlMjBjb29raW5nJTIwaW5ncmVkaWVudHN8ZW58MXx8fHwxNzc1NzkzNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Citrus in Modern Gastronomy",
    author: "Liam O'Connor",
    date: "March 25, 2026",
    readTime: "5 min read",
    category: "Ingredients",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
];

const CATEGORIES = [
  { label: "All", emoji: "📚" },
  { label: "Editorial", emoji: "✨" },
  { label: "Recipes", emoji: "📖" },
  { label: "Techniques", emoji: "🔪" },
  { label: "Culture", emoji: "🌍" },
  { label: "Ingredients", emoji: "🥬" },
  { label: "Trends", emoji: "📈" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedArticles, setLikedArticles] = useState({});

  const filteredArticles =
    activeCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === activeCategory);

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* ── Hero ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #f3e8ff 50%, #fff7ed 100%)",
          padding: "5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.5rem",
                background: "white",
                borderRadius: "9999px",
                marginBottom: "1.5rem",
                boxShadow: "0 4px 20px rgba(168,85,247,0.15)",
              }}
            >
              <Sparkles size={16} color="#9333ea" style={{ width: 16, height: 16 }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#9333ea",
                }}
              >
                Foodie Journal
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                color: "#7e22ce",
                marginBottom: "1.25rem",
                fontWeight: "700",
                lineHeight: 1.1,
              }}
            >
              The Journal ✍️
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#374151",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.75",
              }}
            >
              Stories, perspectives, and discoveries from the world of gastronomy
              and culinary culture 📚✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
        }}
      >
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              padding: "2rem",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.12)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.08)")
            }
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                alignItems: "center",
              }}
              className="featured-article-grid"
            >
              {/* Image */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 5",
                    borderRadius: "1rem",
                    overflow: "hidden",
                  }}
                >
                  <ImageWithFallback
                    src={FEATURED_ARTICLE.image}
                    alt={FEATURED_ARTICLE.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s",
                    }}
                    className="featured-article-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to top, ${FEATURED_ARTICLE.gradientTo}66, transparent)`,
                      opacity: 0,
                      transition: "opacity 0.3s",
                      pointerEvents: "none",
                    }}
                    className="featured-article-overlay"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.5rem 1.25rem",
                      background: `linear-gradient(135deg, ${FEATURED_ARTICLE.gradientFrom}, ${FEATURED_ARTICLE.gradientTo})`,
                      color: "white",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      borderRadius: "9999px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    ⭐ Featured
                  </span>
                </div>
                {/* Like Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLikedArticles((prev) => ({
                      ...prev,
                      featured: !prev.featured,
                    }));
                  }}
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    width: "48px",
                    height: "48px",
                    background: "rgba(255,255,255,0.95)",
                    borderRadius: "50%",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Heart
                    size={20}
                    color="#ec4899"
                    fill={likedArticles.featured ? "#ec4899" : "none"}
                    style={{ width: 20, height: 20 }}
                  />
                </button>
              </div>

              {/* Content */}
              <div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    marginBottom: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Sparkles size={14} style={{ width: 14, height: 14 }} />
                  {FEATURED_ARTICLE.category}
                </p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2.5rem",
                    color: "#1f2937",
                    marginBottom: "1rem",
                    lineHeight: "1.2",
                    fontWeight: "700",
                    transition: "color 0.2s",
                  }}
                  className="featured-article-title"
                >
                  {FEATURED_ARTICLE.title}
                </h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "#4b5563",
                    lineHeight: "1.75",
                    marginBottom: "1.5rem",
                  }}
                >
                  {FEATURED_ARTICLE.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    marginBottom: "2rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    👤 {FEATURED_ARTICLE.author}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Calendar size={16} style={{ width: 16, height: 16 }} />
                    {FEATURED_ARTICLE.date}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Clock size={16} style={{ width: 16, height: 16 }} />
                    {FEATURED_ARTICLE.readTime}
                  </span>
                </div>

                <button
                  style={{
                    padding: "1rem 2rem",
                    background: "linear-gradient(135deg, #f472b6, #c084fc)",
                    color: "white",
                    borderRadius: "9999px",
                    border: "none",
                    fontWeight: "700",
                    fontFamily: "inherit",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(192,132,252,0.3)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 25px rgba(192,132,252,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(192,132,252,0.3)";
                  }}
                >
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      </section>

      {/* ── Category Filter Bar ── */}
      <section
        style={{
          position: "sticky",
          top: "64px",
          zIndex: 40,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          borderBottom: "1px solid #fce7f3",
          padding: "1rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            gap: "0.75rem",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.label;
            return (
              <button
                key={category.label}
                id={`filter-${category.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(category.label)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.65rem 1.4rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontWeight: "600",
                  fontSize: "1rem",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  transition: "all 0.25s ease",
                  background: isActive
                    ? "linear-gradient(135deg, #c084fc, #f472b6)"
                    : "#f3f4f6",
                  color: isActive ? "white" : "#374151",
                  boxShadow: isActive
                    ? "0 6px 18px rgba(192,132,252,0.3)"
                    : "none",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                <span>{category.emoji}</span>
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
          className="articles-grid"
        >
          {filteredArticles.map((article, i) => {
            const isLiked = likedArticles[i];
            return (
              <motion.article
                key={`${article.title}-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    padding: "1.25rem",
                    transition: "box-shadow 0.3s",
                    height: "100%",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0,0,0,0.14)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.08)")
                  }
                >
                  <div style={{ position: "relative", marginBottom: "1.25rem" }}>
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "4 / 5",
                        borderRadius: "1rem",
                        overflow: "hidden",
                      }}
                    >
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s",
                        }}
                        className="article-img"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(to top, ${article.gradientTo}66, transparent)`,
                          opacity: 0,
                          transition: "opacity 0.3s",
                          pointerEvents: "none",
                        }}
                        className="article-overlay"
                      />
                    </div>
                    {/* Like Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLikedArticles((prev) => ({ ...prev, [i]: !prev[i] }));
                      }}
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        width: "38px",
                        height: "38px",
                        background: "rgba(255,255,255,0.95)",
                        borderRadius: "50%",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        transition: "transform 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.15)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <Heart
                        size={17}
                        color="#ec4899"
                        fill={isLiked ? "#ec4899" : "none"}
                        style={{ width: 17, height: 17 }}
                      />
                    </button>
                  </div>

                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      marginBottom: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: `linear-gradient(to right, ${article.gradientFrom}, ${article.gradientTo})`,
                      }}
                    />
                    {article.category}
                  </p>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.25rem",
                      color: "#1f2937",
                      marginBottom: "0.75rem",
                      lineHeight: "1.2",
                      fontWeight: "700",
                      transition: "color 0.2s",
                    }}
                    className="article-title"
                  >
                    {article.title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      fontSize: "0.875rem",
                      color: "#6b7280",
                    }}
                  >
                    <span>{article.author}</span>
                    <span>•</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Clock size={14} style={{ width: 14, height: 14 }} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        {filteredArticles.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "5rem 0",
              color: "#9ca3af",
            }}
          >
            <p style={{ fontSize: "3rem" }}>📚</p>
            <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              No articles found in this category.
            </p>
          </div>
        )}
      </section>

      {/* ── Newsletter CTA ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #e9d5ff 0%, #fbcfe8 50%, #fed7aa 100%)",
          padding: "6rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
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
            <div style={{ marginBottom: "1.25rem" }}>
              <Sparkles
                size={56}
                color="#9333ea"
                style={{ display: "inline-block", width: 56, height: 56 }}
              />
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#9333ea",
                marginBottom: "1.25rem",
                fontWeight: "700",
              }}
            >
              Subscribe to Our Newsletter 💌
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#374151",
                marginBottom: "2.5rem",
                lineHeight: "1.75",
              }}
            >
              Receive weekly culinary stories, recipes, and inspiration directly
              in your inbox! ✨
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                maxWidth: "500px",
                margin: "0 auto",
              }}
              className="newsletter-form"
            >
              <input
                type="email"
                placeholder="Your email address 📧"
                style={{
                  flex: 1,
                  padding: "1rem 1.5rem",
                  border: "2px solid #d8b4fe",
                  borderRadius: "9999px",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#c084fc")}
                onBlur={(e) => (e.target.style.borderColor = "#d8b4fe")}
              />
              <button
                style={{
                  padding: "1rem 2.5rem",
                  background: "linear-gradient(135deg, #c084fc, #f472b6)",
                  color: "white",
                  borderRadius: "9999px",
                  border: "none",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: "0 8px 20px rgba(192,132,252,0.3)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 25px rgba(192,132,252,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(192,132,252,0.3)";
                }}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .articles-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .featured-article-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .articles-grid { grid-template-columns: 1fr !important; }
          .newsletter-form { flexDirection: column !important; }
        }
        article:hover .article-img, article:hover .featured-article-img { transform: scale(1.08); }
        article:hover .article-overlay, article:hover .featured-article-overlay { opacity: 1 !important; }
        article:hover .article-title, article:hover .featured-article-title { color: #c084fc !important; }
      `}</style>
    </div>
  );
}
