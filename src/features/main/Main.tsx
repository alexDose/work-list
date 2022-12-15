import style from './Main.module.scss'
import {Link} from "react-router-dom";
import {Navigation} from "../navigation/Navigation";
import {Sorting} from "../sorting/Sorting";

export const Main = () => {
    return <div className={style.container}>
        <Navigation/>
        <Sorting/>
        <div className={style.main}>
            <h1>Hello everybody!</h1>
            <h2>click button!</h2>
            <Link to={'/1'}>
                <div className={style.btnStart}>Start</div>
            </Link>
        </div>
        <Sorting/>
        <Navigation/>
    </div>
}