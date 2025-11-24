import React from 'react'

import { useLanguage } from '../context/LanguageContext'

const Header = () => {
    const { language, toggleLanguage } = useLanguage()
    const translation = {
        en: {
            header: "Todo app",
            language: "ka"
        },
        ka: {
            header: "Todo აპი",
            language: "en"
        }
    }

    return (
        <header style={{ width: "500px", border: "1px solid red" }}>
            <button onClick={toggleLanguage}>{translation[language].language}</button>
            <h1>{translation[language].header}</h1>
        </header>
    )
}

export default Header
