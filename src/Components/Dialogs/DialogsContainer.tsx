import React, {ChangeEvent, LegacyRef, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MessagesPagePropsType, StorePropsType} from '../../App';
import {addMessagesAC, sendMessageAC} from '../../redux/messagesPage-reducer';
import {ActionsType} from '../../redux/store';
import {Dialogs} from './Dialogs';


export type MessagesPropsType = {
    messagesPage:MessagesPagePropsType
    dispatch: (action: ActionsType) => void
}


export const DialogsContainer = (props: MessagesPropsType) => {

    let sendMessage = (value:string) => {
           props.dispatch(sendMessageAC(value))

    }

    let addMessages = () => {
        props.dispatch(addMessagesAC())
    }


    return (
       <Dialogs
           addMessages={addMessages}
           sendMessage={sendMessage}
           messagesPage={props.messagesPage}
       />
    );
};

