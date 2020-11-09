import React from 'react'
import {Link} from 'react-router-dom'
import './DRAS.css'

export default function DRAS() {
    return (
        <div>
            <h1 className="h1title"><b>DRAS</b></h1>
            <Link to='/register'><h2>Register</h2></Link>
            <Link to="/login"><h2>Login</h2></Link>
        </div>
    )
}
