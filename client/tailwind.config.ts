import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000080',
          hover: '#0000a8',
        },
        background: '#FEFFFE',
        accent: '#E5FCF5',
        ink: '#0b0d17',
        body: '#3d4454',
        muted: '#6b7280',
        subtle: '#8a92a3',
        border: {
          DEFAULT: '#eceef2',
          strong: '#dde1e8',
        },
        surface: {
          DEFAULT: '#F5F6F8',
          alt: '#F7FAF9',
        },
        navy: {
          deep: '#00005e',
          muted: '#a9adc9',
          subtle: '#c7cbe0',
          'label-inactive': '#e7e9f5',
          'dot-inactive': '#8a8fc0',
          grid: '#0a0a94',
        },
        // Semantic status colors (form validation / password strength / alerts only —
        // never used for brand, nav, or primary actions). 'success' reuses the exact
        // green already present in the prototype's dashboard trend text (#1a8f5c).
        danger: '#d64545',
        warning: '#e0a53e',
        success: '#1a8f5c',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '10px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '28px',
        pill: '100px',
      },
      boxShadow: {
        'brand-btn': '0 12px 24px -8px rgba(0,0,128,0.35)',
        'brand-hover': '0 20px 40px -16px rgba(0,0,128,0.18)',
        'brand-hero': '0 40px 80px -30px rgba(0,0,128,0.45)',
        'brand-panel': '0 30px 60px -20px rgba(0,0,128,0.35)',
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
        srShimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
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
        srBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        srRingGrow: {
          from: { strokeDasharray: '0 999' },
        },
      },
      animation: {
        srPulse: 'srPulse 1.8s ease-in-out infinite',
        srSpin: 'srSpin 1s linear infinite',
        srShimmer: 'srShimmer 1.6s linear infinite',
        srFadeUp: 'srFadeUp .6s ease both',
        srFloat: 'srFloat 3.4s ease-in-out infinite',
        srWave: 'srWave 1s ease-in-out infinite',
        srDash: 'srDash 2.4s linear infinite',
        srBlink: 'srBlink 1s step-end infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;