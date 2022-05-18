import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default class extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <Container fluid='md' id='content'>
        <Card>
          <Card.Body>
            <Card.Title >Home</Card.Title>
            <Card.Text>
              We are the forest.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
  
}