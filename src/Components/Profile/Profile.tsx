import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MePosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType} from '../../redux/store';
import {ProfilePropsType, StorePropsType} from '../../App';

export type ProfilePagePropsType={
    profilePage:ProfilePropsType
    dispatch: (action: ActionsType) => void
}

export const Profile = (props:ProfilePagePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                profilePage={props.profilePage}
                />
        </div>
    )
}