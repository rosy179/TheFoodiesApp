"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Heart, MessageCircle, Bookmark, Camera, Sparkles } from "lucide-react";

const POSTS = [
  {
    image:
      "https://images.unsplash.com/photo-1643757343278-5d50309dfa44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "chef_maria",
    userAvatar: "👩‍🍳",
    likes: 1243,
    comments: 56,
    caption: "Sunday breakfast with seasonal vegetables and fresh herbs 🌿✨",
    gradientFrom: "#f9a8d4",
    gradientTo: "#f472b6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1767408406141-6201dd5a265c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "artisan_eats",
    userAvatar: "🍞",
    likes: 892,
    comments: 34,
    caption: "Homemade sourdough with cream cheese and seasonal jam 🥖💕",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599731316496-a3018cde6bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "fine_dining_daily",
    userAvatar: "⭐",
    likes: 2156,
    comments: 87,
    caption: "Pan-seared perfection. Simple ingredients, refined technique 🐟",
    gradientFrom: "#fde68a",
    gradientTo: "#eab308",
  },
  {
    image:
      "https://images.unsplash.com/photo-1628838463043-b81a343794d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "sweet_creations",
    userAvatar: "🧁",
    likes: 1567,
    comments: 92,
    caption: "Fresh fruit tart with vanilla cream 🍓🫐",
    gradientFrom: "#f9a8d4",
    gradientTo: "#f472b6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1775498011193-be0746a0e2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "seafood_lovers",
    userAvatar: "🦞",
    likes: 1834,
    comments: 45,
    caption: "Moules marinières - a French classic done right 🇫🇷",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
  {
    image:
      "https://images.unsplash.com/photo-1758796626175-cfbb6ed524d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "coastal_kitchen",
    userAvatar: "🌊",
    likes: 2341,
    comments: 78,
    caption: "Butter-poached lobster tails with herb butter 🦞✨",
    gradientFrom: "#fde68a",
    gradientTo: "#eab308",
  },
  {
    image:
      "https://images.unsplash.com/photo-1775760306749-e950e57494af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "pastry_perfection",
    userAvatar: "🍰",
    likes: 1923,
    comments: 103,
    caption: "Berry cream parfait - layers of heaven 💖",
    gradientFrom: "#f9a8d4",
    gradientTo: "#f472b6",
  },
  {
    image:
      "https://images.unsplash.com/photo-1764397514672-63b1a7a79110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxnb3VybWV0JTIwZm9vZCUyMHBsYXRlJTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzU3OTM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "mediterranean_soul",
    userAvatar: "🫒",
    likes: 1456,
    comments: 62,
    caption: "Grilled octopus with fresh herbs and olive oil 🐙",
    gradientFrom: "#fdba74",
    gradientTo: "#f97316",
  },
  {
    image:
      "https://images.unsplash.com/photo-1641834992266-0524e539220a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8Z291cm1ldCUyMGZvb2QlMjBwbGF0ZSUyMGZpbmUlMjBkaW5pbmd8ZW58MXx8fHwxNzc1NzkzNjE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    username: "garden_plate",
    userAvatar: "🌱",
    likes: 1078,
    comments: 41,
    caption: "Farm-fresh salad with edible flowers 🌸🥗",
    gradientFrom: "#86efac",
    gradientTo: "#4ade80",
  },
];

const TABS = [
  { label: "For You", emoji: "✨" },
  { label: "Following", emoji: "👥" },
  { label: "Trending", emoji: "🔥" },
];

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState("For You");
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* ── Hero ── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #ffedd5 50%, #fefce8 100%)",
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
              <Camera size={16} color="#ec4899" style={{ width: 16, height: 16 }} />
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#ec4899",
                }}
              >
                Foodies Community
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
              Community Feed 📸
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
              Share culinary moments and discover inspiration from food lovers worldwide 🌍💕
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Tabs ── */}
      <section
        style={{
          position: "sticky",
          top: "64px",
          zIndex: 40,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          borderBottom: "1px solid #fce7f3",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            gap: "2rem",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {TABS.map((tab, i) => {
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontWeight: isActive ? "700" : "600",
                  fontSize: "1rem",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: isActive ? "#db2777" : "#6b7280",
                  transition: "all 0.25s ease",
                }}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(135deg, #f472b6, #fb923c)",
                      borderRadius: "9999px",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Feed Grid ── */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "3rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="feed-grid"
        >
          {POSTS.map((post, i) => {
            const isLiked = likedPosts[i];
            const isBookmarked = bookmarkedPosts[i];
            
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.05 }}
                whileHover={{ y: -5 }}
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
                      "0 15px 40px rgba(0,0,0,0.12)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.08)")
                  }
                >
                  {/* User Info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #f9a8d4, #fdba74)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.25rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      {post.userAvatar}
                    </div>
                    <span
                      style={{
                        fontWeight: "600",
                        color: "#1f2937",
                        fontSize: "0.95rem",
                      }}
                    >
                      {post.username}
                    </span>
                  </div>

                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      marginBottom: "1rem",
                      cursor: "pointer",
                      borderRadius: "1rem",
                      overflow: "hidden",
                      aspectRatio: "1 / 1",
                    }}
                    className="feed-img-wrapper"
                  >
                    <ImageWithFallback
                      src={post.image}
                      alt={post.caption}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s",
                      }}
                      className="feed-img"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to top, ${post.gradientTo}4d, transparent)`,
                        opacity: 0,
                        transition: "opacity 0.3s",
                        pointerEvents: "none",
                      }}
                      className="feed-overlay-gradient"
                    />

                    {/* Hover Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.4)",
                        opacity: 0,
                        transition: "opacity 0.3s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2rem",
                        borderRadius: "1rem",
                      }}
                      className="feed-hover-overlay"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "white",
                        }}
                      >
                        <Heart fill="white" size={24} style={{ width: 24, height: 24 }} />
                        <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                          {isLiked ? (post.likes + 1).toLocaleString() : post.likes.toLocaleString()}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "white",
                        }}
                      >
                        <MessageCircle fill="white" size={24} style={{ width: 24, height: 24 }} />
                        <span style={{ fontWeight: "600", fontSize: "1.1rem" }}>
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <button
                      onClick={() => setLikedPosts((prev) => ({ ...prev, [i]: !prev[i] }))}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      className="feed-action-btn"
                    >
                      <Heart
                        size={22}
                        color={isLiked ? "#ec4899" : "#6b7280"}
                        fill={isLiked ? "#ec4899" : "none"}
                        style={{ width: 22, height: 22, transition: "transform 0.2s" }}
                      />
                    </button>
                    <button
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      className="feed-action-btn"
                    >
                      <MessageCircle
                        size={22}
                        color="#3b82f6"
                        style={{ width: 22, height: 22, transition: "transform 0.2s" }}
                      />
                    </button>
                    <button
                      onClick={() => setBookmarkedPosts((prev) => ({ ...prev, [i]: !prev[i] }))}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginLeft: "auto" }}
                      className="feed-action-btn"
                    >
                      <Bookmark
                        size={22}
                        color={isBookmarked ? "#eab308" : "#6b7280"}
                        fill={isBookmarked ? "#eab308" : "none"}
                        style={{ width: 22, height: 22, transition: "transform 0.2s" }}
                      />
                    </button>
                  </div>

                  {/* Likes count */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      marginBottom: "0.5rem",
                      color: "#4b5563",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "700",
                        background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {isLiked ? (post.likes + 1).toLocaleString() : post.likes.toLocaleString()}
                    </span>{" "}
                    likes
                  </p>

                  {/* Caption */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#374151",
                      lineHeight: "1.5",
                    }}
                  >
                    <span style={{ fontWeight: "600", marginRight: "0.25rem" }}>
                      {post.username}
                    </span>
                    {post.caption}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── Upload CTA ── */}
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
            <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <Camera size={60} color="#db2777" style={{ width: 60, height: 60 }} />
                <Sparkles
                  size={24}
                  color="#eab308"
                  style={{
                    position: "absolute",
                    top: "-0.5rem",
                    right: "-0.5rem",
                    width: 24,
                    height: 24,
                  }}
                />
              </div>
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
              Share Your Creation
            </h2>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#374151",
                marginBottom: "2.5rem",
                lineHeight: "1.75",
              }}
            >
              Join thousands of food lovers showcasing their culinary art! 📸✨
            </p>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.1rem 2.75rem",
                background: "linear-gradient(135deg, #f472b6, #fb923c, #facc15)",
                color: "white",
                borderRadius: "9999px",
                border: "none",
                fontWeight: "700",
                fontSize: "1rem",
                fontFamily: "inherit",
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(249,115,22,0.3)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(249,115,22,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(249,115,22,0.3)";
              }}
            >
              <Camera size={24} style={{ width: 24, height: 24 }} />
              <span>Upload Photo</span>
            </button>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .feed-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .feed-grid { grid-template-columns: 1fr !important; }
        }
        .feed-img-wrapper:hover .feed-img { transform: scale(1.1) !important; }
        .feed-img-wrapper:hover .feed-overlay-gradient { opacity: 0.2 !important; }
        .feed-img-wrapper:hover .feed-hover-overlay { opacity: 1 !important; }
        .feed-action-btn:hover svg { transform: scale(1.15) !important; }
      `}</style>
    </div>
  );
}
