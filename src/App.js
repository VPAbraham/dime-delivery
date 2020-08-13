import React from 'react';
import './App.scss';
import SignUp from './pages/SignUp/SignUp';
import SubConfirm from './pages/SubConfirm/SubConfirm';
import { Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <div className='form-container'>
          <SignUp />
        </div>
        <Route path='/complete'>
          <SubConfirm />
        </Route>

       
      </div>
  );
}

export default App;
