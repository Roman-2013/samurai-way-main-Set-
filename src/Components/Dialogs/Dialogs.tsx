import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export type DialogsPropsType={
    dialogs:Array<{id:number, name:string}>
    messages:Array<{ id:number, message:string}>
}

export const Dialogs = (props:DialogsPropsType) => {
    // let dialogs=[
    //     {id:1, name:'Dimych'},
    //     {id:2, name:'Andrey'},
    //     {id:3, name:'Sveta'},
    //     {id:4, name:'Sascha'},
    //     {id:5, name:'Viktor'},
    //     {id:6, name:'Valera'},
    // ]
    // let messages=[
    //     {id:1, message:'Hi'},
    //     {id:2, message:'How is your it-kamasutra'},
    //     {id:3, message:'Yo'},
    //     {id:4, message:'Yo'},
    //     {id:5, message:'Yo'},
    // ]

    let dialodsElements=props.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElements=props.messages.map(m=><Message message={m.message}/>)

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

