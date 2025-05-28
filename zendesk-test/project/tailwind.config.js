/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#D8E1FF',
          200: '#B1C3FF',
          300: '#8AA5FF',
          400: '#6387FF',
          500: '#3366CC',
          600: '#2851A3',
          700: '#1E3C7A',
          800: '#142852',
          900: '#0A1429',
        },
        secondary: {
          50: '#E6FFF6',
          100: '#CCFFED',
          200: '#99FFDB',
          300: '#66FFC9',
          400: '#33FFB6',
          500: '#00A878',
          600: '#008660',
          700: '#006548',
          800: '#004330',
          900: '#002218',
        },
        accent: {
          50: '#FFF5EB',
          100: '#FFE6D1',
          200: '#FFCDA3',
          300: '#FFB475',
          400: '#FF9B47',
          500: '#FF8C42',
          600: '#CC7035',
          700: '#995428',
          800: '#66381B',
          900: '#331C0D',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};