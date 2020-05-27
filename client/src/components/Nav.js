import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Nav() {  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Google Books (React) Book Search
        </Typography>
        <Link to="/">Search</Link>
        <Link to="/saved">Saved</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
