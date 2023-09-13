import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {UsersType} from '../../redux/users-reducer';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}


export const Users: React.FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {pages.map(el => {
                    return <span key={el} onClick={(e) => {
                        props.onPageChanged(el)
                    }} className={props.currentPage === el ? s.selectedPAge : ''}>{el}</span>
                })}
            </div>
            {
                props.users.map(el => <div key={el.id}>
                 <span>
                     <div>
                         <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt=""/>
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
    )
};

