import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import { store} from './redux/redux-store';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import { UsersContainer1} from './Components/Users/UsersContainer';
import {ProfileContainer, ProfileContainer1} from './Components/Profile/ProfileContainer';


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
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar frends={store.getState().messagesPageReducer.dialogs}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/dialogs/*'}
                           element={<DialogsContainer/>}/>
                    <Route path={'/profile/:userId'}
                           element={<ProfileContainer1/>}/>
                    <Route path={'/users'}
                           element={<UsersContainer1/>}/>
                </Routes>
            </div>
        </div>

    );
}



