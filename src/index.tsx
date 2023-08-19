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
            />,
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store.getState() )

store.subscribe(rerenderEntireTree)