import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Sascha'} id={'4'}/>
                <DialogItem name={'Viktor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra'}/>
                <Message message={'Yo!'}/>

            </div>
        </div>
    );
};

type DialogItemPropsType = {
    name: string
    id: string
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