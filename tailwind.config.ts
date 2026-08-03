import type { Config } from "tailwindcss";

const config: Config = {
    content: [
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
        ],
    theme: {
          extend: {
                  colors: {
                            primary: "#2D7A77",
                            "primary-dark": "#1E5957",
                            mint: "#EAF4F2",
                            ink: "#1F3A3D",
                            muted: "#6B7878",
                  },
          },
    },
    plugins: [],
};

export default config;
