import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {
    let dialogs=[
        {id:1, name:'Dimych'},
        {id:2, name:'Andrey'},
        {id:3, name:'Sveta'},
        {id:4, name:'Sascha'},
        {id:5, name:'Viktor'},
        {id:6, name:'Valera'},
    ]
    let messages=[
        {id:1, message:'Hi'},
        {id:2, message:'How is your it-kamasutra'},
        {id:3, message:'Yo'},
        {id:4, message:'Yo'},
        {id:5, message:'Yo'},
    ]



    let dialodsElements=dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messagesElements=messages.map(m=><Message message={m.message}/>)

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

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return <div className={s.dialogs}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>

}

type MessagePropsType={
    message:string
}
const Message=(props:MessagePropsType)=>{
    return  <div className={s.message}>{props.message}</div>
}