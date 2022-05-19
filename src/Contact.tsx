import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default () => {
  return (
    <Container fluid='md' id='content'>
      <Card>
        <Card.Body>
          <Card.Title >Contact</Card.Title>
          <Card.Text>
            Want to contact us? We are the forest.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}