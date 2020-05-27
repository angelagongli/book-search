import React from "react";
import { Button } from '@material-ui/core';

function SaveBtn(props) {
  return (
    <Button className="save-btn" variant="contained" color="primary" {...props} >
      Save Book
    </Button>
  );
}

export default SaveBtn;
