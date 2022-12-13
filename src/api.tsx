import axios from "axios"
import {ItemType} from "./Items";

const config = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "99a6f989-b40f-4d22-9478-89be3183e4b2"
    }
};
const axiosInstance = axios.create(config);

export const api = {
    loadItems(search: string) {
        return axiosInstance.get<ResponseType>(`users?count=15&term=${search}`)
    },
    deleteItem(id: number) {
        return axiosInstance.delete('users/items/' + id)
    }
}

export type ResponseType = {
	items: ItemType[];
	totalCount: number;
	error?: any;
}
