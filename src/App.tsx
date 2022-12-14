import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Main} from "./features/main/Main";
import {First} from "./features/1";
import {Second} from "./features/2";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/1'} element={<First/>}/>
            <Route path={'/2'} element={<Second/>}/>
        </Routes>
    )
}

export default App;
