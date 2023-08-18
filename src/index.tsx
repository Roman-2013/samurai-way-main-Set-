import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store} from './redux/state';
import {App, StatePropsType} from './App';
import {BrowserRouter} from 'react-router-dom';






 let rerenderEntireTree = (state:StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
               <App
                store={store}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addMessages={store.addMessages.bind(store)}
                sendMessage={store.sendMessage.bind(store)}
            />,
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store.getState() )

store.subscribe(rerenderEntireTree)