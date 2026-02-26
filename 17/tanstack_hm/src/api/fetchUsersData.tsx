import fetchApi from "./fetchUsers"
export default async function fetchUsersData() {
    const res = await fetchApi.get("/users")
    return res.data
}