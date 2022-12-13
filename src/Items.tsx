import {useEffect, useState} from "react";
import {api} from "./api";
import {useDispatch, useSelector} from "react-redux";
import {fakeDeleteItemTC, itemDeletedAC, loadItemsTC} from "./reducers/ItemReducer";
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

type ItemsType = {
    search: string
}

export const Items = ({search}: ItemsType) => {
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
        dispatch(loadItemsTC(search))
    }, [search])

    const deleteItem = (id: number) => {
        dispatch(fakeDeleteItemTC(id))
    }

    return (
        <div>
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
        alignItems: 'center',
        width: "300px",
        fontWeight: "bold"
    }}>
        <p>{props.item.name}</p>
        <button style={{
            backgroundColor: "fuchsia",
            color: "whitesmoke",
            borderRadius: "10px",
            width: "70px",
            fontWeight: "bold",
            height: '35px'
        }} onClick={() => props.deleteItem(props.item.id)}>
            X
        </button>
    </li>
}