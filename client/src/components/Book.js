import React from "react";
import ViewBtn from "./ViewBtn";
import SaveBtn from "./SaveBtn";
import DeleteBtn from "./DeleteBtn";
import { Grid, Card, CardActionArea, CardActions, CardContent } from '@material-ui/core';

function Book(props) {
  return (
    <Grid container spacing={2}>
      <Grid item sm={2}>
        <img src={props.image} alt={props.title} className="book-image" />
      </Grid>
      <Grid item sm={10}>
        <Card className="card" style={{backgroundColor : "rgba(255, 255, 255, 0.9)"}}>
          <CardActionArea>
            <h1>
              {props.title} {(props.authors && props.authors !== " ") ? "by" : ""} {props.authors}
            </h1>
            <CardContent>
              <p>
                {props.description}
              </p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ViewBtn link={props.link} />
            {props.type === "searchResult" ?
            <SaveBtn onClick={() => props.saveBook(props)} title={props.title} /> : 
            <DeleteBtn onClick={() => props.deleteBook(props.id)} />}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Book;
