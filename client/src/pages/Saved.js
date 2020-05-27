import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Book from "../components/Book";
import API from "../utils/API";
import { Grid, Container, List, ListItem } from '@material-ui/core';

function Saved() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    loadBooks()
  }, []);

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <div className="saved-books">
      <Container className="saved-books-wrapper">
        <Grid container>
          <Grid item sm={12}>
            <Header>
              My Book List
            </Header>
            <div id="notifications"></div>
            <div className="saved-books-container">
              {books.length ? (
                <List>
                  {books.map(book => (
                    <ListItem key={book.title + book.authors}>
                      <Book
                        id={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        link={book.link}
                        image={book.image}
                        type="savedBook"
                        deleteBook={deleteBook} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Saved Books</h3>
              )}
            </div>
          </Grid>
        </Grid>      
      </Container>
    </div>
  );
}

export default Saved;
