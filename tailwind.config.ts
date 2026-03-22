import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral palette — stone/amber tones
        warm: {
          50: "#FAFAF8",
          100: "#F5F4F0",
          200: "#E8E6DF",
          300: "#D5D2C8",
          400: "#B8B4A6",
          500: "#9B9685",
          600: "#7D7868",
          700: "#5F5B4E",
          800: "#433F36",
          900: "#2A2722",
          950: "#1A1815",
        },
        amber: {
          50: "#FFFBF0",
          100: "#FFF5DB",
          200: "#FFE9B3",
          300: "#FFDA82",
          400: "#FFC84D",
          500: "#F5A623",
          600: "#D48B0F",
          700: "#A66D0A",
          800: "#7A5008",
          900: "#533706",
          950: "#2E1F03",
        },
        sage: {
          50: "#F6F7F5",
          100: "#E8EBE4",
          200: "#D1D7C9",
          300: "#B3BDA6",
          400: "#919E80",
          500: "#728162",
          600: "#5A664D",
          700: "#454F3B",
          800: "#33392C",
          900: "#22261E",
          950: "#141612",
        },
        clay: {
          50: "#FBF6F4",
          100: "#F5EAE4",
          200: "#EBCFBF",
          300: "#DFB399",
          400: "#D0936F",
          500: "#BF7A52",
          600: "#A3623D",
          700: "#7D4B2F",
          800: "#583522",
          900: "#3A2317",
          950: "#20130D",
        },
        // Semantic colors
        surface: {
          DEFAULT: "#FAFAF8",
          raised: "#FFFFFF",
          sunken: "#F5F4F0",
          overlay: "rgba(42, 39, 34, 0.6)",
        },
        text: {
          primary: "#2A2722",
          secondary: "#5F5B4E",
          tertiary: "#9B9685",
          inverse: "#FAFAF8",
          link: "#A66D0A",
        },
        border: {
          DEFAULT: "#E8E6DF",
          subtle: "#F5F4F0",
          strong: "#D5D2C8",
          focus: "#F5A623",
        },
        accent: {
          DEFAULT: "#F5A623",
          hover: "#D48B0F",
          soft: "#FFF5DB",
          text: "#7A5008",
        },
        success: {
          DEFAULT: "#728162",
          soft: "#F6F7F5",
          text: "#454F3B",
        },
        caution: {
          DEFAULT: "#D0936F",
          soft: "#FBF6F4",
          text: "#7D4B2F",
        },
        error: {
          DEFAULT: "#C45D4F",
          soft: "#FDF2F0",
          text: "#8B3228",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Cal Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SF Mono",
          "Fira Code",
          "monospace",
        ],
        serif: [
          "Lora",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],          // 11px
        xs: ["0.75rem", { lineHeight: "1.125rem" }],            // 12px
        sm: ["0.8125rem", { lineHeight: "1.25rem" }],           // 13px
        base: ["0.9375rem", { lineHeight: "1.5rem" }],          // 15px
        lg: ["1.0625rem", { lineHeight: "1.625rem" }],          // 17px
        xl: ["1.25rem", { lineHeight: "1.75rem" }],             // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }],              // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],         // 30px
        "4xl": ["2.25rem", { lineHeight: "2.625rem" }],         // 36px
        "5xl": ["3rem", { lineHeight: "3.375rem" }],            // 48px
        "6xl": ["3.75rem", { lineHeight: "4.125rem" }],         // 60px
      },
      spacing: {
        "0.5": "0.125rem",   // 2px
        "1.5": "0.375rem",   // 6px
        "2.5": "0.625rem",   // 10px
        "3.5": "0.875rem",   // 14px
        "4.5": "1.125rem",   // 18px
        "13": "3.25rem",     // 52px
        "15": "3.75rem",     // 60px
        "18": "4.5rem",      // 72px
        "22": "5.5rem",      // 88px
        "26": "6.5rem",      // 104px
        "30": "7.5rem",      // 120px
        "34": "8.5rem",      // 136px
        "38": "9.5rem",      // 152px
        "42": "10.5rem",     // 168px
        "50": "12.5rem",     // 200px
        "60": "15rem",       // 240px
        "72": "18rem",       // 288px
        "84": "21rem",       // 336px
        "96": "24rem",       // 384px
      },
      maxWidth: {
        prose: "65ch",
        "content-sm": "540px",
        "content-md": "720px",
        "content-lg": "960px",
        "content-xl": "1140px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft-xs": "0 1px 2px 0 rgba(42, 39, 34, 0.03)",
        "soft-sm": "0 1px 3px 0 rgba(42, 39, 34, 0.04), 0 1px 2px -1px rgba(42, 39, 34, 0.03)",
        "soft": "0 4px 6px -1px rgba(42, 39, 34, 0.05), 0 2px 4px -2px rgba(42, 39, 34, 0.03)",
        "soft-md": "0 6px 10px -2px rgba(42, 39, 34, 0.06), 0 3px 6px -3px rgba(42, 39, 34, 0.04)",
        "soft-lg": "0 10px 15px -3px rgba(42, 39, 34, 0.06), 0 4px 6px -4px rgba(42, 39, 34, 0.03)",
        "soft-xl": "0 20px 25px -5px rgba(42, 39, 34, 0.07), 0 8px 10px -6px rgba(42, 39, 34, 0.03)",
        "soft-2xl": "0 25px 50px -12px rgba(42, 39, 34, 0.15)",
        "inner-soft": "inset 0 2px 4px 0 rgba(42, 39, 34, 0.04)",
        "glow": "0 0 20px rgba(245, 166, 35, 0.15)",
        "glow-lg": "0 0 40px rgba(245, 166, 35, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "fade-in-down": "fadeInDown 0.4s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.4s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "gentle-bounce": "gentleBounce 2s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "progress": "progress 1s ease-out forwards",
        "typewriter": "typewriter 0.05s steps(1) forwards",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        gentleBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7"