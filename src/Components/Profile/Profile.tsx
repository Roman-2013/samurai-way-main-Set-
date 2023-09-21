import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MePosts/MyPostsContainer';
import {MapStateToPropsType} from './ProfileContainer';
import {ProfileType} from '../../redux/profilePage-reducer';




export const Profile = (props:MapStateToPropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}