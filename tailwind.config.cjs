/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    // extend: {
    //   colors: {
    //     primary: {
    //       100: '#532451',
    //       200: '#753372',
    //       300: '#F8EEF7',
    //       400: '#FBF7FB',
    //     },
    //     shades: {
    //       100: '#4C3E4B',
    //       200: '#796E78',
    //       300: '#A59FA5',
    //       400: '#D2CFD2',
    //       500: '#F0EFF0',
    //       600: '#FAFAFA',
    //       700: '#FFFFFF',
    //     },
    //     error: {
    //       100: '#E94D2B',
    //       300: '#FCEDE9',
    //     },
    //     success: {
    //       100: '#37B24D',
    //       200: '#E8F4E9',
    //     },
    //     neutrals: {
    //       100: "#341733",
    //     },
    //     steel: '#555555',
    //     gold: '#CFA352',
    //   },
    //   boxShadow: {
    //     'dropdownDefault': '0px 4px 36px rgba(0, 0, 0, 0.05)',
    //     'actionBar': '0px 6px 14px -6px rgba(51, 51, 51, 0.1), 0px 10px 32px -4px rgba(51, 51, 51, 0.05)',
    //     'onlineCircle': '0 0 0 1px #FFFFFF',
    //     'header': '0px 2px 12px rgba(20, 20, 43, 0.08)',
    //   },
    //   fontFamily: {
    //     macpaw: ['MacPawFixel'],
    //     sans: ['MacPawFixel', 'sans-serif'],
    //   },
    //   fontSize: {
    //     xxl: ['1.375rem', '1.75rem'],
    //   },
    //   lineHeight: {
    //     'extra-3': '0.875rem',
    //     'extra-4': '1.188rem',
    //     'extra-6': '1.625rem',
    //   },
    //   gridTemplateColumns: {
    //     'auto-fill-7': 'repeat(auto-fill, 7rem)',
    //     'auto-fill-10': 'repeat(auto-fill, 10rem)',
    //     'auto-fill-12': 'repeat(auto-fill, 12rem)',
    //     'auto-fill-minmax-12': 'repeat(auto-fill, minmax(12rem, 1fr))',
    //     'auto-fill-18': 'repeat(auto-fill, 18rem)',
    //   },
    //   keyframes: {
    //     fadeInFromNone: {
    //       '0%': { display: 'none', opacity: "0" },
    //       '1%': { display: 'block', opacity: "0" },
    //       '100%': { display: 'block', opacity: "1" },
    //     },
    //     fadeInModalOpen: {
    //       '0%': { display: 'none', opacity: "0", transform: "scale(0.98)" },
    //       '1%': { display: 'block', opacity: "0", transform: "scale(0.98)" },
    //       '100%': { display: 'block', opacity: "1", transform: "scale(1)" },
    //     },
    //     fadeInModalClose: {
    //       '0%': { display: 'block', opacity: "1", transform: "scale(1)" },
    //       '1%': { display: 'none', opacity: "1", transform: "scale(0.98)" },
    //       '100%': { display: 'none', opacity: "0", transform: "scale(0.98)" },
    //     }
    //   },
    //   animation: {
    //     fadeInFromNone: 'fadeInFromNone 0.3s ease-in-out',
    //     fadeInModalOpen: 'fadeInModalOpen 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
    //     fadeInModalClose: 'fadeInModalClose 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    //   },
    // },
    // screens: {
    //   sm: '480px',
    //   smMax: { 'max': '479px' },
    //   md: '768px',
    //   mdMax: { 'max': '767px' },
    //   lg: '976px',
    //   lgMax: { 'max': '975px' },
    //   xl: '1440px',
    //   xlMax: { 'max': '1439px' },

    // },
    // fontSize: {
    //   xs: ['0.75rem', '1.25rem'],
    //   sm: ['0.875rem', '1.375rem'],
    //   base: ['1rem', '1.5rem'],
    //   lg: ['1.125rem', '1.5rem'],
    //   xl: ['1.25rem', '1.75rem'],
    //   '2xl': ['1.5rem', '2rem'],
    //   '3xl': ['1.688rem', '2.125rem'],
    //   '4xl': ['1.75rem', '2.25rem'],
    //   '5xl': ['2rem', '2.5rem'],
    //   '6xl': ['2.5rem', '2.875rem'],
    // },
  },
}
