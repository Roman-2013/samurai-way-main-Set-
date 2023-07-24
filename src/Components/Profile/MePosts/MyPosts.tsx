import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {ProfilePropsType} from '../Profile';

export const MyPosts = (props:ProfilePropsType) => {

    let postsElements=props.post.map(p=> <Post message={p.message} like={p.likesCount}/>)

    return (
        <div>
            <div className={s.postsBlock}>My Post</div>
            <div>New Post</div>

            {postsElements}


        </div>
    )
}