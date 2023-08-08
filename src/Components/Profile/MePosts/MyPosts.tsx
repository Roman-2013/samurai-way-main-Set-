import React, {LegacyRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {ProfilePagePropsType} from '../../../App';

export const MyPosts = (props: ProfilePagePropsType) => {

    let postsElements = props.post.map((p,index) => <Post key={index} message={p.message} like={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current?.value && props.addPost) {
            props.addPost(newPostElement.current.value)
        }
        console.log(props.post)
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