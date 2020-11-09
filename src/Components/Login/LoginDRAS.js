import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Route, Link} from 'react-router-dom';

import "./LoginDRAS.css";

const LoginValidationSchema = yup.object().shape({
  LoginFormPassword: yup.string().min(8, 'Enter atleast 8 characters').required('Required'),
  LoginFormEmail: yup.string().email('Please enter a valid email address').required('Required')        
});

export default function LoginDRAS() {
  const { register, handleSubmit, errors } = useForm({
    mode:'onChange',
    validationSchema: LoginValidationSchema
  });
  const onLoginDRASSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onLoginDRASSubmit)}>
      <h1>Login To DRAS</h1>
      <label>Email ID:</label>
      <input
          name="LoginFormEmail"
          id="LoginFormEmail"
          ref={register}
          />
      {errors.LoginFormEmail && <div className="ErrorMsg">{errors.LoginFormEmail.message}</div>}
      <label>Password:</label>
      <input
          name="LoginFormPassword"
          id="LoginFormPassword"
          ref={register}
          />
      {errors.LoginFormPassword && <div className="ErrorMsg">{errors.LoginFormPassword.message}</div>}
      
      <Link to="/userhome"><input type="submit" value="Login"/></Link>
      <p>New here? <Link to="/Register">Register here</Link> </p> 
      <br/>
      
      <Link to="/"><h2>Go to Home</h2></Link>
      
    </form>

    );
}