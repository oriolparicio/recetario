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
  Button,
  TextField,
} from "@material-ui/core";
import Producto from "../modelos/Productos.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Pagina1() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    productos: Producto.getProductos(),
    nombreProducto: "",
  });

  // let productos = Producto.getProductos();

  // INPUT CHANGE //
  function handleInputChange(evento) {
    const target = evento.target;
    //const value = (target.type === 'checkbox') ? target.checked : target.value;
    const value = target.value;
    const name = target.name;
    setState({
      productos: state.productos,
      [name]: value,
    });
  }

  // PRODUCTO NUEVO //
  function productoNuevo() {
    let nombreProducto = state.nombreProducto;
    let productos = state.productos;
    let nuevoId = productos.length + 1;
    let productoNuevo = { id: nuevoId, nombre: nombreProducto };
    productos.push(productoNuevo);

    setState({
      productos: productos,
    });
  }

  // LISTA DE PRODUCTOS //
  let lista = state.productos.map((el) => (
    <TableRow key={el.id}>
      <TableCell align="center" component="th" scope="row">
        {el.id}
      </TableCell>
      <TableCell align="center">{el.nombre}</TableCell>
    </TableRow>
  ));
  // ----------------------- //
  return (
    <Container>
      <h1>Productos</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nombre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{lista}</TableBody>
        </Table>
      </TableContainer>
      <br />
      <TextField
        id="outlined-secondary"
        label="Outlined secondary"
        variant="outlined"
        color="primary"
        fullWidth
        onChange={handleInputChange}
        name="nombreProducto"
      />
      <br />
      <br />
      <Button
        onClick={productoNuevo}
        variant="contained"
        color="primary"
        fullWidth
      >
        Añadir
      </Button>
    </Container>
  );
}
