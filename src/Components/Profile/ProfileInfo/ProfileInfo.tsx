import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profilePage-reducer';
import {MapStateToPropsType} from '../ProfileContainer';


export const ProfileInfo = (props: MapStateToPropsType) => {
    if (!props.profile.userId) {
         return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://cutewallpaper.org/22/wallpaper-for-ps3-hd/1038611218.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                {props.profile.photos.small!==null?  <img src={props.profile.photos.small} alt=""/>:"not photo"}
                {props.profile.aboutMe}

            </div>
        </div>
    )


}

