import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  const [commentsToShow, setCommentsToShow] = useState([]);

  const deleteComment = async (commentId) => {
    try {
      // ...code to delete the comment from the API
    } catch (error) {
      alert('Error - comment was NOT deleted!');
    }
  };

  return (
    <div className="text-center">
      <ListGroup className="mt-2">
        {commentsToShow.map((comment) => (
          <ListGroup.Item key={comment._id}>
            {comment.comment}
            <Button
              variant="danger"
              className="ml-2"
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SingleComment;
