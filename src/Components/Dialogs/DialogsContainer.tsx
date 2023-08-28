import React, {ChangeEvent, LegacyRef, useRef} from 'react';

import {ActionsType, addMessagesAC, sendMessageAC} from '../../redux/messagesPage-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppRootStateType} from '../../redux/redux-store';
import {MessagesPagePropsType} from '../../App';

export type MapStateToProps = {
    messagesPage: MessagesPagePropsType
}
export type MapDispatchToProps = {
    addMessages: () => void
    sendMessage: (value: string) => void
}

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        messagesPage: state.messagesPageReducer

    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void): MapDispatchToProps => {
    return {
        addMessages: () => {
            dispatch(addMessagesAC())
        },
        sendMessage: (value: string) => {
            dispatch(sendMessageAC(value))
        },

    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

