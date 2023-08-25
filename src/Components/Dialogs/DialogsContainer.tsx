import React, {ChangeEvent, LegacyRef, useRef} from 'react';

import {addMessagesAC, sendMessageAC} from '../../redux/messagesPage-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

//
// export type MessagesPropsType = {
//     messagesPage: MessagesPagePropsType
//     dispatch: (action: ActionsType) => void
// }


export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        { store => {
            let sendMessage = (value: string) => {
                store.dispatch(sendMessageAC(value))
            }
            let addMessages = () => {
                store.dispatch(addMessagesAC())
            }

            return <Dialogs
                addMessages={addMessages}
                sendMessage={sendMessage}
                messagesPage={store.getState().messagesPageReducer}
            />
        }
    }
    </StoreContext.Consumer>

};

