import React, {LegacyRef, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MessagesPagePropsType} from '../../App';



export const Dialogs = (props:MessagesPagePropsType) => {
    let dialodsElements=props.dialogs.map(d=><DialogItem key={d.id} image={d.image} name={d.name} id={d.id}/>)
    let messagesElements=props.messages.map(m=><Message key={m.id}  message={m.message}/>)

    let newMessage=useRef<HTMLTextAreaElement>()
    let sendMessage=()=>alert (newMessage.current?.value)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialodsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage as LegacyRef<HTMLTextAreaElement>}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    );
};

