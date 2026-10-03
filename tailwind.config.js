/** @type {import('tailwindcss').Config} */
// Reproduces the former inline `tailwind.config` object from index.html exactly.
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    "extend": {
      "colors": {
        "on-surface-variant": "#c4c5d9",
        "outline-variant": "#434656",
        "inverse-primary": "#104af0",
        "background": "#11131c",
        "on-secondary-fixed": "#002022",
        "surface-container-lowest": "#0c0e17",
        "secondary-container": "#00eefc",
        "secondary": "#d3fbff",
        "tertiary-container": "#c24100",
        "surface-variant": "#33343e",
        "primary": "#b8c3ff",
        "surface-container-high": "#282933",
        "on-tertiary-fixed-variant": "#812900",
        "surface-container-low": "#191b24",
        "on-secondary-fixed-variant": "#004f54",
        "on-secondary-container": "#00686f",
        "on-error": "#690005",
        "on-surface": "#e2e1ef",
        "error": "#ffb4ab",
        "surface-container": "#1d1f29",
        "inverse-surface": "#e2e1ef",
        "surface-tint": "#b8c3ff",
        "surface": "#11131c",
        "surface-dim": "#11131c",
        "outline": "#8e90a2",
        "on-secondary": "#00363a",
        "on-error-container": "#ffdad6",
        "on-primary-fixed-variant": "#0035bd",
        "inverse-on-surface": "#2e303a",
        "tertiary": "#ffb59b",
        "tertiary-fixed-dim": "#ffb59b",
        "on-background": "#e2e1ef",
        "surface-container-highest": "#33343e",
        "secondary-fixed": "#7df4ff",
        "primary-fixed": "#dde1ff",
        "on-primary-fixed": "#001355",
        "tertiary-fixed": "#ffdbcf",
        "secondary-fixed-dim": "#00dbe9",
        "on-tertiary-container": "#ffece6",
        "on-primary": "#002387",
        "on-tertiary": "#5b1a00",
        "on-tertiary-fixed": "#380d00",
        "primary-container": "#2d5bff",
        "primary-fixed-dim": "#b8c3ff",
        "surface-bright": "#373943",
        "on-primary-container": "#efefff",
        "error-container": "#93000a"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "xl": "40px",
        "md": "16px",
        "xs": "4px",
        "gutter": "24px",
        "unit": "4px",
        "container-max": "1280px",
        "lg": "24px",
        "xxl": "80px",
        "sm": "8px"
      },
      "fontFamily": {
        "display-lg": [
          "Geist"
        ],
        "proof-label": [
          "JetBrains Mono"
        ],
        "headline-md": [
          "Geist"
        ],
        "technical-data": [
          "JetBrains Mono"
        ],
        "body-md": [
          "Inter"
        ],
        "headline-sm": [
          "Geist"
        ],
        "body-lg": [
          "Inter"
        ]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
