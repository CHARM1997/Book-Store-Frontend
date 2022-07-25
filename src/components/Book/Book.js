import { Button } from '@mui/material';
import React from 'react'

const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;
  return (
    <div>
        <img src={image} alt={name} width="300" height="400"/>
        <article> By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <h5>{_id}</h5>
        <Button>Update</Button>
        <Button>Delete</Button>
    </div>
  )
};

export default Book;