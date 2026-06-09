import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#6E4FF2",
          "violet-soft": "#EDE8FE",
          coral: "#FF6F61",
          honey: "#F5B947",
          ink: "#1B1530",
          "ink-soft": "#5A5470",
          cream: "#FAF6EF",
          surface: "#FFFFFF",
          success: "#3CB371",
        },
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
      borderRadius: {
        "3xl": "24px",
      },
      boxShadow: {
        card: "0 8px 30px rgba(27,21,48,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
