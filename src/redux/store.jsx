// import img2 from "./../logo.svg";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer} from "./dialogs-reducer";



let store = {

    _state: {
       

    },
    toRerender(){

    },
    subscribe(rerender){
        this.toRerender = rerender;
    },
    getState(){
        return store._state;
        // store пишем, чтобы не пришлось применять bind, т.к. все равно получаем state отсюда
    },

    dispatch(action){
       this._state = profileReducer(this._state, action);
       this._state = dialogsReducer(this._state, action);

       this.toRerender();
    }

}

export default store;