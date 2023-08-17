import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store, subscribe, updateNewPostText} from './redux/state';
import {App, StatePropsType} from './App';
import {BrowserRouter} from 'react-router-dom';



 let rerenderEntireTree = (state:StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
               <App
                // sendMessage={stor.sendMessage}
                // addMessages={stor.addMessages}
                store={store}
                // addPost={stor.addPost}
                // updateNewPostText={updateNewPostText}
            />,
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store.state )
subscribe(rerenderEntireTree)