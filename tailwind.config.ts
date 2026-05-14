import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EA",
        butter: "#FFE6A6",
        saffron: "#F8B629",
        orange: "#EE7623",
        burnt: "#B8511B",
        cocoa: "#5D2E18",
        clay: "#C97B38",
        leaf: "#4F7C46"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(119, 67, 22, 0.13)",
        glow: "0 20px 60px rgba(238, 118, 35, 0.22)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" }
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(18px, -14px, 0) scale(1.04)" }
        },
        "story-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(-1.4deg)" },
          "50%": { transform: "translate3d(0, -16px, 0) rotate(1.4deg)" }
        },
        "soft-shine": {
          "0%": { transform: "translateX(-140%) rotate(12deg)", opacity: "0" },
          "20%": { opacity: "0.35" },
          "55%": { opacity: "0.18" },
          "100%": { transform: "translateX(180%) rotate(12deg)", opacity: "0" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite",
        "story-float": "story-float 6.5s ease-in-out infinite",
        "soft-shine": "soft-shine 4.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
