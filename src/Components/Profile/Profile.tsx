import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MePosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType} from '../../redux/store';
import {ProfilePropsType} from '../../App';
import {MyPostsContainer} from './MePosts/MyPostsContainer';

// export type ProfilePagePropsType={
//     profilePage:ProfilePropsType
//     dispatch: (action: ActionsType) => void
// }

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}