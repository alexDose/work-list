import {ItemType} from "../Items";
import {Dispatch} from "redux";
import {api} from "../api";

type InitialStateType = typeof initialState
type ItemsActionType = ReturnType<typeof itemsLoadedAC>
    | ReturnType<typeof itemDeletedAC>
    | ReturnType<typeof changeStatusAC>
    | ReturnType<typeof setErrorAC>

const initialState = {
    items: [] as Array<ItemType>,
    status: "",
    error: ""
}

export const ItemsReducer = (state: InitialStateType = initialState, action: ItemsActionType) => {
    switch (action.type) {
        case "status_changed":
            return {...state, status: action.status}
        case "error_changed":
            return {...state, status: action.error}
        case "items_loaded":
            return {...state, items: action.items}
        case "delete_item":
            return {...state, items: state.items.filter(i => i.id !== action.id)}

        default:
            return state
    }
}

export const itemsLoadedAC = (items: Array<ItemType>) => ({type: "items_loaded", items} as const)
export const itemDeletedAC = (id: number) => ({type: "delete_item", id} as const)
export const changeStatusAC = (status: string) => ({type: "status_changed", status} as const)
export const setErrorAC = (error: string) => ({type: "error_changed", error} as const)

export const loadItemsTC = (search: string) => (dispatch: Dispatch) => {
    dispatch(changeStatusAC("loading"))
    api.loadItems(search).then((res) => {
        dispatch(changeStatusAC("success"))
        dispatch(itemsLoadedAC(res.data.items))
    }).catch(err => {
        dispatch(changeStatusAC("error"))
        dispatch(setErrorAC(err))
    })
}

export const fakeDeleteItemTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(changeStatusAC("loading"))
    api.deleteItem(id).then((res) => {
        dispatch(changeStatusAC("success"))
    }).catch(err => {
        dispatch(itemDeletedAC(id))
        dispatch(changeStatusAC("error"))
        dispatch(setErrorAC(err))
    })
}

