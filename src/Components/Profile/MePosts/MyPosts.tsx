import React, {LegacyRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {ProfilePagePropsType} from '../../../App';

export const MyPosts = (props:ProfilePagePropsType) => {

    let postsElements=props.post.map(p=> <Post message={p.message} like={p.likesCount}/>)

    let newPostElement=useRef<HTMLTextAreaElement>()

const addPost=()=>{
    alert(newPostElement.current?.value)
}

    return (
        <div>
            <div>
                <textarea ref={newPostElement as LegacyRef<HTMLTextAreaElement>}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.postsBlock}>My Post</div>
            <div>New Post</div>

            {postsElements}


        </div>
    )
}