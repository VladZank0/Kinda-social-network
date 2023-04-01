import img1 from "./../avatar_me.jpg";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
            
    ],
    newPostText: ''
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:{
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"];
            const d = new Date();
            let day = d.getDate();
            let month = monthNames[d.getMonth()];
            let year = d.getFullYear();
            let time = `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
            let newPost = {
                PersonName:"Vlad Zanko",
                message: action.input,
                img : img1,
                time: `${day} ${month} ${year}\n${time}`
            }
            return {
                ...state, 
                postsData: [newPost,...state.postsData],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{ 
            return{
                ...state,
                newPostText:action.postText
            };
        }
        default: return state;
    }

}