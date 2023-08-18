import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {ActionsType} from './redux/state';



export type MessagesPagePropsType = {
    messages: Array<{ id: number, message: string }>
    dialogs: Array<{ id: number, name: string, image: string }>
    newMessages:string
}
export type ProfilePropsType = {
    post: Array<{ id: number, message: string, likesCount: number }>
    newPostText:string
}




export type StatePropsType={
    profilePage: ProfilePropsType,
    messagesPage: MessagesPagePropsType
}

export type StorePropsType = {
    _state:StatePropsType
    getState:()=> StatePropsType;
    _callSubscriber:(state: StatePropsType)=> void;
    subscribe:(observer: (state: StatePropsType) => void)=> void;
    dispatch:(action:ActionsType)=>void
}

export type AppPropsType = {
    store: StorePropsType
    dispatch:(action:ActionsType)=>void
}
export const App = (props: AppPropsType) => {


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar frends={props.store._state.messagesPage.dialogs}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/dialogs/*'}
                           element={<Dialogs
                               newMessages={props.store.getState().messagesPage.newMessages}
                               dialogs={props.store.getState().messagesPage.dialogs}
                               messages={props.store.getState().messagesPage.messages}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path={'/profile'}
                           element={<Profile
                               dispatch={props.dispatch}
                                newPostText={props.store.getState().profilePage.newPostText}
                                post={props.store.getState().profilePage.post}
                           />
                    }/>
                </Routes>
            </div>
        </div>

    );
}



