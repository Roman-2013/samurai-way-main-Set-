import {combineReducers, createStore} from 'redux';
import {profilePageReducer} from './profilePage-reducer';
import {messagesPageReducer} from './messagesPage-reducer';

let rootReducer = combineReducers({
    profilePageReducer,
    messagesPageReducer,
})

export let store = createStore(rootReducer)

export type AppRootStateType=ReturnType<typeof rootReducer>