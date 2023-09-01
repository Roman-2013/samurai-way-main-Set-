import React from 'react';
import {MapDispatchToProps, MapStateToPropsUsersType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

type UsersType = MapDispatchToProps & MapStateToPropsUsersType


export const Users = (props: UsersType) => {
    let getUsers=()=>{
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0//users')
                .then((res) => {
                    props.setUsers(res.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(el => <div key={el.id}>
                 <span>
                     <div>
                         <img src={el.photos.small!==null?el.photos.small:userPhoto} alt=""/>
                     </div>
                     <div>
                         {el.followed
                             ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                             : <button onClick={() => props.follow(el.id)}>Follow</button>
                         }

                     </div>
                 </span>
                    <span>
                     <span>
                         <div>{el.name}</div>
                         <div>{el.status}</div>
                     </span>
                     <span>
                         <div>{'el.location.city'}</div>
                         <div>{'el.location.country'}</div>
                     </span>
                 </span>
                </div>)
            }
        </div>
    );
};

