import style from './Search.module.scss'
import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "./SearchReducer";
import {AppRootStateType} from "../reducers/store";
import imgClose from "../assets/close.png";
import imgSearch from "../assets/211818_search_icon.png";

export const Search = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector<AppRootStateType, string>(state => state.search.searchValue)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(e.currentTarget.value))
    }

    return <div className={style.container}>
        <div className={style.main}>
            <img className={style.imgSearch} src={imgSearch} alt=""/>
            <input type="text" value={searchValue} onChange={handleOnChange} placeholder={'Search...'}/>
            <img className={style.imgClose} src={imgClose} alt=""/>
        </div>
    </div>
}