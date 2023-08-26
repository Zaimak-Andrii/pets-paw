import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-page-responsive':
          "image-set(url('/images/image-main-page@1x.webp') 1x, url('/images/image-main-page@2x.webp') 2x)",
        upload: "url('/images/upload-bg.svg')",
        'select-arrow': "url('/images/select-arrow.svg')",
      },
      transitionProperty: {
        border: 'border-color',
      },
      colors: {
        transparent: 'transparent',
        light: '#f8f8f8',
        dark: '#1d1d1d',
        primary: '#8C8C8C',
        white: '#FFFFFF',
        purple: '#B4B7FF',
        amber: '#FFD280',
        'light-green': '#97EAB9',
        'light-red': '#FF868E',
        rose: '#FBE0DC',
      },
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hover-not-focus', '&:hover:not(:focus-within)');
    }),
    plugin(function ({ addVariant }) {
      addVariant('hover-not-disabled', '&:hover:not(:disabled)');
    }),
    plugin(function ({ addVariant }) {
      addVariant('grid-1-8', ['&:nth-child(10n + 1)', '&:nth-child(10n + 8)']);
    }),
    plugin(function ({ addVariant }) {
      addVariant('grid-4-9', ['&:nth-child(10n + 4)', '&:nth-child(10n + 9)']);
    }),
  ],
};
export default config;
