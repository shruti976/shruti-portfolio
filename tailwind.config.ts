import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Helvetica", "Arial", "sans-serif"]
      },
      colors: {
        ink: "#0B1021",
        mist: "#F7F8FA",
      },
      boxShadow: {
        soft: "0 10px 20px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
