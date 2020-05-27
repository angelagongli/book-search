# Book Search

## Description
The book search application is a MERN stack application that uses the Google Books API to perform a book search based on keyword, and presents the volume information of the search results returned by the API. The user can choose to save a book to their book list, manage their book list, and view search results and saved books on Google Books.

The book search app is deployed to Heroku here: https://polar-savannah-90489.herokuapp.com/

## Credits
The book search application uses [Express](http://expressjs.com/) to create the server and [mongoose](https://www.npmjs.com/package/mongoose) to create the MongoDB database/book model and perform queries on the database. The [mLab MongoDB](https://devcenter.heroku.com/articles/mongolab) Heroku add-on hosts the MongoDB database used by the deployed app on the cloud.

This application was built with [create-react-app](https://create-react-app.dev/), and uses [React](https://reactjs.org/), [React Router](https://reacttraining.com/react-router/) and the [Material-UI](https://material-ui.com/) React component library to build the front-end pages, components and routes. The [axios](https://www.npmjs.com/package/axios) npm package is used to call the API routes.

The [Google Books API](https://developers.google.com/books/docs/overview) is the source of all of the application's book volume data, and is called when the user enters a search term to perform a volumes search and return the book search result data.

[Socket.IO](https://socket.io/) is used to create the notifications on book save.

The background images are by [Engin Akyurt](https://unsplash.com/@enginakyurt) and [Danica Tanjutco](https://unsplash.com/@danidums) on [Unsplash](https://unsplash.com/).

The favicon image and icons were taken from the collection of icons at [Font Awesome](https://fontawesome.com/), and the header font is from [Google Fonts](https://fonts.google.com/).

## License
Copyright (c) Angela Li. All rights reserved.
Licensed under the [MIT License](LICENSE).