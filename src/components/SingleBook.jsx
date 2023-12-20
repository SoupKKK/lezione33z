import { Card } from 'react-bootstrap';

const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
  return (
    <>
      <Card
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: `5px solid ${selectedBook === book.asin ? 'coral' : 'transparent'}`,
          transition: 'border-color 0.3s ease-in-out', // Aggiunta della transizione
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
