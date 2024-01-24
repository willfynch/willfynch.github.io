
import styles from './Button.module.scss'

export default function Button({children}: {children: React.ReactNode}){

    return (
        <button className={'py-2 px-4  bg-slate-800 hover:bg-slate-100 text-slate-100 hover:text-slate-800' + ' ' + styles.button}>
            {children}
        </button>
    )
}

module.exports = Button;