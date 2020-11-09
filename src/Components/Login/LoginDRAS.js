import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Route, Link} from 'react-router-dom';

import "./LoginDRAS.css";

const LoginValidationSchema = Yup.object().shape({
  LoginFormPassword: Yup.string().min(8, 'Enter atleast 8 characters').required('Required'),
  LoginFormEmail: Yup.string().email('Please enter a valid email address').required('Required')        
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
      
      <input type="submit" value="Login"/>
      {/* <Link 
          to={{pathname:"/DRASLogin"}}
          className=""
      >
          Login
          </Link> */}
    </form>

    );
}