import styles from './CoffeCup.module.scss'

export interface CoffeeCupProps {
    fill?: string;
    width?: number;
    height?: number;
    animated?: boolean;
}

export default function CoffeCup(props: CoffeeCupProps) {


    return (
        <svg role='none' version="1.0" xmlns="http://www.w3.org/2000/svg" width={props.width ?? 100} height={props.height ?? 100} viewBox="0 0 1080.000000 1080.000000" preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)" fill={props.fill ?? '#fdf7ec'} stroke="none">
                {/** MIDDLE FUMEE */}
                <path d="M4415 9684 c-22 -7 -41 -14 -42 -14 -8 0 -64 -101 -118 -210 -112
-224 -152 -375 -142 -534 10 -161 64 -290 227 -541 168 -260 213 -373 191
-483 -15 -75 -67 -185 -143 -300 -52 -78 -61 -100 -61 -137 0 -82 63 -139 146
-132 60 5 82 26 152 138 257 415 246 600 -63 1071 -111 170 -143 231 -167 323
-36 139 -10 251 112 493 93 184 100 215 68 270 -33 55 -98 78 -160 56z" className={props.animated ? styles.firstOne : ''}>
                </path>
                {/** LEFT FUMEE */}
                <path d="M2945 8426 c-45 -20 -57 -38 -140 -201 -119 -235 -162 -394 -152
-559 10 -162 70 -304 235 -551 155 -233 203 -359 182 -472 -12 -68 -61 -171
-131 -278 -68 -104 -81 -137 -73 -181 15 -78 88 -125 164 -104 51 14 76 40
145 151 244 395 232 586 -65 1039 -119 181 -150 242 -175 335 -39 153 2 316
145 565 39 68 50 97 50 131 0 48 -26 101 -58 118 -34 18 -95 22 -127 7z" className={props.animated ?  styles.firstTwo : ''}></path>
                {/** RIGHT FUMEE */}
                <path d="M6044 8426 c-42 -18 -71 -60 -137 -191 -67 -135 -98 -207 -129 -305
-19 -64 -23 -96 -23 -215 0 -122 3 -150 25 -215 34 -105 92 -213 202 -380 239
-362 245 -460 47 -765 -74 -115 -84 -160 -47 -215 47 -70 132 -86 194 -37 31
24 115 151 167 252 162 314 135 499 -131 907 -156 239 -192 325 -192 456 0
109 27 194 122 381 59 117 88 185 88 208 0 52 -26 92 -73 114 -50 22 -71 23
-113 5z" className={props.animated ? styles.firstThree : ''}></path>
                <path d="M1925 5713 c-45 -7 -93 -48 -105 -91 -8 -26 -10 -368 -8 -1172 4
-1027 6 -1145 22 -1240 51 -306 113 -501 238 -757 207 -422 567 -804 983
-1042 l89 -51 -822 0 c-896 0 -855 3 -901 -56 -46 -59 -30 -155 34 -194 32
-20 39 -20 3421 -20 3344 0 3389 0 3421 20 88 54 81 197 -12 236 -29 12 -191
14 -1067 14 l-1033 0 72 40 c92 50 205 125 313 209 468 363 799 899 909 1474
45 237 46 256 46 1422 0 1070 -1 1111 -19 1141 -10 17 -33 40 -50 50 -30 18
-105 19 -2766 20 -1504 1 -2748 -1 -2765 -3z m5325 -1290 c0 -616 -4 -1054
-10 -1108 -103 -916 -763 -1666 -1667 -1894 -212 -53 -255 -56 -903 -56 -535
0 -618 2 -719 18 -883 140 -1583 779 -1802 1643 -63 251 -62 229 -66 1372 l-4
1042 2585 0 2586 0 0 -1017z" className="first-4"></path>
                <path d="M6605 4890 c-27 -11 -61 -49 -74 -83 -7 -19 -11 -241 -11 -673 0
-699 -1 -688 55 -732 60 -47 155 -31 195 33 20 32 20 48 20 701 0 653 -1 670
-20 702 -31 51 -109 76 -165 52z" className="first-5"></path>
                <path d="M8185 5409 c-168 -22 -406 -96 -465 -145 -78 -66 -55 -191 43 -229
40 -15 46 -15 88 1 154 58 251 85 362 100 424 56 687 -90 778 -433 16 -57 23
-121 26 -239 15 -449 -94 -793 -300 -947 -74 -56 -118 -76 -222 -102 -131 -33
-253 -40 -441 -24 -87 8 -192 14 -232 14 -72 0 -74 -1 -107 -37 -44 -47 -53
-95 -29 -144 39 -77 67 -86 352 -104 538 -36 852 88 1053 414 131 213 201 518
201 871 0 304 -55 504 -189 693 -169 238 -530 360 -918 311z" className="first-6"></path>
                <path d="M8791 1342 c-88 -47 -93 -181 -9 -232 31 -19 50 -20 283 -20 233 0
252 1 283 20 67 41 80 150 24 202 -50 47 -59 48 -309 48 -212 0 -242 -2 -272
-18z" className="first-7"></path>
            </g>
        </svg>
    )
}