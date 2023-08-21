import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {ActionsType} from './redux/store';
import {AppRootStateType} from './redux/redux-store';


export type MessagesPagePropsType = {
    messages: Array<{ id: number, message: string }>
    dialogs: Array<{ id: number, name: string, image: string }>
    newMessages: string
}
export type ProfilePropsType = {
    post: Array<{ id: number, message: string, likesCount: number }>
    newPostText: string
}


export type StatePropsType = {
    profilePage: ProfilePropsType,
    messagesPage: MessagesPagePropsType
}

export type StorePropsType = {
    state:AppRootStateType
    dispatch: (action: ActionsType) => void
}

export const App = (props: StorePropsType) => {


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar frends={props.state.messagesPageReducer.dialogs}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/dialogs/*'}
                           element={<Dialogs
                               messagesPage={props.state.messagesPageReducer}
                               //dispatch={props.store.dispatch}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path={'/profile'}
                           element={<Profile
                               dispatch={props.dispatch}
                               profilePage={props.state.profilePageReducer}
                           />
                           }/>
                </Routes>
            </div>
        </div>

    );
}



