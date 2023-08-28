import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profilePage-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {ActionsType} from '../../../redux/messagesPage-reducer';
import {ProfilePropsType} from '../../../App';


export type MapStateToPropsType={
    profilePage: ProfilePropsType
}

export type MapDispatchToPropsType={
    addPost:()=>void
    updateNewPostText:(text:string)=>void
}

let mapStateToProps=(state:AppRootStateType):MapStateToPropsType=>{
    return {
        profilePage:state.profilePageReducer
    }
}
let mapDispatchToProps=(dispatch:(action: ActionsType)=> void):MapDispatchToPropsType=>{
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