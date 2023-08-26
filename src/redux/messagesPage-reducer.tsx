import React from 'react';
import {MessagesPagePropsType} from '../App';
import {addPostAC, updateNewPostTextAC} from './profilePage-reducer';
import {ActionsType} from './store';


let initialState:MessagesPagePropsType={
        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                image: 'https://static5.tgstat.ru/channels/_0/a3/a3193315ddbeecd0c7993cf1ac3cf9ba.jpg'
            },
            {
                id: 2,
                name: 'Andrey',
                image: 'https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-58.jpg'
            },
            {
                id: 3,
                name: 'Sveta',
                image: 'https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-58.jpg'
            },
            {
                id: 4,
                name: 'Sascha',
                image: 'https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-58.jpg'
            },
            {
                id: 5,
                name: 'Viktor',
                image: 'https://static5.tgstat.ru/channels/_0/a3/a3193315ddbeecd0c7993cf1ac3cf9ba.jpg'
            },
            {
                id: 6,
                name: 'Valera',
                image: 'https://static5.tgstat.ru/channels/_0/a3/a3193315ddbeecd0c7993cf1ac3cf9ba.jpg'
            },
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
        newMessages: ''
    }

export const messagesPageReducer = (state: MessagesPagePropsType=initialState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-MESSAGES':
            let newMes = {id: 6, message: state.newMessages}
            return {...state,messages:[newMes,...state.messages],newMessages:''}
        case 'SEND-MESSAGES':
            state.newMessages = action.payload.newMessages
            return {...state,newMessages:action.payload.newMessages};
        default:
            return state
    }
}

export let addMessagesAC=()=>{
    return {
        type:'ADD-MESSAGES'
    }as const
}
export let sendMessageAC=(newMessages: string)=>{
    return {
        type:'SEND-MESSAGES',
        payload:{newMessages}
    }as const
}
