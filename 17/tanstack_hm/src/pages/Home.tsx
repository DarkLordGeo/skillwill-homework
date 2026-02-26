import React from 'react'
import useFetchUsers from '../hooks/queries/useFetchUsers'
const Home: React.FC = () => {
    const { data } = useFetchUsers()
    console.log(data)
    return (
        <div>
            <h1>home page</h1>
        </div>
    )
}

export default Home
