import { useQuery } from '@tanstack/react-query'
// import React from 'react'
import fetchUsersData from '../../api/fetchUsersData'
import type { IUser } from '../../interfaces/user.interface'

const useFetchUsers = () => {
    const result = useQuery<IUser[]>({
        queryKey: ["users"],
        queryFn: fetchUsersData
    })
    return result
}

export default useFetchUsers
