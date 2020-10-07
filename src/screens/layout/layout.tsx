import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  home,
} from "../../common/variables/routes";
import NotFound from "../notFound/notFound";
import useStyles from "./layoutStyles";

const Layout = (): JSX.Element => {
  const EditRecruitmentComponent = () => <EditRecruitmentComponent />;
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Container className={classes.container}>
            <Switch>
              <Route exact path={home}/>
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
};
export default Layout;