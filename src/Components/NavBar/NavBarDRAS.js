import React, { Component } from 'react'
import {Nav, Button, Form, FormControl, Navbar, ReactBootstrapStyle} from 'react-bootstrap'

// import {Nav} from '@bit/react-bootstrap.react-bootstrap.nav'
// import Form from '@bit/react-bootstrap.react-bootstrap.form'
// import FormControl from '@bit/react-bootstrap.react-bootstrap.form-control'
// import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar'
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

export class NavBarDRAS extends Component {
    render() {
        return (
            <React.Fragment>
                
				<Navbar bg="primary" variant="dark" style={{ minWidth: 700 }}>
					<Navbar.Brand href="#home">DRAS</Navbar.Brand>

					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-light">Search</Button>
					</Form>
					<Nav className="mr-right" style={{'margin-left':100}}>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Pages</Nav.Link>
						<Nav.Link href="#pricing">Logout</Nav.Link>
					</Nav>
				</Navbar>
            </React.Fragment>
        )
    }
}

export default NavBarDRAS
