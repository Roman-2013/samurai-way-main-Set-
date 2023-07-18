import React from 'react';
import s from './ProfileInfo.module.css'



export const ProfileInfo = () => {
    return(
    <div>
        <div>
            <img src="https://cutewallpaper.org/22/wallpaper-for-ps3-hd/1038611218.jpg" alt=""/>
        </div>
        <div className={s.descriptionBlock}>ava+description</div>
    </div>
    )
}