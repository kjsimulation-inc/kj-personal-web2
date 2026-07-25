/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050b14',
          900: '#070e17',
          850: '#0a1422',
          800: '#0c1726',
          700: '#112035',
          600: '#1b2d47',
        },
        cyan: {
          glow: '#00d2ff',
          neon: '#00ff88',
        }
      },
      fontFamily: {
        serif: ['Libre Caslon Text', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,210,255,0.4))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(0,210,255,0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
