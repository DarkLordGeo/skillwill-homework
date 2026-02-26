import { useQuery } from '@tanstack/react-query'
// import React from 'react'
import fetchUserData from '../../api/fetchUser'
import type { IUser } from '../../interfaces/user.interface'

const useFetchUser = (id: string) => {
    const result = useQuery<IUser[]>({
        queryKey: ["users"],
        queryFn: () => fetchUserData(id)
    })
    return result
}

export default useFetchUser
