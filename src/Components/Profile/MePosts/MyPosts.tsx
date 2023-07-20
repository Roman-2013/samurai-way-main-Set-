import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';

export const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi,how are you', likesCount: 5},
        {id: 2, message: 'It\'s my first post',likesCount: 13},
    ]

    return (
        <div>
            <div className={s.postsBlock}>My Post</div>
            <div>New Post</div>

            <Post message={postsData[0].message} like={postsData[0].likesCount}/>
            <Post message={postsData[1].message} like={postsData[1].likesCount}/>


        </div>
    )
}