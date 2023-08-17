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
export type StatePropsType = {
    addPost: () => void
    updateNewPostText:(newText:string)=>void
    sendMessage:(newMessages:string)=>void
    addMessages:()=>void
    state:{  profilePage: ProfilePropsType,   messagesPage: MessagesPagePropsType}
}
export type AppPropsType = {
    store: StatePropsType

}
export const App = (props: AppPropsType) => {


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar frends={props.store.state.messagesPage.dialogs}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/dialogs/*'}
                           element={<Dialogs
                               newMessages={props.store.state.messagesPage.newMessages}
                               addMessages={props.store.addMessages}
                               sendMessage={props.store.sendMessage}
                               dialogs={props.store.state.messagesPage.dialogs}
                               messages={props.store.state.messagesPage.messages}
                           />}/>
                    <Route path={'/profile'}
                           element={<Profile
                               updateNewPostText={props.store.updateNewPostText}
                               addPost={props.store.addPost}
                               newPostText={props.store.state.profilePage.newPostText}
                               post={props.store.state.profilePage.post}
                           />
                    }/>
                </Routes>
            </div>
        </div>

    );
}



