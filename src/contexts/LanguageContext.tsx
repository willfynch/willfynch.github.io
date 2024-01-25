import React, { createContext, useState } from 'react'

export const LanguageContext = createContext('fr')

export default function LanguageContextProvider(props:any){
    const [lang, setLang] = useState('fr')
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
