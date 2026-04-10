"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Clock, Users, ChefHat, Heart, Star } from "lucide-react";

const ALL_RECIPES = [
  {
    image:
      "https://images.unsplash.com/photo-1628838463043-b81a343794d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Fresh Fruit Tart",
    chef: "Marie Laurent",
    time: "45 min",
    servings: "8",
    difficulty: "Intermediate",
    category: "Dessert",
    color: "from-pink-300 to-pink-400",
    gradientFrom: "#f9a8d4",
    gradientTo: "#f472b6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1775498011193-be0746a0e2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Moules Marinières",
    chef: "Jean-Pierre Blanc",
    time: "30 min",
    servings: "4",
    difficulty: "Easy",
    category: "Seafood",
    color: "from-orange-300 to-orange-400",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
  {
    image:
      "https://images.unsplash.com/photo-1767408406141-6201dd5a265c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Artisan Toast",
    chef: "Sofia Chen",
    time: "15 min",
    servings: "2",
    difficulty: "Easy",
    category: "Breakfast",
    color: "from-yellow-300 to-yellow-400",
    gradientFrom: "#fde68a",
    gradientTo: "#eab308",
  },
  {
    image:
      "https://images.unsplash.com/photo-1758796626175-cfbb6ed524d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Butter-Poached Lobster",
    chef: "Marcus Reynolds",
    time: "60 min",
    servings: "2",
    difficulty: "Advanced",
    category: "Seafood",
    color: "from-pink-300 to-pink-400",
    gradientFrom: "#f9a8d4",
    gradientTo: "#f472b6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599731316496-a3018cde6bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Pan-Seared Sea Bass",
    chef: "Elena Rossi",
    time: "40 min",
    servings: "4",
    difficulty: "Intermediate",
    category: "Main Course",
    color: "from-orange-300 to-orange-400",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
  {
    image:
      "https://images.unsplash.com/photo-1775760306749-e950e57494af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Berry Cream Parfait",
    chef: "Amélie Dubois",
    time: "25 min",
    servings: "6",
    difficulty: "Easy",
    category: "Dessert",
    color: "from-yellow-300 to-yellow-400",
    gradientFrom: "#fde68a",
    gradientTo: "#eab308",
  },
];

const FILTERS = [
  { label: "All Recipes", emoji: "🍽️" },
  { label: "Breakfast", emoji: "🥐" },
  { label: "Main Course", emoji: "🍖" },
  { label: "Dessert", emoji: "🍰" },
  { label: "Seafood", emoji: "🦞" },
  { label: "Vegetarian", emoji: "🥗" },
];

const DIFFICULTY_COLORS = {
  Easy: { from: "#86efac", to: "#22c55e" },
  Intermediate: { from: "#fdba74", to: "#f97316" },
  Advanced: { from: "#f9a8d4", to: "#ec4899" },
};

export default function RecipesPage() {
  const [activeFilter, setActiveFilter] = useState("All Recipes");
  const [liked, setLiked] = useState({});

  const filtered =
    activeFilter === "All Recipes"
      ? ALL_RECIPES
      : ALL_RECIPES.filter((r) => r.category === activeFilter);

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* ── Hero ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #fff7ed 50%, #fefce8 100%)",
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
                boxShadow: "0 4px 20px rgba(236,72,153,0.15)",
              }}
            >
              <ChefHat size={16} color="#ec4899" style={{ width: 40, height: 40 }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#ec4899",
                }}
              >
                Recipe Collection
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                color: "#db2777",
                marginBottom: "1.25rem",
                fontWeight: "700",
                lineHeight: 1.1,
              }}
            >
              Explore Recipes 📖
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
              Discover amazing recipes from talented chefs and food lovers
              around the world 🌍✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
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
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.label;
            return (
              <button
                key={filter.label}
                id={`filter-${filter.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveFilter(filter.label)}
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
                    ? "linear-gradient(135deg, #f472b6, #fb923c)"
                    : "#f3f4f6",
                  color: isActive ? "white" : "#374151",
                  boxShadow: isActive
                    ? "0 6px 18px rgba(236,72,153,0.3)"
                    : "none",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
              >
                <span>{filter.emoji}</span>
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Recipe Grid ── */}
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
          className="recipes-grid"
        >
          {filtered.map((recipe, i) => {
            const diffColor =
              DIFFICULTY_COLORS[recipe.difficulty] || DIFFICULTY_COLORS.Easy;
            const isLiked = liked[i];

            return (
              <motion.article
                key={`${recipe.title}-${i}`}
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
                  {/* Image wrapper */}
                  <div
                    style={{ position: "relative", marginBottom: "1.25rem" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "4 / 3",
                        borderRadius: "1rem",
                        overflow: "hidden",
                      }}
                    >
                      <ImageWithFallback
                        src={recipe.image}
                        alt={recipe.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s",
                        }}
                        className="recipe-img"
                      />
                      {/* Hover overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(to top, ${recipe.gradientTo}66, transparent)`,
                          opacity: 0,
                          transition: "opacity 0.3s",
                          pointerEvents: "none",
                        }}
                        className="recipe-overlay"
                      />
                    </div>

                    {/* Category badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        left: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          padding: "0.35rem 0.85rem",
                          background: "rgba(255,255,255,0.95)",
                          borderRadius: "9999px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          fontFamily: "'Playfair Display', Georgia, serif",
                          color: "#1f2937",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        }}
                      >
                        {recipe.category}
                      </span>
                    </div>

                    {/* Like button */}
                    <button
                      id={`like-recipe-${i}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLiked((prev) => ({ ...prev, [i]: !prev[i] }));
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

                    {/* Difficulty badge — floats at bottom center */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-0.85rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          padding: "0.35rem 1rem",
                          background: `linear-gradient(135deg, ${diffColor.from}, ${diffColor.to})`,
                          color: "white",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          borderRadius: "9999px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <Star
                          size={12}
                          fill="white"
                          color="white"
                          style={{ width: 12, height: 12 }}
                        />
                        {recipe.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: "0.75rem" }}>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.2rem",
                        color: "#1f2937",
                        marginBottom: "0.3rem",
                        fontWeight: "700",
                        transition: "color 0.2s",
                      }}
                      className="recipe-title"
                    >
                      {recipe.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#6b7280",
                        marginBottom: "1rem",
                      }}
                    >
                      by {recipe.chef} 👨‍🍳
                    </p>

                    {/* Meta row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "#f9fafb",
                        borderRadius: "0.75rem",
                        padding: "0.65rem 1rem",
                        fontSize: "0.85rem",
                        color: "#4b5563",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <Clock
                          size={15}
                          color="#ec4899"
                          style={{ width: 15, height: 15 }}
                        />
                        {recipe.time}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <Users
                          size={15}
                          color="#f97316"
                          style={{ width: 15, height: 15 }}
                        />
                        {recipe.servings} servings
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "5rem 0",
              color: "#9ca3af",
            }}
          >
            <p style={{ fontSize: "3rem" }}>🍽️</p>
            <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
              No recipes found in this category yet.
            </p>
          </div>
        )}
      </section>

      {/* ── CTA Section ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fbcfe8 0%, #fed7aa 50%, #fef08a 100%)",
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
              <ChefHat
                size={56}
                color="#db2777"
                style={{ display: "inline-block", width: 56, height: 56 }}
              />
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#db2777",
                marginBottom: "1.25rem",
                fontWeight: "700",
              }}
            >
              Share Your Recipe
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#374151",
                marginBottom: "2.5rem",
                lineHeight: "1.75",
              }}
            >
              Every recipe has a story worth telling. Share your favourite dish
              with our community! 🥰
            </p>
            <button
              id="submit-recipe-btn"
              style={{
                padding: "1.1rem 2.75rem",
                background: "white",
                color: "#db2777",
                borderRadius: "9999px",
                border: "3px solid #f9a8d4",
                fontWeight: "700",
                fontSize: "1rem",
                fontFamily: "inherit",
                cursor: "pointer",
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
              Submit a Recipe →
            </button>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .recipes-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .recipes-grid { grid-template-columns: 1fr !important; }
        }
        article:hover .recipe-img { transform: scale(1.08); }
        article:hover .recipe-overlay { opacity: 1 !important; }
        article:hover .recipe-title { color: #ec4899 !important; }
      `}</style>
    </div>
  );
}
