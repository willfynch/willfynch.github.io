import { useState } from "react"

/**
 * @TODO
 * https://www.npmjs.com/package/next-translate
 * 
 */

export default function LanguageWidget(){
    const [lang, setLang]= useState('english')

    function switchLang(){
        if(lang==='english'){
            setLang('french');
        }
        else{
            setLang('english')
        }
    }

    return(
        <div onClick={e => switchLang()} className="hidden shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] flex justify-center fixed w-10 h-10 right-1 bottom-5 transition-all text-slate-200 bg-slate-900 font-semibold hover:bg-slate-200 hover:text-slate-900" >
            <button  className="flex flex-col justify-center items-center">
                {lang==='english' && <span>EN</span>}
                {lang==='french' && <span>FR</span>}
            </button>
        </div>
    )
}