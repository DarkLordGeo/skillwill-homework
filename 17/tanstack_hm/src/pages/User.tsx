import React from 'react'
import { useParams } from 'react-router'
import useFetchUser from '../hooks/queries/useFetchUser'
const User = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useFetchUser(id!)
    if (isLoading) {
        <h1>loading...</h1>
    }
    if (error) {
        <h1>error {error.message}</h1>
    }

    return (
        <div>
            <h1>user {data?.name}</h1>
            <h2>email: {data?.email}</h2>
            <h3>username: {data.username}</h3>
            <h4>id:{data.id}</h4>
        </div>
    )
}

export default User
