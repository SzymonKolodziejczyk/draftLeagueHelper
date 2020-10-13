import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  pokedex,
  home,
} from "../../common/variables/routes";
import NotFound from "../notFound/notFound";
import useStyles from "./layoutStyles";
import Pokedex from "../pokemonDatabase/pokedex/pokedex";
import AppBar from "../../components/appBar/appBar";
import SideBar from "../../components/sideBar/sideBar";

const Layout = (): JSX.Element => {
  const EditRecruitmentComponent = () => <EditRecruitmentComponent />;
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar />
          <SideBar />
          <Container className={classes.container}>
            <Switch>
              <Route exact path={pokedex} component={Pokedex}/>
              <Route exact path={home} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
};
export default Layout;
