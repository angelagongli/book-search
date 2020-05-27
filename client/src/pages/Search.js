import React, { useState } from "react";
import Header from "../components/Header";
import Book from "../components/Book";
import API from "../utils/API";
import { Grid, Container, Button, TextField, List, ListItem } from '@material-ui/core';
import lightbulb from "../assets/images/lightbulb.jpg"

function Search() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  function saveBook(bookData) {
    API.saveBook({
      title: bookData.title,
      authors: bookData.authors ? bookData.authors : " ",
      description: bookData.description,
      image: bookData.image,
      link: bookData.link
    })
      .then(res => console.log("Book saved!"))
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ [name]: value });
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.query) {
      API.search(formObject.query)
      .then(res => {
        let results = res.data.items.map(element => {
          let info = element.volumeInfo;
          let book = {
            title: info.title,
            authors: info.authors ? info.authors.join(", ") : "",
            description: info.description,
            image: info.imageLinks ? info.imageLinks.thumbnail : "",
            link: info.previewLink
          };
          return book;
        });
        let uniqueIDs = [];
        for (let i = 0; i < results.length; i++) {
          let ID = results[i].title + results[i].authors;
          if (uniqueIDs.indexOf(ID) !== -1) {
            results.splice(i, 1);
            i--;
          } else {
            uniqueIDs.push(ID);
          }
        }
        setBooks(results);
      })
      .catch(err => console.log(err));
    }
  };

  return (
    <Grid container>
      <Grid item sm={8}>
        <Container>
          <Grid item sm={12}>
            <Header>
              Book Search
            </Header>
            <div id="notifications"></div>
            <div className="form">
              <form>
                <TextField
                  name="query"
                  id="query"
                  onChange={handleInputChange}
                  label="Look for a Book"
                  variant="outlined"
                  fullWidth />
                <Button
                  id="submit-btn"
                  variant="contained"
                  disabled={!(formObject.query)}
                  onClick={handleFormSubmit}
                  color="primary">
                  Submit Book
                </Button>
              </form>
            </div>
          </Grid> 
          <h2>Search Results</h2>
          <div className="search-results-container">
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book.title + book.authors}>
                    <Book
                      title={book.title}
                      authors={book.authors}
                      description={book.description}
                      link={book.link}
                      image={book.image}
                      type="searchResult"
                      saveBook={saveBook} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </Container>
      </Grid>
      <Grid item sm={4}>
        <img src={lightbulb} id="lightbulb" alt="lightbulb" />
      </Grid>
    </Grid>
  );
}

export default Search;
