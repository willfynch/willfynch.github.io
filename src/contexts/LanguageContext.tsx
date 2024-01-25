import React, { createContext, useState } from 'react'

export const LanguageContext = createContext('fr')

export default function LanguageContextProvider(props:any){

    function getLocale(): string {
        return navigator.languages[0] ?? 'fr'
    }
    
    const [lang, setLang] = useState(getLocale())
    const value = {lang, setLang}

    return (
        <>
        {/*@ts-ignore*/}
         <LanguageContext.Provider value={value}>
               {props.children}
         </LanguageContext.Provider>
         </>
    )
}
