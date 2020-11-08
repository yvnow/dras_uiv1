import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Route, Link} from 'react-router-dom';

import "./RegisterDRAS.css";

const RegValidationSchema = Yup.object().shape({
  RegFormFullName: Yup.string().min(3, 'Please enter more than 3 characters').required('Required'),
  RegFormPassword: Yup.string().min(8, 'Enter atleast 8 characters').required('Required'),
  RegFormEmail: Yup.string().email('Please enter a valid email address').required('Required'),
  RegFormCPassword: Yup.string().oneOf([Yup.ref('RegFormPassword'), null], 'Password must match')
        
});

export default function RegisterDRAS() {
  const { register, handleSubmit, errors } = useForm({
    mode:'onChange',
    validationSchema: RegValidationSchema
  });
  const onRegisterDRASSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onRegisterDRASSubmit)}>
      <h1>Register To DRAS</h1>
      <label> Full Name:</label>
      <input
          name="RegFormFullName"
          id="RegFormFullName"
          ref={register}
      />
      {errors.RegFormFullName && <div className="ErrorMsg">{errors.RegFormFullName.message}</div>}
      <label>Email ID:</label>
      <input
          name="RegFormEmail"
          id="RegFormEmail"
          ref={register}
          />
      {errors.RegFormEmail && <div className="ErrorMsg">{errors.RegFormEmail.message}</div>}
      <label>Password:</label>
      <input
          name="RegFormPassword"
          id="RegFormPassword"
          ref={register}
          />
      {errors.RegFormPassword && <div className="ErrorMsg">{errors.RegFormPassword.message}</div>}
      
      <label>Confirm Password:</label>
      <input
          name="RegFormCPassword"
          id="RegFormCPassword"
          ref={register}
          />
      {errors.RegFormCPassword && <div className="ErrorMsg">{errors.RegFormCPassword.message}</div>}
      <input type="submit" value="Register"/>
      {/* <Link 
          to={{pathname:"/DRASLogin"}}
          className=""
      >
          Login
          </Link> */}
    </form>

    );
}