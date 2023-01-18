import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
    history.push("/");
  };
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      {hasHiddenAuthButtons ? (
        <Link to="/">
          <Button
            className="explore-button"
            startIcon={<ArrowBackIcon />}
            variant="text"
          >
            Back to explore
          </Button>
        </Link>
      ) : localStorage.getItem("token") ? (
        <Stack className="tokenPresent" direction="row" spacing={2}>
          <Avatar alt={localStorage.getItem("username")} src="avatar.png" />
          <p>{localStorage.getItem("username")}</p>

          <Button variant="text" onClick={handleLogOut}>
            LOGOUT
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" spacing={2}>
          <Button variant="text" onClick={() => history.push("/login")}>
            LOGIN
          </Button>
          <Button
            className="button"
            variant="contained"
            onClick={() => history.push("/register")}
          >
            Register
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Header;
