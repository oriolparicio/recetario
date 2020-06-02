import React from 'react';

import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  TableRow,
  TableCell,
  ListItem,
  TableBody,
  TableHead,
  Table,
  Paper,
  TableContainer

} from "@material-ui/core";
import CameraIcon from '@material-ui/icons/PhotoCamera';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

import Recetas from "../modelos/Recetas.js";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a href="https://oparicio-portfolio.herokuapp.com/" style={{ textDecoration: "none", color: "#3f51b5" }}>
        My Portfolio
      </a>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  linkStyle: {
    textDecoration: "none",
    color: "#000",
    "&:active": {
      textDecoration: "none",
      color: "#000",
    },
  },
}));



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Inicio() {
  const classes = useStyles();
  const [recipe, setRecipe] = React.useState({
    recetas: Recetas.getRecetas(),
  });



  // LISTA DE PRODUCTOS //
  let lastRecipe = recipe.recetas.map((el) => (
    <TableRow key={el.id} className={classes.tableRowStyle}>
      <TableCell align="center" component="th" scope="row">
        {el.id}
      </TableCell>
      <TableCell align="center">{el.nombre}</TableCell>
      <TableCell align="center">{el.descripcion}</TableCell>
      <TableCell align="center">{el.ingredientes.map((el, i) => {
        return (<ListItem style={{ textAlign: "center" }}><Typography className={classes.textFromRecipes}>{el}</Typography></ListItem>);
      })}</TableCell>
      <TableCell align="center">{el.cantidad.map((el, i) => {
        return (<ListItem style={{ textAlign: "center" }}><Typography className={classes.textFromRecipes}>{el}</Typography></ListItem>);
      })}</TableCell>
      <TableCell align="center">{el.unidades.map((el, i) => {
        return (<ListItem style={{ textAlign: "center" }}><Typography className={classes.textFromRecipes}>{el}</Typography></ListItem>);
      })}</TableCell>
    </TableRow>
  ));
  // ----------------------- //

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Recetario
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Crea tu propio perfil de recetas, guardalas y compartelas con tus amigxs para disfrutar todxs de magnificos platos!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to={"/recetas"} className={classes.linkStyle}>
                    <Button variant="contained" color="primary">
                      Recetas
                  </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={"/productos"} className={classes.linkStyle}>
                    <Button variant="outlined" color="primary">
                      Productos
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>


            <TableContainer component={Paper}>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Última receta añadida
            </Typography>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">Descripción</TableCell>
                    <TableCell align="center">Ingredientes</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                    <TableCell align="center">Unidad</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{Array.from(lastRecipe.values()).pop()}</TableBody>
              </Table>
            </TableContainer>

            {recipe.recetas.map((el) => (
              <Grid item key={el} xs={12} sm={6} md={4}>
                <Card className={classes.card}>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {el.nombre}
                    </Typography>
                    <Typography>
                      {el.descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={"/recetas"} className={classes.linkStyle}>
                      <Button variant="contained" color="primary" endIcon={<ArrowForwardIosIcon />}>
                        Ir a recetas
                  </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Realizado por <a href="https://github.com/oriolparicio" style={{ textDecoration: "none", color: "#3f51b5" }}>Oriol Paricio</a>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}