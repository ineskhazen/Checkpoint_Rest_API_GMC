import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img className="logo" src="./assets/kisspng-iphone-telephone-logo-computer-icons-clip-art-contact-5abf09866c4280.7478662415224692544434.jpg" alt="logo" />
            </Link>
          </Typography>
          <div className="nav">
            <Button color="inherit">
              {" "}
              <Link to="/contacts">ContactList</Link>{" "}
            </Button>
            <Button color="inherit">
              {" "}
              <Link to="/addContact">AddContact</Link>{" "}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}