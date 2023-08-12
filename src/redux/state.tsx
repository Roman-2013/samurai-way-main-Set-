import {rerenderEntireTree} from '../render';
import {StatePropsType} from '../App';


export let state: StatePropsType = {
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
}


//------------------------------просто отобразить state через консоль браузера
interface CustomWindow extends Window {
    state: StatePropsType // Замените "any" на тип своего состояния
}

(window as unknown as CustomWindow).state = state;
//------------------------------------

export let addMessages = () => {
    let newMes = {
        id: 6,
        message: state.messagesPage.newMessages
    }
    state.messagesPage.messages.push(newMes)
    state.messagesPage.newMessages = ''
    rerenderEntireTree(state)
}
export let sendMessage = (newMessages: string) => {
    state.messagesPage.newMessages = newMessages
    rerenderEntireTree(state)
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.post.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

