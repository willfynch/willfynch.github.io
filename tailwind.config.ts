import type { Config } from 'tailwindcss'

const config: Config = {
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
        'my-black' : '#502c15'
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
        mobileBase: '1.1rem',
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
  plugins: [],
}
export default config
