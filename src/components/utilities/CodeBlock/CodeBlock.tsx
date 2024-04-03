import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark'

export default function CodeBlock({ children, language }: { children: any, language: any }) {
    return (
        <>
         {/*@ts-ignore */}
        <SyntaxHighlighter children={children || ''} language={language || 'jsx'} style={atomOneDark} />
                
       </>
    )
}