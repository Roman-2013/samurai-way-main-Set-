import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {
    ProfilePageActionType,
    ProfileType,
    setUserProfileAC
} from '../../redux/profilePage-reducer';
import {AppRootStateType} from '../../redux/redux-store';

export type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToProps


export class ProfileContainer extends React.Component<ProfileContainerType, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }

    render() {

        return (
            <Profile profile={this.props.profile}/>
        )
    }
}




let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePageReducer.profile
    }
}

let MapDispatchToProps = (dispatch: (action: ProfilePageActionType) => void): MapDispatchToProps => {
    return {
        setUserProfile: (profile: ProfileType) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}


export const ProfileContainer1=  connect(mapStateToProps, MapDispatchToProps)(ProfileContainer)