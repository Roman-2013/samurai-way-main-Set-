import React from 'react';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {
    ActionsTypeUsers,
    followAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from '../../redux/users-reducer';
import {Users} from './Users';


export type MapStateToPropsUsersType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
export type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount:(totalCount: number) => void
}


let mapStateToProps = (state: AppRootStateType): MapStateToPropsUsersType => {
    return {
        users: state.UsersReducer.users,
        pageSize: state.UsersReducer.pageSize,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        currentPage: state.UsersReducer.currentPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypeUsers) => void): MapDispatchToProps => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)