import React from "react";
import avatar from './../../../avatar_me.jpg';
import users from './Users_item.module.css'
const Users_item = (props) => {

    return(
        <div className = {users.item}>
            <div className= {users.avatar}>
                <img src = {avatar} alt=""/>
            </div>
            <div className = {users.info}>
                <h3 className= {users.fullName}>{props.fullName}</h3>

                {props.isFollower ?  <button onClick={()=>{props.unfollow(props.userId)}} className = {users.following}>Follow</button> : <button onClick={()=>{props.follow(props.userId)}} className = {users.unfollowing}>Unfollow</button>}
               
            </div>
        </div>
    )
}

export default Users_item;