import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, StatePropsType} from './App';
import {BrowserRouter} from 'react-router-dom';
import {AppRootStateType, store} from './redux/redux-store';

//console.log(store.getState())
 let rerenderEntireTree = (state:AppRootStateType) => {
    ReactDOM.render(

        <BrowserRouter>
               <App
                state={store.getState()}
                dispatch={store.dispatch}
            />,
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(store.getState() )

store.subscribe(()=>{
    let state=store.getState()
    rerenderEntireTree(state)
})