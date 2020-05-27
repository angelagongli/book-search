import axios from "axios";
const key = "AIzaSyBxDBOTSRAugdemoDvkdLR6yuSMkjyxh4c";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  search: function(searchTerm) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?key=${key}&q=${searchTerm}`);
  }
};
