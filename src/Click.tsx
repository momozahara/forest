import React, { useEffect, useRef, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default () => {

  const [count, setCount] = useState(0);
  let buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current!.innerText = `Click count: ${count}`;
  }, [count]);
  
  return (
    <Container fluid='md' id='content'>
      <Card>
        <Card.Body>
          <Card.Title>Click</Card.Title>
          <Card.Text>
            Click the forest.
          </Card.Text>
          <Button style={{ color: 'black', fontSize: '1.5rem' }} ref={buttonRef} onClick={() => setCount(count + 1)} />
        </Card.Body>
      </Card>
    </Container>
  )
}