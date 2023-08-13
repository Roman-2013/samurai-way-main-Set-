import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addMessages, addPost, sendMessage, state, subscribe, updateNewPostText} from './redux/state';
import {App, StatePropsType} from './App';
import {BrowserRouter} from 'react-router-dom';



 let rerenderEntireTree = (state:StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                sendMessage={sendMessage}
                addMessages={addMessages}
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />,
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)