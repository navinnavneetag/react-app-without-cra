import React, { useState } from 'react';
import moment from 'moment';
import './App.css';
import farmer from './assets/farmer.jpeg';
import redirect from './assets/redirecting.gif';

export default function App () {
    const [showTime, setShowTime] = useState(false);
    const [time, setTime] = useState(moment().format("MMM Do YY"));
    
    const toggleShowTime = () => {
        setShowTime(!showTime);
    }

    return (
        <div className="App">
            <h1>React App Without CRA !!!!</h1>
            <div className="images">
                <img src={farmer} alt="farmer" />
                <img src={redirect} alt="redirect" />
            </div>
            <button onClick={toggleShowTime}>Show Time</button>
            {
                showTime && <h2>{time}</h2>
            }
        </div>
    )
}