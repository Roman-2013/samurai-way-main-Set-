import React, {LegacyRef, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {MapDispatchToPropsType, MapStateToPropsType} from './MyPostsContainer';



export type MyPostsPropsType=MapStateToPropsType & MapDispatchToPropsType




export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.post.map((p,index) => <Post key={index} message={p.message} like={p.likesCount}/>)

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