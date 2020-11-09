import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Route, Link} from 'react-router-dom';
import { Navbar } from 'rsuite';

import "./HomeDRAS.css";
import NavBarDRAS from "../NavBar/NavBarDRAS";

const URLValidationSchema = yup.object().shape({
  URLField: yup.string().url('Please enter a URL').required('Required'),     
});

export default function UserHome() {
  const { register, handleSubmit, errors } = useForm({
    mode:'onChange',
    validationSchema: URLValidationSchema
  });
  const onURLSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
      <React.Fragment>
          <NavBarDRAS/>
        <form onSubmit={handleSubmit(onURLSubmit)}>
            <h1>DRAS</h1>
            <label>Enter URL:</label>
            <input
                name="URLField"
                id="URLField"
                ref={register}
                />
            {errors.URLField && <div className="ErrorMsg">{errors.URLField.message}</div>}
            
            <input type="submit" value="Go"/>
        </form>
    </React.Fragment>
    );
}