import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {ItemsReducer} from "./ItemReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {SearchReducer} from "../search/SearchReducer";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    data: ItemsReducer,
    search: SearchReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

type ThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<ThunkDispatchType>()