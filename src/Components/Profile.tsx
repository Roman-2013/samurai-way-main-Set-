import React from 'react';
import s from  './Profile.module.css'

 export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cutewallpaper.org/22/wallpaper-for-ps3-hd/1038611218.jpg" alt=""/>
            </div>
            <div>ava+description</div>
            <div>My Post <div>New Post</div></div>

            <div className={s.item}>post1</div>
            <div className={s.item}>post2</div>

        </div>
    )
}