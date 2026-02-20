import { useEffect, useState } from "react"

export const useWindowSize = (status = false) => {
    const [isMobile, setIsMobile] = useState(status)
    // console.log(isMobile)
    useEffect(() => {
        const resizeEvent = () => {
            setIsMobile(true ? window.innerWidth <= 425 : false)
        }
        window.addEventListener("resize", resizeEvent)
        return () => {
            window.removeEventListener("resize", resizeEvent)
        }
    }, [isMobile])

    return [isMobile, setIsMobile]

} 