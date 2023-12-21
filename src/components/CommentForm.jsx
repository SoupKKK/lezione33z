import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CommentForm = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  });

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      // ...code to send the comment to the API
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div>
      <Form onSubmit={sendComment}>
        <Form.Group>
          {/* Input fields for comment text and rating */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
