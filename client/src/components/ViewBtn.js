import React from "react";
import { Button } from '@material-ui/core';

function ViewBtn(props) {
  return (
    <Button variant="contained" href={props.link} target="_blank" rel="noreferrer">
      View Book on Google Books
    </Button>
  );
}

export default ViewBtn;
