import {combineReducers, createStore, EmptyObject, Store} from 'redux';
import {profilePageReducer} from './profilePage-reducer';
import {messagesPageReducer} from './messagesPage-reducer';
import {UsersReducer} from './users-reducer';

let rootReducer = combineReducers({
    profilePageReducer,
    messagesPageReducer,
    UsersReducer,
})
export type AppRootStateType = ReturnType<typeof rootReducer>
//export type StoreType = Store<AppRootStateType, ActionsType>

export let store = createStore(rootReducer)

declare global {
    interface Window {
        store: typeof store;
    }
}
window.store=store