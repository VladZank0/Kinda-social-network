import { connect } from "react-redux";
import Profile_posts from './Profile_posts';

let mapStateToProps = (state) => {
    return(
        {
            postsData: state.profileReducer.postsData,
            newPostText: state.profileReducer.newPostText
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return(
        {
            addPostAction(input){
                dispatch({type: 'ADD-POST', input: input})
            },

            updateInputAction(text){
                dispatch({type:'UPDATE-NEW-POST-TEXT', postText: text})
            } 
        }
    )
}

let Profile_postsContainer = connect(mapStateToProps, mapDispatchToProps)(Profile_posts);



export default Profile_postsContainer;