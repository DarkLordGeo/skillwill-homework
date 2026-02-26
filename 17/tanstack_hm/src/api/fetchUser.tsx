import fetchApi from "./fetchUsers"
export default async function fetchUserData(id: string) {
    const res = await fetchApi.get(`/users/${id}`)
    return res.data
}