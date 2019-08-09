import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
//import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={0}
          align="center"
          justify="center"
          direction="column"
        >
          <Card>
            <TextField id="username" label="User Name" variant="filled" />
            <TextField
              id="userpass"
              label="Password"
              type="password"
              variant="filled"
            />
            <Button
              variant="contained"
              onClick={() => {
                this.props.history.push("/employee");
                // return <Link to="/employee" />;
              }}
            >
              Submit
            </Button>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
