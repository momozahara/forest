import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './Router';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar fixed='top' bg='light' expand="lg">
				<Navbar.Brand href="/">Forest</Navbar.Brand>
				<Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</Button>
				<Navbar.Collapse id='navbarNav'>
					<Nav as='ul'>
						<Nav.Item as='li'>
							{/* <Nav.Link href='/'>Home</Nav.Link> */}
							<Link className='nav-link' to='/'>Home</Link>
						</Nav.Item>
						<Nav.Item as='li'>
							{/* <Nav.Link href='/contact'>Contact</Nav.Link> */}
							<Link className='nav-link' to='/contact'>Contact</Link>
						</Nav.Item>
						<Nav.Item as='li'>
							{/* <Nav.Link href='/about'>About</Nav.Link> */}
							<Link className='nav-link' to='/about'>About</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className='banner'>
				<h1 className='banner-header'>Forest</h1>
			</div>
			<Router  />
		</BrowserRouter>
	)
}

export default App;