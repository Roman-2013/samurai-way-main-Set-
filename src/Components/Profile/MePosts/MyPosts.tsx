import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';

export const MyPosts = () => {
    let post = [
        {id: 1, message: 'Hi,how are you', likesCount: 5},
        {id: 2, message: 'It\'s my first post',likesCount: 13},
    ]

    let postsElements=post.map(p=> <Post message={p.message} like={p.likesCount}/>)

    return (
        <div>
            <div className={s.postsBlock}>My Post</div>
            <div>New Post</div>

            {postsElements}


        </div>
    )
}