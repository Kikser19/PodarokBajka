import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import ChangePassword from './pages/changePassword/ChangePassword';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';

function App () {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/change-password' element={<ChangePassword/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
        </Routes>
      </Router>
  );
}

export default App;
