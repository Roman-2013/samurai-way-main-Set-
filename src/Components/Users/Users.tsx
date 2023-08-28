import React from 'react';
import {MapDispatchToProps, MapStateToPropsUsersType} from './UsersContainer';

type UsersType = MapDispatchToProps & MapStateToPropsUsersType


export const Users = (props: UsersType) => {
    if(props.users.length===0){
        props.setUsers([
            {
                id: 1,
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngOimTuRr9UblvjEq-7vNaTdBmOsiX1TFkKRq7Zib2ERt_DH7xexe3bYYrUyDkP9KGR4&usqp=CAU',
                followed: false,
                fullName: 'Roman',
                status: 'I am a student',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSoCC7pCEupFzjMVA4w0pSzdIFPT1SreNDjF6dpKDQvlFwphetHZbREGJDlJICc-ANM0&usqp=CAU',
                followed: true,
                fullName: 'Dima',
                status: 'I am a superman',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhJO8HvkIDV8SdX8n8-HzqJaGLpy5_6JBu6Q&usqp=CAU',
                followed: true,
                fullName: 'Sascha',
                status: 'cool',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
                 <span>
                     <div>
                         <img src={el.photo} alt=""/>
                     </div>
                     <div>
                         {el.followed
                             ? <button onClick={()=>props.unfollow(el.id)}>Unfollow</button>
                             : <button onClick={()=>props.follow(el.id)}>Follow</button>
                         }

                     </div>
                 </span>
                    <span>
                     <span>
                         <div>{el.fullName}</div>
                         <div>{el.status}</div>
                     </span>
                     <span>
                         <div>{el.location.city}</div>
                         <div>{el.location.country}</div>
                     </span>
                 </span>
                </div>)
            }
        </div>
    );
};

