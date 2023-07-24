import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MePosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export type ProfilePropsType={
    post:Array<{id: number, message: string, likesCount: number}>

}
export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts post={props.post} />
        </div>
    )
}