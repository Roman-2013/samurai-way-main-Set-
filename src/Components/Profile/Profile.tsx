import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MePosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType} from '../../redux/state';

export type ProfilePagePropsType={
    post: Array<{ id: number, message: string, likesCount: number }>
    newPostText:string
    dispatch:(action:ActionsType)=>void
}

export const Profile = (props:ProfilePagePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                newPostText={props.newPostText}
                post={props.post} />
        </div>
    )
}