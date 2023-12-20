import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';

const Books = () => {
  if (!Array.isArray(fantasy)) {
    console.error('Fantasy data is not an array');
    return null; // Return null or handle the error accordingly
  }

  return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} lg= {3} key={book.asin}>
            <Card className="book-cover m-3">
              <Card.Img src={book.img} alt={`${book.title} cover`} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Books;
