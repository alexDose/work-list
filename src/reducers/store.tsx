import {applyMiddleware, combineReducers, createStore} from "redux";
import {ItemsReducer} from "./ItemReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    data: ItemsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch