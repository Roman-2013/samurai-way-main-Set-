import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';

export type MessagesPagePropsType={
    messages:Array<{ id:number, message:string}>
    dialogs:Array<{id:number, name:string, image:string}>
}
export type ProfilePagePropsType={
    post:Array<{id: number, message: string, likesCount: number}>

}
export type StatePropsType={
    profilePage: ProfilePagePropsType
    messagesPage:MessagesPagePropsType
}
export type AppPropsType={
    state:StatePropsType
}
export const App = (props: AppPropsType) => {


    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar frends={props.state.messagesPage.dialogs}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs
                                   dialogs={props.state.messagesPage.dialogs }
                                   messages={props.state.messagesPage.messages}
                               />}/>
                        <Route path={'/profile'}
                               element={<Profile post={props.state.profilePage.post}
                               />}/>
                    </Routes>
                </div>
            </div>

    );
}



