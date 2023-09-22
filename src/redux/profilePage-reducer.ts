import React from 'react';
import {ProfilePropsType} from '../App';
import {ActionsType} from './messagesPage-reducer';

export type ProfilePageActionType = ActionsType

export type ProfileType = {
    aboutMe: string|null
    contacts: {
        facebook: string|null
        website: string|null
        vk: string|null
        twitter: string|null
        instagram: string|null
        youtube: string|null
        github:string|null
        mainLink:string|null
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string|null
    fullName: string|null
    userId: number
    photos: {
        small: string|null
        large: string|null
    }
}


let initialState = {
    post: [
        {id: 1, message: 'Hi,how are you', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 13},
    ] as Array<{ id: number, message: string, likesCount: number }>,
    newPostText: '',
    profile: {} as ProfileType
}

export type InitialStateType = typeof initialState

export const profilePageReducer = (state: InitialStateType = initialState, action: ProfilePageActionType): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, message: state.newPostText, likesCount: 0}
            return {...state, post: [newPost, ...state.post], newPostText: ''}

        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.payload.newText};
        case 'SET-USER-PROFILE':
            return {...state, profile: action.payload.profile};
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
export let setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE', payload: {profile}
    } as const
}