import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
    return (
        <div>
            <h1>404 not found</h1>
            <Link
                to={"/"}
            >
                back to home
            </Link>
        </div>
    )
}

export default ErrorPage
