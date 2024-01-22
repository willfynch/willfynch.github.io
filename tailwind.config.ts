import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-white' : '#F1F5F9',
        'my-black' : '#1E293B'
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
        x3xl: ['2.15rem', '2.3rem']
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
