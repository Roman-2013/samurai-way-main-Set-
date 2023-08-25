import {combineReducers, createStore, EmptyObject, Store} from 'redux';
import {profilePageReducer} from './profilePage-reducer';
import {messagesPageReducer} from './messagesPage-reducer';
import {MessagesPagePropsType, ProfilePropsType} from '../App';
import {ActionsType} from './store';

let rootReducer = combineReducers({
    profilePageReducer,
    messagesPageReducer,
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export type StoreType = Store<AppRootStateType, ActionsType>

export let store = createStore(rootReducer)

