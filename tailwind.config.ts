import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bilbo' : ["var(--font-bilbo)"]
      },
      colors: {
        'my-white' : '#fdf7ec',
        'my-black' : '#382208',
        'my-brown' : '#D4C09E',
        'my-dark-blue': '#2C4F57',
        'my-blue': '#A8C7D0'
      },
      screens: {
        'xs': '400px'
      },
      width: {
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
        '1100': '1100px',
      },
      height:  {
        'fit-view' : 'calc(100vh - 64px)'
      },
      maxHeight:  {
        'fit-view' : 'calc(100vh - 64px)'
      },
      fontSize: {
        normal: '1.2rem',
        h1: '3rem',
        h2: '2.7rem',
        h3: '1.6rem',
        h4: '1.4rem',
        mobileBase: '1.3rem',
        base: '1.5rem',
        x3xl: ['2.15rem', '2.3rem'],
        x2xl: ['2.05rem', '2.2rem'],
        x6demixl: '4rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ],
}
export default config
