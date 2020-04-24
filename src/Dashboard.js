import React from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Hidden } from "@material-ui/core";

import NavBarDrawer from "./components/drawer-lg.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageProductos from "./components/pages/PageProductos";
import PageRecetas from "./components/pages/PageRecetas";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";

import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();

  return (
    <Container>
      <CssBaseline />
      <div className={classes.drawerHeader} />
      <BrowserRouter>
        <Container>
          <Hidden only={["xs", "sm"]}>
            {" "}
            <NavBarDrawer />{" "}
          </Hidden>

          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/productos" component={PageProductos} />
            <Route path="/recetas" component={PageRecetas} />
            <Route path="/EditaReceta/:idReceta" component={PageRecetas} />
            <Route component={Error404} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Container>
  );
}
