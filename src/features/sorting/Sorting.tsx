import {useState} from "react";
import style from './Sorting.module.scss'

export const Sorting = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('Date')
    const sort = ['Date', 'Name', 'Popularity']

    const changeSort = (value: string) => {
        setValue(value)
        setIsOpen(false)
    }

    return <div className={style.main}>
        <div className={style.text}>Sorting</div>
        <div onClick={() => setIsOpen(true)} className={style.closeSelector}>
            <span className={style.sortValue}>{value}</span>
            <span onClick={() => setIsOpen(true)} className={style.arrow}>▼</span>
        </div>
        {isOpen && <div className={style.openSelector}>
            <ul>
                {sort.map((sortName, index) => (
                    <li key={index} onClick={() => changeSort(sortName)}>{sortName}</li>
                ))}
            </ul>
        </div>}
    </div>
}