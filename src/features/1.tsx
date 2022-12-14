import {Search} from "../search/Search";
import {Items} from "../Items";
import {Pizza} from "../pizza/Pizza";
import React from "react";
import {Link} from "react-router-dom";
import style from './styleAll.module.scss'

export const First = () => {
    return <div>
        <Link className={style.back} to={'/'}>Back</Link>
        <Search/>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Items/>
            <Pizza/>
        </div>
    </div>

}