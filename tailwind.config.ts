import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "main-ham": "var(--main-ham)",
        "main-color-light": "var(--main-color-light)",
        "main-color-dark": "var(--main-color-dark)",
        "main-color-darker": "var(--main-color-darker)",
        "main-color-darkest": "var(--main-color-darkest)",
        "main-color-lighter": "var(--main-color-lighter)",
        "main-color-lightest": "var(--main-color-lightest)",
        "main-color-white": "var(--main-color-white)",
        "main-color-black": "var(--main-color-black)",
        "main-color-gray": "var(--main-color-gray)",
        "main-color-gray-dark": "var(--main-color-gray-dark)",
        "main-footer": "var(--main-footer)",
      },
    },
  },
  plugins: [],
}
export default config
