import React from 'react';
import {ActionsType} from './store';
import {ProfilePropsType} from '../App';
import {addMessagesAC, sendMessageAC} from './messagesPage-reducer';



let initialState={
        post: [
            {id: 1, message: 'Hi,how are you', likesCount: 5},
            {id: 2, message: 'It\'s my first post', likesCount: 13},
        ],
        newPostText: ''
    }


export const profilePageReducer = (state: ProfilePropsType=initialState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state,post:[newPost,...state.post] ,newPostText:''}

        case 'UPDATE-NEW-POST-TEXT':
            return {...state,newPostText:action.payload.newText};
        default:
            return state
    }
}

export let addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export let updateNewPostTextAC = (newText:string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload:{newText}
    } as const
}