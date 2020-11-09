import React from 'react'
import { Link, Route } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <>
        <h1>
            Error 404!
            Page Not Found
        </h1>
        <Link to="/"><h2>Go to Home</h2></Link>
        </>
    )
}
