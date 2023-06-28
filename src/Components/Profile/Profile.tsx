import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MePosts/MyPosts';

 export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cutewallpaper.org/22/wallpaper-for-ps3-hd/1038611218.jpg" alt=""/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}