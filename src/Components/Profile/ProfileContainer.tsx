import React, {ReactNode} from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {
    ProfileType,
    setUserProfile
} from '../../redux/profilePage-reducer';
import {AppRootStateType} from '../../redux/redux-store';

import {
    useParams,
} from 'react-router-dom';


export type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
}
type ProfileContainerType = MapStateToPropsType & MapDispatchToProps

type PropsType =  ProfileContainerType & {
    match: {
        params: {
            userId: string
        }
    }
}

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let params = useParams();
        return (
            <Component{...props} match={{params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

// let MapDispatchToProps = (dispatch: (action: ProfilePageActionType) => void): MapDispatchToProps => {
//     return {
//         setUserProfile: (profile: ProfileType) => {
//             dispatch(setUserProfile(profile))
//         }
//     }
// }


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export const ProfileContainer1 = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)