import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies = () => {
    return (
        <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    )
}
const Header = () => {
    return (
        <div>
            <span><a href="#">Home</a></span>
            <span><a href="#">News Feed</a></span>
            <span><a href="#">Messages</a></span>
        </div>

    )
}

export default App;
