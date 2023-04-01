import dialog from './DialogMessage.module.css';


const Message = (props)=>{
    return(
        <div className={dialog.message}>{props.message}</div>
    )
}

export default Message;