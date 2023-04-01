import {combineReducers, legacy_createStore as createStore}  from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import { usersReducer } from "./users-reducer";

let reducers = combineReducers({
    dialogsReducer: dialogsReducer,
    profileReducer: profileReducer,
    usersReducer: usersReducer
});

let store = createStore(reducers);

export default store;

