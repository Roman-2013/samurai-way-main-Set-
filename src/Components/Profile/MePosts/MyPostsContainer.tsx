import React from 'react';
import {ProfilePagePropsType} from '../Profile';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profilePage-reducer';
import {MyPosts} from './MyPosts';

export const MyPostsContainer = (props: ProfilePagePropsType) => {

    const addPost = () => {
            props.dispatch(addPostAC())
    }

    let onPostOnChange = (text:string) => {
            props.dispatch(updateNewPostTextAC(text))

    }

    return (
        <MyPosts
            profilePage={props.profilePage}
            addPost={addPost}
            updateNewPostText={onPostOnChange}


        />
    )

}