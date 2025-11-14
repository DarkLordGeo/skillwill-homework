import { Children } from "react"
import About from "./components/About"
import FactPage from "./components/FactPage"
import NotFound from "./components/NotFound"

const router = [
    {
        element: <About />,
        path: "/"
    },
    {
        element: <FactPage />,
        path: "/facts",
    },
    {
        element: <FactPage />,
        path: "/facts/:factId",
    },
    {
        element: <NotFound />,
        path: "*"
    }
]
export default router