import React from 'react';
import s from './Post.module.css'
type PostPropsType={
    message:string
    like:number
}
export const Post = (props:PostPropsType) => {
    console.log(props.message)
    return (
        <div>
            <div className={s.item}>{props.message}</div>
            <div><span>Like {props.like} </span></div>

        </div>
    )
}