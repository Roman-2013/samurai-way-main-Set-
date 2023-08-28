import {MessagesPagePropsType, ProfilePropsType} from '../App';
import {addPostAC, profilePageReducer, updateNewPostTextAC} from './profilePage-reducer';
import {addMessagesAC, messagesPageReducer, sendMessageAC} from './messagesPage-reducer';

 type StatePropsType = {
    profilePage: ProfilePropsType,
    messagesPage: MessagesPagePropsType
}
 type StorePropsType={
    _state:StatePropsType
    _callSubscriber:(_state:StatePropsType)=>void
    subscribe:(observer: (state: StatePropsType) => void)=>void
    getState:()=>StatePropsType
    dispatch: (action: ActionsType) => void
}

 type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessagesAC> |
    ReturnType<typeof sendMessageAC>

 let store: StorePropsType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi,how are you', likesCount: 5},
                {id: 2, message: 'It\'s my first post', likesCount: 13},
            ],
            newPostText: ''

        },
        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    image: 'https://static5.tgstat.ru/channels/_0/a3/a3193315ddbeecd0c7993cf1ac3cf9ba.jpg'
                },
                {
                    id: 2,
                    name: 'Andrey',
                    image: 'https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-58.jpg'
                },
                {
                    id: 3,
                    name: 'Sveta',
                    image: 'https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-58.jpg'
                },
                {
                    id: 4,
                    name: 'Sascha',
                    image: 'https://aniyuki.com/wp-content/uploads/2022/03/aniyuki-anime-girl-avatar-58.jpg'
                },
                {
                    id: 5,
                    name: 'Viktor',
                    image: 'https://static5.tgstat.ru/channels/_0/a3/a3193315ddbeecd0c7993cf1ac3cf9ba.jpg'
                },
                {
                    id: 6,
                    name: 'Valera',
                    image: 'https://static5.tgstat.ru/channels/_0/a3/a3193315ddbeecd0c7993cf1ac3cf9ba.jpg'
                },
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessages: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StatePropsType) {
        console.log('state changed')
    },
    subscribe(observer: (state: StatePropsType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {

       this._state.profilePage= profilePageReducer(this._state.profilePage, action)
       this._state.messagesPage= messagesPageReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    }
}





//------------------------------просто отобразить state через консоль браузера
// interface CustomWindow extends Window {
//     _state: StatePropsType // Замените "any" на тип своего состояния
// }
//
// (window as unknown as CustomWindow)._state = store._state;
//

//------------------------------------


// export let addMessages = () => {
//     let newMes = {
//         id: 6,
//         message: state.messagesPage.newMessages
//     }
//     state.messagesPage.messages.push(newMes)
//     state.messagesPage.newMessages = ''
//     rerenderEntireTree(state)
// }
// export let sendMessage = (newMessages: string) => {
//     state.messagesPage.newMessages = newMessages
//     rerenderEntireTree(state)
// }


// export let addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.post.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }

// export let updateNewPostText = (newText: string) => {
//     store.state.profilePage.newPostText = newText
//     rerenderEntireTree(store.state)
// }


