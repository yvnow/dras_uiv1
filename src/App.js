import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import RegisterDRAS from './Components/Register/RegisterDRAS'
import LoginDRAS from './Components/Login/LoginDRAS'
import UserHome from './Components/UserHome/UserHome'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import DRAS from './Components/DRASInit/DRAS';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={DRAS} />
        <Route exact path='/register' component={RegisterDRAS}  />
        <Route exact path='/login' component={LoginDRAS}/>
        <Route exact path="/userhome" component={UserHome}/>
        <Route component={ErrorPage}/>
      </Switch>
      {/* <LoginDRAS/>
      <RegisterDRAS/>
      <HomeDRAS/> */}
    </div>
  );
}

export default App;
