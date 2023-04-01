const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: "1", name: "Vlad"},
        {id: "2", name: "Max"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Lena"},
        {id: "5", name: "Yana"},
        {id: "6", name: "Vitaliy"}
    ],
    messagesData: [
        { message: "А че так?"},
        { message: "Вот так вот"},
        { message: "Ладно"},
        { message: "Прохладно"},
        { message: "ОК ЛАДНО"}
    ],

    newMessageText: ''
} 

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {message:action.newMessage}],
                newMessageText: ''
            };
        } case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.messageText,
            };
        } default: return state;
    }
  
}