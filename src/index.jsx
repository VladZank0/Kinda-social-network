import store from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = () =>{

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store = {store}>
          <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

// сначала отрисуем все
rerender(); 
// а теперь передадим в state rerender, чтобы отрисовывать уже при ИЗМЕНЕНИЯХ!!!
store.subscribe(()=>{
  let state = store.getState();
  rerender(state);
});