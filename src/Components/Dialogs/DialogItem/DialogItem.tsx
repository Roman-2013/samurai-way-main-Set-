import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';



export const DialogItem = (props: {id:number, name:string,image:string}) => {
    return <div className={s.dialogs}>
        <NavLink to={'/dialogs/' + props.id}>
            <div className={s.dialogsNameAndIcon}>
                <img className={s.image} src={props.image}/>
                <div>{props.name}</div>
            </div>
        </NavLink>
    </div>

}

