import React, {ChangeEvent, LegacyRef, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MessagesPagePropsType} from '../../App';



export type DialogsPropsType = {
    messagesPage:MessagesPagePropsType
    addMessages:()=>void
    sendMessage:(value:string)=>void
}


export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.messagesPage.dialogs.map((d,index) => <DialogItem key={index} image={d.image} name={d.name} id={d.id}/>)
    let messagesElements = props.messagesPage.messages.map((m,index) => <Message key={index} message={m.message}/>)


    let sendMessage = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.sendMessage(e.currentTarget.value)
    }

    let addMessages = () => {
        props.addMessages()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
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

