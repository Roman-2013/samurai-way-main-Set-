import React from 'react';


type followType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unfollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type SetIsFetchingtACType = ReturnType<typeof setIsFetching>


export type ActionsTypeUsers =
    followType
    | UnfollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | SetIsFetchingtACType

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: { small: string, large: string },
    status: string
    followed: boolean
}

type initialState = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: false,

}

export type initialStateUsersType = typeof initialState

export const UsersReducer = (state: initialStateUsersType = initialState, action: ActionsTypeUsers): initialStateUsersType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        case 'SET-USERS':
            return {...state, users: action.payload.users}

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.pageNumber}

        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.payload.totalCount}
        case'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.payload.isFetching}
        }
        default:
            return state
    }
}


export const follow = (userID: number) => {
    return {
        type: 'FOLLOW', payload: {userID}
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW', payload: {userID}
    } as const
}
export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET-USERS', payload: {users}
    } as const
}
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: 'SET-CURRENT-PAGE', payload: {pageNumber}
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT', payload: {totalCount}
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING', payload: {isFetching}
    } as const
}




