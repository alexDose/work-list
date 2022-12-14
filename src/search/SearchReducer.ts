type InitialStateType = typeof initialState
type SearchActionTypes = ReturnType<typeof setSearchValue>

const initialState = {
    searchValue: ''
}

export const SearchReducer = (state: InitialStateType = initialState, action: SearchActionTypes) => {
    switch (action.type) {
        case 'SET_SEARCH_VALUE':
            return {...state, searchValue: action.value}
        default:
            return state
    }
}

export const setSearchValue = (value: string) => {
    return {type: 'SET_SEARCH_VALUE', value} as const
}