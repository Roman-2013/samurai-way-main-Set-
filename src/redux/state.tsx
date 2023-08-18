import {StatePropsType, StorePropsType} from '../App';

export type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessagesAC> |
    ReturnType<typeof sendMessageAC>

export let store: StorePropsType = {
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.payload.newText
            this._callSubscriber(this._state)
        }
        else if (action.type ==='ADD-MESSAGES'){
            let newMes = {
                id: 6,
                message: this._state.messagesPage.newMessages
            }
            this._state.messagesPage.messages.push(newMes)
            this._state.messagesPage.newMessages = ''
            this._callSubscriber(this._state)
        }
        else if(action.type==='SEND-MESSAGES'){
            this._state.messagesPage.newMessages = action.payload.newMessages
            this._callSubscriber(this._state)
        }
    }
}


export let addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export let updateNewPostTextAC = (newText:string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload:{newText}
    } as const
}
export let addMessagesAC=()=>{
    return {
        type:'ADD-MESSAGES'
    }as const
}
export let sendMessageAC=(newMessages: string)=>{
    return {
        type:'SEND-MESSAGES',
        payload:{newMessages}
    }as const
}

//------------------------------просто отобразить state через консоль браузера
interface CustomWindow extends Window {
    _state: StatePropsType // Замените "any" на тип своего состояния
}

(window as unknown as CustomWindow)._state = store._state;


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


