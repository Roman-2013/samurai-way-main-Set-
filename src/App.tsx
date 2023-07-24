import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile, ProfilePropsType} from './Components/Profile/Profile';
import {Dialogs, DialogsPropsType} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


type AppPropsType = ProfilePropsType & DialogsPropsType

export const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path={'/profile'} element={<Profile post={props.post}/>}/>
                    </Routes>
                </div>


            </div>
        </BrowserRouter>
    );
}



