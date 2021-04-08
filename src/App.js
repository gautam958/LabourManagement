import React, { useEffect } from "react";
import LabourInputFormContainer from "./Containers/Labour/LabourInputFormContainer";
import ListTaskContainer from "./Containers/Labour/ListTaskTypeContainer";
import environment from "./Environments/environment";
import { makeStyles } from "@material-ui/core/styles"; 
import { AppBar, Toolbar, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
function App(props) {
  const classes = useStyles();
  useEffect(() => {}, []);

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <img
                src="LabourReact/Logo.png"
                alt="logo"
                style={{ height: "50px", width: "300px" }}
              />
              <span>{environment.REACT_APP_appTitle}</span>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <LabourInputFormContainer />
          </Grid>
          <Grid item xs={6}>
            <ListTaskContainer />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
