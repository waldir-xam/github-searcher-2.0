import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, TextField } from "@mui/material";
import "./searchAditional.css"
import GitHubLogo from "../../img/github.png"


const Search = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <div className="logo-div">   <img src={GitHubLogo} style={{ backgroundColor: "#fff", borderRadius: "50%", height: "10rem" }}
            fullWidth className="logoClass" /></div>
          <TextField
            label="Escribe el usuario que quieres buscar"
            onChange={handleInputChange}
            value={username}
            style={{ backgroundColor: "#fff", borderRadius: ".7rem" }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Link to={`/users/${username}`} style={{ textDecoration: "none" }}>
            <Button variant="contained" fullWidth style={{ borderRadius: ".7rem", fontWeight: "600" }}>
              Buscar
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
