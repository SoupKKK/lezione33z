import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title as="h1">Benvenuti nel nostro negozio!</Card.Title>
          <Card.Text>
            Trova qui tutto ciò che ti serve e altro ancora. Siamo qui per soddisfare le tue esigenze!
          </Card.Text>
          <Button variant="secondary">Esplora</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Welcome;
