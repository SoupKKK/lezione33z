import React from 'react';
import SingleComment from './SingleComment';
import { ListGroup } from 'react-bootstrap';

const CommentList = ({ commentsToShow }) => (
  <ListGroup className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
