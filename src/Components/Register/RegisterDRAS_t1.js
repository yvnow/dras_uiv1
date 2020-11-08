import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, useWatch } from "react-hook-form";

import "./RegisterDRAS.css";
import { Link } from "react-router-dom";

export default function App() {
  const { register, errors, handleSubmit, getValues, watch } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register To DRAS</h1>
      <label> Full Name:</label>
      <input
        name="RegFormFullName"
        ref={register({
            required:"Please enter your full name",
            pattern:{
                value:/^[A-Za-z]+$/i,
                message:"Please enter your name without numbers or special characters"
            }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="RegFormFullName"
        render={({messages})=>{
            console.log("messages", messages);
            return messages
            ? Object.entries(messages).map(([type, message])=>(
                <p key={type}>{message}</p>
            )
            )
            :null;
        }
    
    }
      />
      <label>Email ID:</label>
      <input
        name="RegFormEmail"
        ref={register({
            required:"Please enter your Email",
            pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:"Please enter email"
            }
        })}
        />
      <ErrorMessage
        errors={errors}
        name="RegFormEmail"
        render={({messages})=>{
            console.log("messages", messages);
            return messages
            ? Object.entries(messages).map(([type, message])=>(
                <p key={type}>{message}</p>
            )
            )
            :null;
        }
    }
      />
    <label>Password:</label>
    <input
        name="RegFormPassword"
        ref={register({
            required:"Please enter your Password",
            minLength: {
              value: 9,
              message: "Password must be greater than 8 characters"
            }
        })}
        />
      <ErrorMessage
        errors={errors}
        name="RegFormPassword"
        render={({messages})=>{
            console.log("messages", messages);
            return messages
            ? Object.entries(messages).map(([type, message])=>(
                <p key={type}>{message}</p>
            )
            )
            :null;
        }
    }
    />

<label>Confirm Password:</label>
    <input
        name="RegFormCPassword"
        ref={register({
            required:"Please enter your Password",
            validate:(value)=>value===watch('RegFormPassword')|| <span>Password fields must match</span>,
        })}
        />
      <ErrorMessage
        errors={errors}
        name="RegFormCPassword"
        render={({messages})=>{
            console.log("messages", messages);
            return messages
            ? Object.entries(messages).map(([type, message])=>(
                <p key={type}>{message}</p>
            ))
            :null;
        }
    }
    />
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
