import React, {useState} from 'react';
import './App.css';
import {Items} from "./Items";
import {Pizza} from "./pizza/Pizza";
import {Search} from "./search/Search";

function App() {
    const [value, setValue] = useState('')

    return (
        <div>
            <Search value={value} setValue={setValue}/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Items search={value}/>
                <Pizza/>
            </div>
        </div>
    )
}

export default App;
