import type { Config } from 'tailwindcss';

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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        border: 'border-color',
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1440px',
    },
    colors: {
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
  plugins: [],
};
export default config;
