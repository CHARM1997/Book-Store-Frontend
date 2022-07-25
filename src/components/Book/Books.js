import React, { useEffect, useState } from 'react'

import axios from 'axios';
const URL = "http://localhost:5000/books";
const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data)
};
const Books = () => {
    const [Books, setBooks] = useState();
    useEffect(() => {
        fetchHandler().then(data=>setBooks(data))
    }, []);
    console.log(Books);
  return (
    <div>All Books are here</div>
  )
};

export default Books;