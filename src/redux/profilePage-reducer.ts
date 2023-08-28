import React from 'react';
import {ProfilePropsType} from '../App';
import {ActionsType} from './messagesPage-reducer';


let initialState = {
    post: [
        {id: 1, message: 'Hi,how are you', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 13},
    ] as Array<{ id: number, message: string, likesCount: number }>,
    newPostText: ''
}

 type InitialStateType=typeof initialState

export const profilePageReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state, post: [newPost, ...state.post], newPostText: ''}

        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.payload.newText};
        default:
            return state
    }
}

export let addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export let updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload: {newText}
    } as const
}