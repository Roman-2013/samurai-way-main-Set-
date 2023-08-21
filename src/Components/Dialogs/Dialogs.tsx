import React, {ChangeEvent, LegacyRef, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MessagesPagePropsType, StorePropsType} from '../../App';
import {addMessagesAC, sendMessageAC} from '../../redux/messagesPage-reducer';
import {ActionsType} from '../../redux/store';


export type MessagesPropsType = {
    messagesPage:MessagesPagePropsType
    dispatch: (action: ActionsType) => void
    //store:StorePropsType
}


export const Dialogs = (props: MessagesPropsType) => {
    let dialodsElements = props.messagesPage.dialogs.map(d => <DialogItem key={d.id} image={d.image} name={d.name} id={d.id}/>)
    let messagesElements = props.messagesPage.messages.map(m => <Message key={m.id} message={m.message}/>)


    let sendMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {

           props.dispatch(sendMessageAC(e.currentTarget.value))

    }

    let addMessages = () => {

        props.dispatch(addMessagesAC())
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialodsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    placeholder={"Enter your message"}
                    value={props.messagesPage.newMessages}
                    onChange={sendMessage}
                 />
            </div>
            <div>
                <button onClick={addMessages}>Send Message</button>
            </div>
        </div>
    );
};

