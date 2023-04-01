import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return ({ 
        dialogs: state.dialogsReducer.dialogsData,
        messages: state.dialogsReducer.messagesData,
        newMessageText: state.dialogsReducer.newMessageText
    })
}
let mapDispatchToProps = (dispatch) => {
    
    return (
        {   updateMessageTextAction(messageText) {
                dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', messageText : messageText});},
            addMessageAction(message) {
                dispatch({type: 'ADD-MESSAGE', newMessage : message});} 
        } )
}

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;