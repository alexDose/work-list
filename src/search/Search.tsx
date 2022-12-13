import style from './Search.module.scss'

type SearchType = {
    value: string
    setValue: (value: string) => void
}

export const Search = ({value, setValue}: SearchType) => {

    return <div className={style.main}>
        <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
    </div>
}