import React from "react";
import profile from "./Profile_posts.module.css";
import Post from './Post/Post';

const Profile_posts = (props) => {
    
    let postFilling = props.postsData.map((item,i) =>{
        return <Post PersonName= {item.PersonName} key = {i} img = {item.img} message = {item.message} time = {item.time}/>
    });

    let newPostElement = React.useRef();
    let addPost = () => {
        let input = newPostElement.current.value;

        if(input!=''){
            props.addPostAction(input);
        }
    }

    let updateInput = () =>{
        let text = newPostElement.current.value;
        props.updateInputAction(text);

    }
    return(
        <div className= {profile.posts}>
            <h3 className= {profile.postsTitle}>My posts</h3>
            <form action="" className= {profile.postsForm}>
                <textarea value = {props.newPostText} ref={newPostElement} onChange={updateInput} className= {profile.postsInput} placeholder='Your News...'></textarea>
                <button onClick= {addPost}  type="button" className= {profile.postsBtn}>Post</button>
            </form>
            <div className= {profile.postsContent}>
                {postFilling}
            </div> 
        </div>
    )
}

export default Profile_posts;