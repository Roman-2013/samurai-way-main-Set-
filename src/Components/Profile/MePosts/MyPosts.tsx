import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';

export const MyPosts = () => {
    return (
        <div>
            <div>My Post</div>
            <div>New Post</div>

            <Post message={"Hi,how are you"} like={5}/>
            <Post  message={"It's my first post"} like={13}/>

        </div>
    )
}