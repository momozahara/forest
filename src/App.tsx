import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import './App.css';

export default class App extends React.Component<{}, {}> {
	constructor(props: {}) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Navbar fixed='top' bg='light' expand="lg">
					<Navbar.Brand href="/">Forest</Navbar.Brand>
					<Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</Button>
					<Navbar.Collapse id='navbarNav'>
						<Nav as='ul'>
							<Nav.Item as='li'>
								<Nav.Link href='/'>Home</Nav.Link>
							</Nav.Item>
							<Nav.Item as='li'>
								<Nav.Link href='/contact'>Contact</Nav.Link>
							</Nav.Item>
							<Nav.Item as='li'>
								<Nav.Link href='/about'>About</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className='banner'>
					<h1 className='banner-header'>Forest</h1>
				</div>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</BrowserRouter>
			</div>
		)
	}
	
}