import React from 'react';
import {MapDispatchToProps, MapStateToPropsUsersType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'
import {UsersType} from '../../redux/users-reducer';


type UsersTypeToMap = MapStateToPropsUsersType & MapDispatchToProps

export class Users extends React.Component<UsersTypeToMap, any> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//users')
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }


    render() {
        return <div>

            {
                this.props.users.map(el => <div key={el.id}>
                 <span>
                     <div>
                         <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt=""/>
                     </div>
                     <div>
                         {el.followed
                             ? <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                             : <button onClick={() => this.props.follow(el.id)}>Follow</button>
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
        </div>;
    }
}



