import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import "./LoginDRAS.css";

export default function App() {
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login To DRAS</h1>
      
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

      <input type="submit" value="Login"/>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
