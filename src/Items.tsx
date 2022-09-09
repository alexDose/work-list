import {useEffect, useState} from "react";
import {api} from "./api";

type ItemType = {
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
    const [items, setItems] = useState<ItemType[]>([])
    const [status, setStatus] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        setStatus('loading')
        api.loadItems().then(data => {
            setStatus("it's ok")
            setItems(data.items)
        }).catch(err => {
            setStatus('')
            setError(err)
        })
    }, [])

    const deleteItem = (id: number) => {
        setItems(items.filter(i => i.id !== id))
    }

    return <div>
        {status === 'loading' && <span>isLoading...</span>}
        {error && <span>{error}</span>}
        <ul>
            {items.map(i => <Item key={i.id} item={i} deleteItem={deleteItem}/>
            )}
        </ul>
    </div>
}

const Item = (props: { item: ItemType, deleteItem: (id: number) => void }) => {
    return <li style={{display: "flex", justifyContent: "space-between", width: "300px"}}>
        {props.item.name}
        <div>
            <button onClick={() => props.deleteItem(props.item.id)}>X</button>
        </div>
    </li>
}