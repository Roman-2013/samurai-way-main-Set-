import React from 'react';
import './App.css';


export const App = () => {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img  src="https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg"
                     alt=""/>
            </header>
            <nav className={'nav'}>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>

              
            </nav>
            <div className={'content'}>
               <div>
                   <img src="https://cutewallpaper.org/22/wallpaper-for-ps3-hd/1038611218.jpg" alt=""/>
               </div>
                <div>ava+description</div>
                <div>My Post <div>New Post</div></div>

                <div>post1</div>
                <div>post2</div>

            </div>
        </div>
    );
}



