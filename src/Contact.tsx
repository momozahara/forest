import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default class Contact extends React.Component<{}, {}> {
	constructor(props: {}) {
		super(props);
	}
	
	render() {
		return (
			<Container fluid='md' id='content'>
				<Card>
					<Card.Body>
						<Card.Title >Contact</Card.Title>
						<Card.Text>
							This is the contact page.
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		)
	}
	
}