import axios from "axios"

const config = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1d8091bb-c776-4a5c-8eac-9bbacc2102bb"
    }
};
const axiosInstance = axios.create(config);

export const api = {
    loadItems() {
        return axiosInstance.get('users?count=50/')
    },
    deleteItem(id: number) {
        return axiosInstance.delete('users/items/' + id)
    }
}

