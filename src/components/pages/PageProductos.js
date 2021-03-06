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
  Box,
} from "@material-ui/core";
import Producto from "../modelos/Productos.js";
import DeleteIcon from "@material-ui/icons/Delete";
import ReplayIcon from "@material-ui/icons/Replay";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  pageTitle: {
    fontWeight: 100,
    color: "rgba(0, 0, 0, 0.87)",
  },
  tableRowStyle: {
    transition: "0.3s",
    "&:hover, &:focus": {
      backgroundColor: "#E6E6E6"
    },
  }
});
let deletedProducts = [];

export default function Pagina1() {
  const classes = useStyles();
  const [product, setProduct] = React.useState({
    productos: Producto.getProductos(),
  });

  const [nameProduct, setNameProduct] = React.useState({ name: "" });
  let productos = product.productos;

  // PRODUCTO NUEVO //
  function productoNuevo() {
    let max = 0;
    productos.forEach((el) => {
      max = max < el.id ? el.id : max;
    });
    let nuevoId = max + 1;
    let productoNuevo = { id: nuevoId, nombre: nameProduct };
    productos.push(productoNuevo);

    setNameProduct({
      name: "",
    });
    localStorage.setItem("productsList", JSON.stringify(productos));
  }

  // ELIMINAR PRODUCTO //
  function eliminarProducto(idBorrar) {
    deletedProducts.push(productos.find((el) => el.id === idBorrar));
    productos = productos.filter((el) => el.id !== idBorrar);
    console.log(deletedProducts);
  }
  function borra(id) {
    eliminarProducto(id * 1);
    setProduct({
      productos: productos,
    });

    localStorage.setItem("productsList", JSON.stringify(productos));
  }

  // DESHACER BORRAR //
  function undo() {
    productos.push(deletedProducts[deletedProducts.length - 1]);
    deletedProducts.pop();
    setProduct({
      productos: productos,
    });
    localStorage.setItem("productsList", JSON.stringify(productos));
  }

  // LISTA DE PRODUCTOS //
  let lista = product.productos.map((el) => (
    <TableRow key={el.id} className={classes.tableRowStyle}>
      <TableCell align="center" component="th" scope="row">
        {el.id}
      </TableCell>
      <TableCell align="center">{el.nombre}</TableCell>
      <TableCell align="center">
        <Button onClick={(e) => borra(el.id)}>
          {" "}
          <DeleteIcon color="primary"></DeleteIcon>
        </Button>
      </TableCell>
    </TableRow>
  ));
  // ----------------------- //
  return (
    <Container>
      <Box position="relative">
        <h1 className={classes.pageTitle}>Productos</h1>
        <Box
          position="absolute"
          right={0}
          display={deletedProducts.length === 0 ? "none" : "inline"}
        >
          <Button onClick={undo}>
            <ReplayIcon color="primary"></ReplayIcon>
          </Button>
        </Box>
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
          label="Nombre del Ingrediente"
          variant="outlined"
          color="primary"
          fullWidth
          value={nameProduct.name}
          type="text"
          onChange={(e) => setNameProduct(e.target.value)}
          name="nameProduct"
          required
        />
        <br />
        <br />
        <Button
          disabled={nameProduct.length < 2}
          onClick={productoNuevo}
          variant="contained"
          color="primary"
          fullWidth
        >
          Añadir
        </Button>
      </Box>
    </Container>
  );
}
