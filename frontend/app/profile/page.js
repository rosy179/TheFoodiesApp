"use client";

import { motion } from "framer-motion";
import { User, Settings, Sparkles } from "lucide-react";

export default function ProfilePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fafafa" }}>
      <section
        style={{
          background:
            "linear-gradient(135deg, #fce7f3 0%, #ffedd5 50%, #fefce8 100%)",
          padding: "5rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
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
            <div
              style={{
                width: "120px",
                height: "120px",
                margin: "0 auto 1.5rem",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #fb923c, #f97316)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 30px rgba(249,115,22,0.3)",
              }}
            >
              <User size={50} color="white" style={{ width: 50, height: 50 }} />
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#ea580c",
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              My Profile
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#4b5563",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Manage your culinary adventures and saved recipes 🌟
            </p>

            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.8rem 2rem",
                background: "white",
                color: "#ea580c",
                borderRadius: "9999px",
                border: "2px solid #fed7aa",
                fontWeight: "600",
                fontSize: "1rem",
                fontFamily: "inherit",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(249,115,22,0.1)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Settings size={18} style={{ width: 18, height: 18 }} />
              Settings
            </button>
          </motion.div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1000px",
          margin: "5rem auto",
          padding: "0 1.5rem",
          textAlign: "center",
          color: "#9ca3af",
        }}
      >
        <Sparkles size={40} style={{ margin: "0 auto 1rem", width: 40, height: 40 }} />
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#6b7280" }}>
          More features coming soon...
        </h2>
      </section>
    </div>
  );
}
