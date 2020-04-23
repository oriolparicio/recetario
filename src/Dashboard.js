import React from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Hidden } from "@material-ui/core";

import NavBarDrawer from "./components/drawer-lg.js";
import Producto from "./components/modelos/Productos.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Pagina1 from "./components/pages/Pagina1";
import Pagina2 from "./components/pages/Pagina2";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";

import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";

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
            <Route path="/pagina1" component={Pagina1} />
            <Route path="/pagina2" component={Pagina2} />
            <Route path="/EditaReceta/:idReceta" component={Pagina2} />
            <Route component={Error404} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Container>
  );
}
