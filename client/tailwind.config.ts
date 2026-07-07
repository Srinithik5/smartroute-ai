import type { Config } from 'tailwindcss';

/**
 * SmartRoute AI brand tokens — DO NOT add colors beyond these three.
 * Neutrals (white/black/gray) are for text, borders, shadows, and
 * accessibility states only, per the approved design contract.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#000080',
          background: '#FEFFFE',
          accent: '#E5FCF5',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      keyframes: {
        srPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '.7' },
        },
        srSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        srFadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        srFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        srWave: {
          '0%, 100%': { height: '6px' },
          '50%': { height: '22px' },
        },
        srDash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        srPulse: 'srPulse 1.8s ease-in-out infinite',
        srSpin: 'srSpin .7s linear infinite',
        srFadeUp: 'srFadeUp .6s ease both',
        srFloat: 'srFloat 3.5s ease-in-out infinite',
        srWave: 'srWave .5s ease-in-out infinite',
        srDash: 'srDash 2s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;