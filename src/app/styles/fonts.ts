import { Bilbo_Swash_Caps } from 'next/font/google';
import localFont from 'next/font/local';


const now = localFont({
    src: '../../../public/fonts/Now-Regular.otf'

})

const bilbo = Bilbo_Swash_Caps({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bilbo',
})

export {now, bilbo}