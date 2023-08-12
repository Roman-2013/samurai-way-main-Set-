import React, {LegacyRef, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MessagesPagePropsType, MessagesPropsType} from '../../App';



export const Dialogs = (props:MessagesPropsType) => {
    let dialodsElements=props.dialogs.map(d=><DialogItem key={d.id} image={d.image} name={d.name} id={d.id}/>)
    let messagesElements=props.messages.map(m=><Message key={m.id}  message={m.message}/>)

    let newMessage=useRef<HTMLTextAreaElement>()

    let sendMessage=()=>{
        if (newMessage.current?.value){
            props.sendMessage(newMessage.current.value)
        }
    }

    let addMessages=()=>{
        props.addMessages()
        // if(  newMessage.current?.value){
        //     newMessage.current.value=''
        // }
        // console.log(props.newMessages)
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

