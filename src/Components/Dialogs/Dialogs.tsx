import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MessagesPagePropsType} from '../../App';



export const Dialogs = (props:MessagesPagePropsType) => {
    let dialodsElements=props.dialogs.map(d=><DialogItem image={d.image} name={d.name} id={d.id}/>)
    let messagesElements=props.messages.map(m=><Message  message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialodsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

