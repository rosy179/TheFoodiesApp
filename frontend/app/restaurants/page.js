"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { MapPin, Star, Heart, Sparkles, Search } from "lucide-react";

const ALL_RESTAURANTS = [
  {
    image:
      "https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3NTc5MzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Le Jardin Secret",
    cuisine: "French Contemporary",
    cuisineTag: "French",
    location: "Paris, France",
    rating: 4.9,
    price: "$$$",
    description:
      "An intimate dining experience featuring seasonal French cuisine crafted with modern techniques and locally sourced ingredients.",
    gradientFrom: "#f9a8d4",
    gradientTo: "#f472b6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1768051297578-1ea70392c307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3NTc5MzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Palazzo Rosso",
    cuisine: "Italian Fine Dining",
    cuisineTag: "Italian",
    location: "Rome, Italy",
    rating: 4.8,
    price: "$$$$",
    description:
      "Opulent décor meets generations of traditional Italian recipes, offering an unforgettable journey through the heart of Italian gastronomy.",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
  {
    image:
      "https://images.unsplash.com/photo-1771574205963-0c1d84ac7354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3NTc5MzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Crimson Table",
    cuisine: "Modern Asian Fusion",
    cuisineTag: "Asian Fusion",
    location: "Tokyo, Japan",
    rating: 4.7,
    price: "$$$",
    description:
      "Bold flavours and striking design converge at this pioneering culinary destination blending East and West in every dish.",
    gradientFrom: "#fde68a",
    gradientTo: "#eab308",
  },
  {
    image:
      "https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3NTc5MzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Garden Terrace",
    cuisine: "Farm-to-Table",
    cuisineTag: "Fine Dining",
    location: "Napa Valley, USA",
    rating: 4.9,
    price: "$$$",
    description:
      "Seasonal produce harvested from local farms is transformed into elegant, memorable dishes in a stunning vineyard setting.",
    gradientFrom: "#f9a8d4",
    gradientTo: "#f472b6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1758648207365-df458d3e83f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3NTc5MzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Botanica",
    cuisine: "Plant-Based Fine Dining",
    cuisineTag: "Fine Dining",
    location: "Copenhagen, Denmark",
    rating: 4.8,
    price: "$$",
    description:
      "A lush indoor garden surrounds guests as they explore creative plant-based cuisine that is as beautiful as it is delicious.",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
  {
    image:
      "https://images.unsplash.com/photo-1770910045510-77e24f37988f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc3NTc5MzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Mirage Lounge",
    cuisine: "Mediterranean",
    cuisineTag: "Mediterranean",
    location: "Barcelona, Spain",
    rating: 4.6,
    price: "$$$",
    description:
      "Sophisticated mirrored interiors frame a menu of coastal Mediterranean flavours that transport guests to the shores of the sea.",
    gradientFrom: "#fde68a",
    gradientTo: "#eab308",
  },
];

const FILTERS = [
  { label: "All", emoji: "🌍" },
  { label: "French", emoji: "🥐" },
  { label: "Italian", emoji: "🍝" },
  { label: "Japanese", emoji: "🍱" },
  { label: "Mediterranean", emoji: "🫒" },
  { label: "Asian Fusion", emoji: "🥡" },
  { label: "Fine Dining", emoji: "✨" },
];

export default function RestaurantsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [liked, setLiked] = useState({});

  const filtered = ALL_RESTAURANTS.filter((r) => {
    const matchesFilter =
      activeFilter === "All" || r.cuisineTag === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.cuisine.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

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
                boxShadow: "0 4px 20px rgba(249,115,22,0.15)",
              }}
            >
              <Sparkles size={16} color="#f97316" style={{ width: 16, height: 16 }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#f97316",
                }}
              >
                Discover Restaurants
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                color: "#ea580c",
                marginBottom: "1.25rem",
                fontWeight: "700",
                lineHeight: 1.1,
              }}
            >
              Restaurant Guide 🍽️
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
              Discover extraordinary dining experiences from around the world,
              handpicked by passionate food lovers 🌟
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Search Bar ── */}
      <section
        style={{
          background: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          padding: "1.5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            gap: "1rem",
          }}
        >
          <div style={{ position: "relative", flex: 1 }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "1.25rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
                width: 18,
                height: 18,
              }}
            />
            <input
              id="restaurant-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurants, cuisines, locations… 🔍"
              style={{
                width: "100%",
                padding: "0.9rem 1.25rem 0.9rem 3rem",
                border: "2px solid #e5e7eb",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                fontFamily: "inherit",
                outline: "none",
                color: "#1f2937",
                background: "#fafafa",
                boxSizing: "border-box",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f9a8d4")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
          </div>
          <button
            id="restaurant-search-btn"
            onClick={() => {}}
            style={{
              padding: "0.9rem 2.25rem",
              background: "linear-gradient(135deg, #f472b6, #fb923c)",
              color: "white",
              borderRadius: "9999px",
              border: "none",
              fontWeight: "700",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(249,115,22,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(249,115,22,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(249,115,22,0.3)";
            }}
          >
            Search
          </button>
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
                    ? "linear-gradient(135deg, #fb923c, #f472b6)"
                    : "#f3f4f6",
                  color: isActive ? "white" : "#374151",
                  boxShadow: isActive
                    ? "0 6px 18px rgba(249,115,22,0.3)"
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

      {/* ── Restaurant Grid ── */}
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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
          className="restaurants-grid"
        >
          {filtered.map((restaurant, i) => {
            const isLiked = liked[i];
            return (
              <motion.article
                key={`${restaurant.name}-${i}`}
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
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 3fr",
                      gap: "1.25rem",
                    }}
                    className="restaurant-card-inner"
                  >
                    {/* Image */}
                    <div>
                      <div
                        style={{
                          position: "relative",
                          aspectRatio: "4 / 5",
                          borderRadius: "1rem",
                          overflow: "hidden",
                        }}
                      >
                        <ImageWithFallback
                          src={restaurant.image}
                          alt={restaurant.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s",
                          }}
                          className="restaurant-img"
                        />
                        {/* Hover overlay */}
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(to top, ${restaurant.gradientTo}66, transparent)`,
                            opacity: 0,
                            transition: "opacity 0.3s",
                            pointerEvents: "none",
                          }}
                          className="restaurant-overlay"
                        />

                        {/* Like button */}
                        <button
                          id={`like-restaurant-${i}`}
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
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "0.25rem 0",
                      }}
                    >
                      <div>
                        {/* Rating & Price */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.65rem",
                            marginBottom: "0.85rem",
                          }}
                        >
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.3rem",
                              padding: "0.3rem 0.85rem",
                              background: `linear-gradient(135deg, ${restaurant.gradientFrom}, ${restaurant.gradientTo})`,
                              borderRadius: "9999px",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                            }}
                          >
                            <Star
                              size={13}
                              fill="white"
                              color="white"
                              style={{ width: 13, height: 13 }}
                            />
                            <span
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: "700",
                                color: "white",
                              }}
                            >
                              {restaurant.rating}
                            </span>
                          </div>
                          <span
                            style={{
                              padding: "0.3rem 0.85rem",
                              background: "#f3f4f6",
                              borderRadius: "9999px",
                              fontSize: "0.8rem",
                              fontWeight: "600",
                              color: "#374151",
                            }}
                          >
                            {restaurant.price}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "1.4rem",
                            color: "#1f2937",
                            marginBottom: "0.3rem",
                            fontWeight: "700",
                            transition: "color 0.2s",
                          }}
                          className="restaurant-name"
                        >
                          {restaurant.name}
                        </h3>

                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "#6b7280",
                            marginBottom: "0.85rem",
                          }}
                        >
                          {restaurant.cuisine}
                        </p>

                        <p
                          style={{
                            fontSize: "0.92rem",
                            color: "#4b5563",
                            lineHeight: "1.7",
                            marginBottom: "1.25rem",
                          }}
                        >
                          {restaurant.description}
                        </p>
                      </div>

                      {/* Location */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          background: "#f9fafb",
                          borderRadius: "0.75rem",
                          padding: "0.65rem 1rem",
                          fontSize: "0.85rem",
                          color: "#4b5563",
                        }}
                      >
                        <MapPin
                          size={15}
                          color="#f97316"
                          style={{ width: 15, height: 15 }}
                        />
                        <span>{restaurant.location}</span>
                      </div>
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
              No restaurants found. Try a different search or filter.
            </p>
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fed7aa 0%, #fbcfe8 50%, #fef08a 100%)",
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
                color="#ea580c"
                style={{ display: "inline-block", width: 56, height: 56 }}
              />
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#ea580c",
                marginBottom: "1.25rem",
                fontWeight: "700",
              }}
            >
              Add Your Favourite Restaurant
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#374151",
                marginBottom: "2.5rem",
                lineHeight: "1.75",
              }}
            >
              Help fellow food lovers discover hidden gems and iconic
              establishments around the world 🌟
            </p>
            <button
              id="submit-restaurant-btn"
              style={{
                padding: "1.1rem 2.75rem",
                background: "white",
                color: "#ea580c",
                borderRadius: "9999px",
                border: "3px solid #fed7aa",
                fontWeight: "700",
                fontSize: "1rem",
                fontFamily: "inherit",
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(249,115,22,0.18)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(249,115,22,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(249,115,22,0.18)";
              }}
            >
              Submit a Restaurant →
            </button>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .restaurants-grid { grid-template-columns: 1fr !important; }
          .restaurant-card-inner { grid-template-columns: 1fr !important; }
        }
        article:hover .restaurant-img { transform: scale(1.08); }
        article:hover .restaurant-overlay { opacity: 1 !important; }
        article:hover .restaurant-name { color: #ea580c !important; }
      `}</style>
    </div>
  );
}
