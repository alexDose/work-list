import {useEffect, useState} from "react";
import {api} from "./api";
import {useDispatch, useSelector} from "react-redux";
import {itemDeletedAC, loadItemsTC} from "./reducers/ItemReducer";
import {AppDispatch, AppRootStateType} from "./reducers/store";

export type ItemType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: {
        small: null | string,
        large: null | string
    },
    status: null | string,
    followed: boolean
}

export const Items = () => {
    /*
        const [items, setItems] = useState<ItemType[]>([])
        const [status, setStatus] = useState('')
        const [error, setError] = useState('')
    */
    const items = useSelector<AppRootStateType, ItemType[]>(state => state.data.items)
    const status = useSelector<AppRootStateType, string>(state => state.data.status)
    const error = useSelector<AppRootStateType, string>(state => state.data.error)

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(loadItemsTC())
    }, [])

    const deleteItem = (id: number) => {
        dispatch(itemDeletedAC(id))
    }

        return (
            <div style={{backgroundColor: "grey"}}>
                {status === 'loading' && <span>isLoading...</span>}
                {error && <span>{error}</span>}
                <ul>
                    {items.map(i => <Item key={i.id} item={i} deleteItem={deleteItem}/>
                    )}
                </ul>
            </div>
        )
}

const Item = (props: { item: ItemType, deleteItem: (id: number) => void }) => {
    return <li style={{
        display: "flex",
        justifyContent: "space-between",
        width: "300px",
        backgroundColor: "oldlace",
        fontWeight: "bold"
    }}>
        {props.item.name}
        <div>
            <button style={{
                backgroundColor: "red",
                color: "whitesmoke",
                borderRadius: "10px",
                width: "70px",
                fontWeight: "bold"
            }} onClick={() => props.deleteItem(props.item.id)}>X
            </button>
        </div>
    </li>
}