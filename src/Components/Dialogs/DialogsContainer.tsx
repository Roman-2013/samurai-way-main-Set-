import React, {ChangeEvent, LegacyRef, useRef} from 'react';

import {addMessagesAC, sendMessageAC} from '../../redux/messagesPage-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {ActionsType} from '../../redux/store';
import {AppRootStateType} from '../../redux/redux-store';

//
// export type MessagesPropsType = {
//     messagesPage: MessagesPagePropsType
//     dispatch: (action: ActionsType) => void
// }


// export const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//         { store => {
//             let sendMessage = (value: string) => {
//                 store.dispatch(sendMessageAC(value))
//             }
//             let addMessages = () => {
//                 store.dispatch(addMessagesAC())
//             }
//
//             return <Dialogs
//                 addMessages={addMessages}
//                 sendMessage={sendMessage}
//                 messagesPage={store.getState().messagesPageReducer}
//             />
//         }
//     }
//     </StoreContext.Consumer>
// };

let mapStateToProps=(state:AppRootStateType)=>{
    return{
        messagesPage:state.messagesPageReducer
    }
}
let mapDispatchToProps=(dispatch:(action: ActionsType) => void)=>{
return {
    addMessages:()=>{
        dispatch(addMessagesAC())
    },
    sendMessage:(value:string)=>{
        dispatch(sendMessageAC(value))
    },
}
}


export const DialogsContainer= connect(mapStateToProps,mapDispatchToProps)(Dialogs)

