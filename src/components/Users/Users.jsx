import React from "react";
import Users_item from "./Users_Item/Users_item";
import users from './Users.module.css';

const Users = (props)=>{
    if(props.users.length === 0){
        
        props.setUsers(
            [
                {id:1, avatarURL: "./../avatar_me.jpg", followed: true, fullName: 'feknwf', location: {country:'Belarus', city: 'fkefk'} },
                {id:2, avatarURL: "./../avatar_me.jpg", followed: false, fullName: 'fewegknwf', location: {country:'Barcelona', city: 'fkefk'} },
                {id:3, avatarURL: "./../avatar_me.jpg", followed: true, fullName: 'ewwefekhhnfewwf', location: {country:'Russia', city: 'fkefk'} },
                {id:4, avatarURL: "./../avatar_me.jpg", followed: true, fullName: 'feknwf', location: {country:'Belarus', city: 'fkefk'} },
                {id:5, avatarURL: "./../avatar_me.jpg", followed: false, fullName: 'fekgewgnwf', location: {country:'Barcelona', city: 'fkefk'} },
                {id:6, avatarURL: "./../avatar_me.jpg", followed: true, fullName: 'feknwegwf', location: {country:'Russia', city: 'fkefk'} },
            ]
        );
    }
    
    let usersFilling = props.users.map((item) => <Users_item userId = {item.id} fullName = {item.fullName} avatar = {item.avatarURL} isFollower = {item.followed} follow = {props.follow} unfollow = {props.unfollow}/>)
   
    return(
        <section className = {users.users}>
            {/* <h1 className = {users.title}>Users</h1> */}
            <div className = {users.content}>
                {usersFilling}
            </div>
            <button className= {users.showMore}>Show More</button>
        </section>
    )

}
export default Users;