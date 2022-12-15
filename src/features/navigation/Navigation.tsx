import {useState} from "react";
import style from './Navigation.module.scss'

export const Navigation = () => {
    const [value, setValue] = useState(3)
    const categories = ['All', 'Category 1', 'Category 2', 'Node.js', 'Category 4']

    return <div className={style.main}>
        <ul>
            {categories.map((categoryName, index) => (
                <li key={index} className={value === index ? style.active : ''} onClick={() => setValue(index)}>
                    {categoryName}
                </li>
            ))}
        </ul>
    </div>
}