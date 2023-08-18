import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';
import {Dialogs} from './Components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';



export type MessagesPagePropsType = {
    messages: Array<{ id: number, message: string }>
    dialogs: Array<{ id: number, name: string, image: string }>
    newMessages:string
}
export type MessagesPropsType = {
    messages: Array<{ id: number, message: string }>
    dialogs: Array<{ id: number, name: string, image: string }>
    newMessages:string
    sendMessage:(newMessages:string)=>void
    addMessages:()=>void
}

export type ProfilePagePropsType={
    post: Array<{ id: number, message: string, likesCount: number }>
    addPost: () => void
    newPostText:string
    updateNewPostText:(newText:string)=>void
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
    addPost: () => void
    updateNewPostText:(newText:string)=>void
    sendMessage:(newMessages:string)=>void
    addMessages:()=>void
}




export type AppPropsType = {
    store: StorePropsType
    addPost: () => void
    updateNewPostText:(newText:string)=>void
    sendMessage:(newMessages:string)=>void
    addMessages:()=>void

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
                               addMessages={props.addMessages}
                               sendMessage={props.sendMessage}
                               dialogs={props.store.getState().messagesPage.dialogs}
                               messages={props.store.getState().messagesPage.messages}
                           />}/>
                    <Route path={'/profile'}
                           element={<Profile
                               updateNewPostText={props.updateNewPostText}
                               addPost={props.addPost}
                               newPostText={props.store.getState().profilePage.newPostText}
                               post={props.store.getState().profilePage.post}
                           />
                    }/>
                </Routes>
            </div>
        </div>

    );
}



