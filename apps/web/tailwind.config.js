const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-family)', ...fontFamily.sans],
      },
      colors: {
        background: 'rgb(var(--bg-color) / <alpha-value>)',
        font: 'rgb(var(--font-color) / <alpha-value>)',
        hl: 'rgb(var(--hl-color) / <alpha-value>)',
        foreground: 'rgb(var(--fg-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
