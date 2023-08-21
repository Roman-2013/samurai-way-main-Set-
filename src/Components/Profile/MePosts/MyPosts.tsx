import React, {LegacyRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {ProfilePagePropsType} from '../Profile';
import {ProfilePropsType} from '../../../App';
import {ActionsType} from '../../../redux/store';


export type MyPostsPropsType={
    profilePage:ProfilePropsType
    addPost:()=>void
    updateNewPostText:(text:string)=>void
}



export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.post.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>)

    let newPostElement = useRef<HTMLTextAreaElement>()


    const addPost = () => {
        if (newPostElement.current?.value) {
            props.addPost()
        }
    }

    let onPostOnChange = () => {
        if (newPostElement.current?.value) {
            props.updateNewPostText(newPostElement.current?.value)
        }
    }

    return (
        <div>
            <div>
                <textarea
                    placeholder={'Enter your post text'}
                    onChange={onPostOnChange}
                    ref={newPostElement as LegacyRef<HTMLTextAreaElement>}
                    value={props.profilePage.newPostText}/>
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