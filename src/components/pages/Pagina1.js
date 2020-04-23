import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
import Producto from "../modelos/Productos.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Pagina1() {
  const classes = useStyles();

  // LISTA DE PRODUCTOS //
  let productos = Producto.getProductos();
  let lista = productos.map((el) => (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Nombre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={el.id}>
            <TableCell align="center" component="th" scope="row">
              {el.id}
            </TableCell>
            <TableCell align="center">{el.nombre}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ));
  // ----------------------- //
  return (
    <Container>
      <h1>Productos</h1>
      {lista}
    </Container>
  );
}
