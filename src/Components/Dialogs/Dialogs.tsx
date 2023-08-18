import React, {LegacyRef, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsType, addMessagesAC, sendMessageAC} from '../../redux/state';


export type MessagesPropsType = {
    messages: Array<{ id: number, message: string }>
    dialogs: Array<{ id: number, name: string, image: string }>
    newMessages:string
    dispatch:(action:ActionsType)=>void
}


export const Dialogs = (props:MessagesPropsType) => {
    let dialodsElements=props.dialogs.map(d=><DialogItem key={d.id} image={d.image} name={d.name} id={d.id}/>)
    let messagesElements=props.messages.map(m=><Message key={m.id}  message={m.message}/>)

    let newMessage=useRef<HTMLTextAreaElement>()

    let sendMessage=()=>{
        if (newMessage.current?.value){
            props.dispatch(sendMessageAC(newMessage.current.value))
        }
    }

    let addMessages=()=>{
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
                <textarea value={props.newMessages}
                          onChange={sendMessage}
                          ref={newMessage as LegacyRef<HTMLTextAreaElement>}/>
            </div>
            <div>
                <button onClick={addMessages}>Send Message</button>
            </div>
        </div>
    );
};

