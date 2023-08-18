import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MePosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePagePropsType} from '../../App';



export const Profile = (props:ProfilePagePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
                addPost={props.addPost}
                post={props.post} />
        </div>
    )
}