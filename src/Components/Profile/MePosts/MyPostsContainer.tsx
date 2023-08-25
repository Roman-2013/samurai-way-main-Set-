import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profilePage-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                let onPostOnChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))

                }


                return <MyPosts
                    profilePage={store.getState().profilePageReducer}
                    addPost={addPost}
                    updateNewPostText={onPostOnChange}/>
            }
        }
        </StoreContext.Consumer>
    )
}