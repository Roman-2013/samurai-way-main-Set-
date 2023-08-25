import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {ActionsType} from './redux/store';
import { AppRootStateType, store} from './redux/redux-store';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';


export type MessagesPagePropsType = {
    messages: Array<{ id: number, message: string }>
    dialogs: Array<{ id: number, name: string, image: string }>
    newMessages: string
}
export type ProfilePropsType = {
    post: Array<{ id: number, message: string, likesCount: number }>
    newPostText: string
}





export const App = () => {

    console.log(store)
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar frends={store.getState().messagesPageReducer.dialogs}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/dialogs/*'}
                           element={<DialogsContainer/>}/>
                    <Route path={'/profile'}
                           element={<Profile/>}/>
                </Routes>
            </div>
        </div>

    );
}



