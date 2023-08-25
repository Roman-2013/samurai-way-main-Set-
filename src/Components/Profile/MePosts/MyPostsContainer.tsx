import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profilePage-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {ActionsType} from '../../../redux/store';
import {AppRootStateType} from '../../../redux/redux-store';

// export const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//                 let onPostOnChange = (text: string) => {
//                     store.dispatch(updateNewPostTextAC(text))
//
//                 }
//
//
//                 return <MyPosts
//                     profilePage={store.getState().profilePageReducer}
//                     addPost={addPost}
//                     updateNewPostText={onPostOnChange}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps=(state:AppRootStateType)=>{
    return {
        profilePage:state.profilePageReducer
    }
}
let mapDispatchToProps=(dispatch:(action: ActionsType)=> void)=>{
    return {
        addPost:()=>{
            dispatch(addPostAC())
        },
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextAC(text))
        }
    }
}



export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)