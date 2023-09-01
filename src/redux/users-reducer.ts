import React from 'react';


type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>


export type ActionsTypeUsers = FollowACType | UnfollowACType | SetUsersACType

export type UsersType = {
    // id: number
    // photo: string
    // followed: boolean
    // fullName: string
    // status: string
    // location: { city: string, country: string }
    name:string
    id:number
    uniqueUrlName: string
    photos: { small: string ,large: string },
    status: string
    followed: boolean
}






let initialState = {
    users: [] as UsersType[]
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
            return {...state, users: [...state.users, ...action.payload.users]}

        default:
            return state
    }
}


export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW', payload: {userID}
    } as const
}

export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW', payload: {userID}
    } as const
}
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: 'SET-USERS', payload: {users}
    } as const
}

