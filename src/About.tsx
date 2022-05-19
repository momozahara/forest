import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default () => {
  return (
    <Container fluid='md' id='content'>
      <Card>
        <Card.Body>
          <Card.Title >About</Card.Title>
          <Card.Text>
            Who are we? We are the forest.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}