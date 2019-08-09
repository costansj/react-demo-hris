import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class LoginPage extends Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <TextField
              id="username"
              label="User Name"
              variant="filled"
              style={{ margin: "2rem 0 0 0" }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="userpass"
              label="Password"
              type="password"
              variant="filled"
              style={{ margin: ".5rem 0 0 0" }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{ margin: ".5rem 0 0 0" }}
              onClick={() => {
                this.props.history.push("/employee");
                // return <Link to="/employee" />;
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default LoginPage;
