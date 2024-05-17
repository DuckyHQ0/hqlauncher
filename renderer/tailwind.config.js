const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      // Instead of using text-h1, etc, use the classes found in the tailwind input file (/app/globals.css)
      h0: "100px",
      h1: "50px",
      h2: "36px",
      h3: "21px",
      "strong-body": "16px",
      body: "15px",
      sub: "12.4px",
      mono: "13px",
    },
    spacing: {
      256: "256px",
      200: "200px",
      128: "128px",
      110: "110px",
      96: "96px",
      86: "86px",
      72: "72px",
      64: "64px",
      56: "56px",
      48: "48px",
      36: "36px",
      32: "32px",
      30: "30px",
      28: "28px",
      24: "24px",
      20: "20px",
      18: "18px",
      16: "16px",
      12: "12px",
      10: "10px",
      8: "8px",
      6: "6px",
      4: "4px",
      0: "0px",
    },
    borderRadius: {
      24: "24px",
      32: "32px",
      out: "16px",
      in: "9px",
      small: "7px",
    },
    boxShadow: {
      "fg-2":
        "0px -6px 24px -2px rgba(0, 0, 0, 0.14) inset, 0px 0px 56px 0px rgba(0, 0, 0, 0.08)",
    },
    fontFamily: {
      // Instead of using font-mono, etc, use the classes found in the tailwind input file (for nextjs, /app/globals.css)
      sans: ["var(--font-outfit)"],
      mono: ["var(--font-jetbrains-mono)"],
    },
    backgroundImage: {
      "fg-1":
        "linear-gradient(to bottom,rgba(15, 15, 15, 0.75),rgba(15, 15, 15, 0.9))",
      "fg-2":
        "linear-gradient(to bottom,rgba(122,122,122,0.13),rgba(122,122,122,0.05))",
      "fg-2-active":
        "linear-gradient(to bottom,rgba(122,122,122,0.27),rgba(122,122,122,0.18))",
      "fg-2-disabled":
        "linear-gradient(to bottom,rgba(122,122,122,0.03),rgba(122,122,122,0.07))",
      "fg-3":
        "linear-gradient(to bottom,rgba(12, 12, 12, 0.45),rgba(0, 0, 0, 0.5))",
    },
    colors: {
      // ui styles
      "bg-1": "rgba(7,7,7,1)",
      "stroke-1": "rgba(255,255,255,0.09)",
      "stroke-2": "rgba(255,255,255,0.04)",
      "text-1": "rgba(222,222,222,1)",
      "text-subtle": "rgba(222,222,222,0.75)",
      "text-disabled": "rgba(255,255,255,0.30)",
      // colours
      selected: "#0db7ff",
      accent: "#0db7ff",
      "brand-blue": "#0db7ff",
      "brand-blue-2": "#007bff",
      "brand-purple": "#4e00ff",
      danger: "#F5254A",
      warning: "#EACA22",
      success: "#26D958",
      blue: "#0784F6",
      purple: "#BC4DFF",
      white: "#ffffff",
      black: "#000000",
      transparent: "#00000000",
    },
    extend: {
      backdropBlur: {
        "fg-1": "32px",
        "fg-2": "24px",
        "fg-3": "24px",
      },
      keyframes: {
        "scale-in": {
          from: { opacity: "0", transform: " scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "scale-out": {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.9)" },
        },
      },
      animation: {
        "scale-in": "scale-in 150ms ease-out",
        "scale-out": "scale-out 150ms ease-out",
      },
    },
  },
  plugins: [],
};
