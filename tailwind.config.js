/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // ── Brand Colors ──
      colors: {
        primary:   '#010C2A',  // dark navy
        secondary: '#219BE4',  // brand blue
      },

      // ── Typography ──
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],  // used for headings
      },

      // ── Shadows ──
      boxShadow: {
        large:  '0px 0px 30px 10px',
        glow:   '0 0 30px rgba(33, 155, 228, 0.4)',
        'glow-lg': '0 0 60px rgba(33, 155, 228, 0.3)',
      },

      // ── Animations ──
      animation: {
        'spin-slow':  'spin 3s linear infinite',
        'fade-in':    'fadeIn 0.5s ease-in-out',
        'slide-up':   'slideUp 0.6s ease-out',
        'float':      'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },

      // ── Keyframes ──
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(33, 155, 228, 0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(33, 155, 228, 0)' },
        },
      },

      // ── Border Radius ──
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
