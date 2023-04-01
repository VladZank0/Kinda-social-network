import { NavLink } from 'react-router-dom';
import dialog from './DialogItem.module.css';

const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;
    return(
        <li className={dialog.dialogItem}> <NavLink to = {path}>{props.name}</NavLink> </li>
    )
}


export default DialogItem;