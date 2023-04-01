const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SHOW_MORE_USERS = 'SHOW-MORE-USERS';
const SET_USERS = 'SET-USERS';
let initialState = {
    
    users: []
    
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        
        case FOLLOW : {

            return{
                
                ...state,
                users: state.users.map((item)=>{
                        if(item.id == action.userId){
                            return {
                                ...item, followed: true
                            }
                            
                        } else return item
                })
            }
        }
        case UNFOLLOW : { 
            return{
                ...state,
                users: state.users.map((item)=>{
                        if(item.id == action.userId){
                            return {
                                ...item, followed: false
                            }
                            
                        } else return item
                })
            }
        }
        // case  SHOW_MORE_USERS : {
            
        // }

        case SET_USERS : {
            return {
                ...state, users: [...action.users]
            }
        }

        default: return state;
    }

};

export const followAC = (userId) => {
    return {
        type: 'FOLLOW', userId : userId
    }
};
export const unfollowAC = (userId) => {
    return {
        type: 'UNFOLLOW', userId : userId
    }
};

export const setUsersAC = (users) => {
    return{
        type: 'SET-USERS', users : users
    }
};