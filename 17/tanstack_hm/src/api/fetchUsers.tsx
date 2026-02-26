import axios from 'axios'

const fetchApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    withCredentials: true
})
export default fetchApi

