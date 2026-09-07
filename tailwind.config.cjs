/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public_html/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        canvas: '#FAF9F6',
        surface: '#FFFFFF',
        brand: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          accent: '#00E5BE',
          coral: '#FF6B6B',
          sun: '#FFD13B',
          indigo: '#1855F4',
          violet: '#7C3AED',
        },
        ink: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        }
      },
      boxShadow: {
        'menti-sm': '0 2px 8px -2px rgba(15, 23, 42, 0.05)',
        'menti': '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 4px 12px -4px rgba(15, 23, 42, 0.03)',
        'menti-lg': '0 20px 40px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)',
        'menti-highlight': '0 0 0 3px rgba(0, 229, 190, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
