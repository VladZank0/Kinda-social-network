import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Profile from './components/Profile/Profile';

const App = () =>{
  
  return(
      <div className='App'>
        <div className='container'>
          <div className='app-wrapper'>
            <Header />
            <Nav />
            <main className='main'>
              <Routes>
                <Route path="" element = {<Profile />} />
                <Route path="/dialogs/*"  element = {<DialogsContainer />} />
                <Route path="/users/*"  element = {<UsersContainer />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
     
  )
}
export default App;

