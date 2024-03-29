/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-000": "var(--black-000)",
        "black-100": "var(--black-100)",
        "black-1000": "var(--black-1000)",
        "black-200": "var(--black-200)",
        "black-500": "var(--black-500)",
        "black-700": "var(--black-700)",
        "black-800": "var(--black-800)",
        "primary-100": "var(--primary-100)",
        "primary-1000": "var(--primary-1000)",
        "primary-1100": "var(--primary-1100)",
        "primary-50": "var(--primary-50)",
        "primary-500": "var(--primary-500)",
        "secondary-1000": "var(--secondary-1000)",
        "secondary-500": "var(--secondary-500)",
      },
      fontFamily: {
        "primary-h1": "var(--primary-h1-font-family)",
        "primary-h2": "var(--primary-h2-font-family)",
        "primary-h3": "var(--primary-h3-font-family)",
        "primary-h4": "var(--primary-h4-font-family)",
        "primary-h5": "var(--primary-h5-font-family)",
        "primary-microcopy": "var(--primary-microcopy-font-family)",
        "secondary-body-1": "var(--secondary-body-1-font-family)",
        "secondary-body-2": "var(--secondary-body-2-font-family)",
        "secondary-body-3": "var(--secondary-body-3-font-family)",
        "secondary-body-4": "var(--secondary-body-4-font-family)",
        "secondary-body-5": "var(--secondary-body-5-font-family)",
        "secondary-microcopy-01": "var(--secondary-microcopy-01-font-family)",
        "secondary-mirco-02": "var(--secondary-mirco-02-font-family)",
        "tertiary-body-1": "var(--tertiary-body-1-font-family)",
        "tertiary-body-2": "var(--tertiary-body-2-font-family)",
      },
    },
  },
  plugins: [],
};
