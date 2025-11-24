import { createContext, useContext, useState } from "react";

const languageContext = createContext()

export const LanguageContextElement = ({ children }) => {

    const [language, setLanguage] = useState("ka")

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => prevLanguage === "en" ? "ka" : "en")
    }
    return (
        <languageContext.Provider value={{ language, toggleLanguage }} >
            {children}
        </languageContext.Provider>
    )
}
export const useLanguage = () => {
    return useContext(languageContext)
}