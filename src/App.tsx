import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img alt='image'
                    src="https://img.freepik.com/free-vector/vintage-monochrome-serious-russian-bear_225004-583.jpg?w=740&t=st=1685478986~exp=1685479586~hmac=0021ba2cdd87fcb6e5c991da0b6e8a0e4cfdb96abf7ca88f76c95a074b26beb6"/>;
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
                <div></div>
            </nav>

            <div className="content">
                <div>
                    <img alt ="image" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My Post
                    <div>
                        New post
                    </div>
                    <div>
                        Post1
                    </div>
                    <div>
                        Post1
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
