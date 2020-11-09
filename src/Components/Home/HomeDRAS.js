import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Route, Link} from 'react-router-dom';
import { Navbar } from 'rsuite';

import "./HomeDRAS.css";
import NavBarDRAS from "../NavBar/NavBarDRAS";

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
      <React.Fragment>
          <NavBarDRAS/>
        <form onSubmit={handleSubmit(onLoginDRASSubmit)}>
            <h1>Register To DRAS</h1>
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
            
            <input type="submit" value="Register"/>
            {/* <Link 
                to={{pathname:"/DRASLogin"}}
                className=""
            >
                Login
                </Link> */}
        </form>
    </React.Fragment>
    );
}