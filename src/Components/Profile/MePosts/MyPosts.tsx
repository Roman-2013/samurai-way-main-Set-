import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';

 export const MyPosts = () => {
    return (
        <div>
            <div>My Post</div>
            <div>New Post</div>

           <Post/>
           <Post/>
            <Post/>
           <Post/>

        </div>
    )
}