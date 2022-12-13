import style from './Pizza.module.scss'
import {useState} from "react";

export const Pizza = () => {
    const [view, setView] = useState(0)
    const [size, setSize] = useState(0)

    return <div>
        <div className={style.main}>
            <div className={style.view}>
                <span className={view === 0 ? style.active : ''} onClick={() => setView(0)}>thin</span>
                <span className={view === 1 ? style.active : ''} onClick={() => setView(1)}>traditional</span>
            </div>
            <div className={style.size}>
                <span className={size === 0 ? style.active : ''} onClick={() => setSize(0)}>26</span>
                <span className={size === 1 ? style.active : ''} onClick={() => setSize(1)}>30</span>
                <span className={size === 2 ? style.active : ''} onClick={() => setSize(2)}>40</span>
            </div>
        </div>
    </div>
}