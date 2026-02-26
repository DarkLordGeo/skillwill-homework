// import React from 'react'
import { useNavigate } from 'react-router'
import useFetchUsers from '../hooks/queries/useFetchUsers'

const Users = () => {

    const { data, isLoading, error } = useFetchUsers()
    // console.log(data)

    if (isLoading) {
        <h1>loading...</h1>
    }
    if (error) {
        <h1>error {error.message}</h1>
    }
    const navigate = useNavigate()

    return (
        <div>
            <h1>users</h1>
            {data?.map(({ email, id, name, username }) => (
                <div
                    onClick={() => navigate(`/user/${id}`)}
                    key={id} style={{ border: "1px solid gray", padding: "10px 15px", margin: "10px ", cursor: "pointer" }}>
                    <h2>{email}</h2>
                    <h2>{name}</h2>
                    <h2>{username}</h2>
                </div>
            ))}
        </div>
    )
}

export default Users
