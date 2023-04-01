import dialog from './Dialogs.module.css';
import React from 'react';
import DialogItem from './DialogItem/DialogItem'
import Message from './DialogMessage/DialogMessage'

const Dialogs = (props) => {

    let newMessageText = props.newMessageText;
    
    const dialogFilling = props.dialogs.map((item, index) => {
        
        return <DialogItem id = {item.id} key = {index} name = {item.name} />
    });

    const messageFilling = props.messages.map((item, index) => {
        return <Message key = {index} message = {item.message}/>
    });
    
    const messageInput = React.createRef();

    const updateMessageText = ()=>{
        let messageText = messageInput.current.value;
        props.updateMessageTextAction(messageText);
    };
    const createMessage = () =>{
        let message = messageInput.current.value;
        if(message != ''){
            props.addMessageAction(message);
            messageInput.current.value = '';}
        };

    return(
     
        <div className={dialog.messager}>
            <h1 className= {dialog.title}>Dialogs</h1>

            <div className={dialog.wrapper}>
                <ul className={dialog.dialogItems}>
                    {dialogFilling}
                </ul>

                <div className={dialog.dialogContent}>
                    <div className={dialog.messageWrapper}>
                        {messageFilling}
                    </div>
                   
                    <div className= {dialog.messageForm}>
                        <textarea value = {newMessageText} onChange = {updateMessageText} ref = {messageInput} className= {dialog.messageForm__input} placeholder="Type your message..."></textarea>
                        <button onClick = {createMessage} className= {dialog.messageForm__btn}> Send </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dialogs;