import logo from './logo.svg';
import './App.css';
import RegisterDRAS from './Components/Register/RegisterDRAS'
import { Link, Router } from 'react-router-dom';
import LoginDRAS from './Components/Login/LoginDRAS';

function App() {
  return (
    <div className="App">
      <RegisterDRAS/>
      {/* <Link 
        to={{pathname:"/RegisterDRAS"}}
        className=""
      >
          Register
        </Link> 
        <Link 
        to={{pathname:"/LoginDRAS"}}
        className=""
      >
          Login
        </Link>  */}{/* 
      <Router exact path="/RegisterDRAS" component={RegisterDRAS}/>
      <Router exact path="/DRASLogin" component={LoginDRAS}/> */}
    </div>
  );
}

export default App;
