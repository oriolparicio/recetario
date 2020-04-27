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
  List,
  ListItem,
  ListItemText,
  NativeSelect,
  InputLabel,
} from "@material-ui/core";
import Recetas from "../modelos/Recetas.js";
import Producto from "../modelos/Productos.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Pagina2(props) {
  const classes = useStyles();
  let recipeId = props.match.params.idReceta;
  let recipeToEdit = Recetas.getRecetaById(recipeId * 1);
  const [receta, setReceta] = React.useState({
    id: recipeToEdit.id,
    nombre: recipeToEdit.nombre,
    desc: recipeToEdit.descripcion,
    ingredientes: recipeToEdit.ingredientes,
    cantidad: recipeToEdit.cantidad,
    unidades: recipeToEdit.unidades,
  });

  const [product, setProduct] = React.useState({
    productos: Producto.getProductos(),
    unidad: Recetas.getUnidades(),
  });

  let productos = product.productos;
  let units = product.unidad;

  const [select, setSelect] = React.useState({
    name: receta.nombre,
    desc: receta.desc,
    ingr: "",
    uds: "",
    cant: "",
  });

  const handleChange = (event, param) => {
    if (param === "ingredientes") {
      setSelect({
        ...select,
        ingr: event.target.value,
      });
    } else if (param === "unidades") {
      setSelect({
        ...select,
        uds: event.target.value,
      });
    } else if (param === "cantidad") {
      setSelect({
        ...select,
        cant: event.target.value,
      });
    } else if (param === "nombre") {
      setSelect({
        ...select,
        name: event.target.value,
      });
    } else if (param === "descripcion") {
      setSelect({
        ...select,
        desc: event.target.value,
      });
    }
  };

  // AÑADIR INGREDIENTE //
  function añadirIngrediente() {
    // let max = 0;
    // recipeToEdit.forEach((el) => {
    //   max = max < el.id ? el.id : max;
    // });
    // let nuevoID = max + 1;

    let ingr = select.ingr;
    let cantidad = select.cant;
    let unidad = select.uds;
    recipeToEdit.ingredientes.push(ingr);
    recipeToEdit.cantidad.push(cantidad);
    recipeToEdit.unidades.push(unidad);

    setReceta({
      ...receta,
      ingredientes: recipeToEdit.ingredientes,
      cantidad: recipeToEdit.cantidad,
      unidades: recipeToEdit.unidades,
    });
  }

  function save() {
    let name = select.name;
    let desc = select.desc;
    recipeToEdit.nombre = name;
    recipeToEdit.descripcion = desc;
    
    Recetas.storeRecipes();
  }

  // // GUARDAR RECETA //
  // function guardarReceta() {
  //   let productoNuevo = { , nombre: nameProduct };
  //   productos.push(productoNuevo);

  //   setNameProduct({
  //     name: "",
  //   });
  //   localStorage.setItem("productsList", JSON.stringify(productos));
  // }

  // const [newRecipe, setNewRecipe] = React.useState({
  //   name: "",
  //   description: "",
  // });
  // let recetas = recipe.recetas;

  // LISTA DE PRODUCTOS //
  let ingredientes = receta.ingredientes.map((el) => (
    <List>
      <ListItem>
        <Box width="100%" boxShadow={1}>
          <ListItemText primary={el} align="center" />
        </Box>
      </ListItem>
    </List>
  ));
  let cantidad = receta.cantidad.map((el) => (
    <List>
      <ListItem>
        <Box width="100%" boxShadow={1}>
          <ListItemText primary={el} align="center" />
        </Box>
      </ListItem>
    </List>
  ));
  let unidades = receta.unidades.map((el) => (
    <List>
      <ListItem>
        <Box width="100%" boxShadow={1}>
          <ListItemText primary={el} align="center" />
        </Box>
      </ListItem>
    </List>
  ));
  // ----------------------- //
  return (
    <Container>
      <h1>Editando receta....{receta.id}</h1>

      <Button
        // disabled={newRecipe.name.length < 2}
        // onClick={recetaNueva}
        variant="contained"
        color="primary"
        fullWidth
      >
        Añadir
      </Button>
      <br />
      <br />
      {/* <TextField
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
      </Button> */}
      <TableContainer component={Paper}>
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
          <TableBody>
            <TableRow key={receta.id}>
              <TableCell align="center" component="th" scope="row">
                {receta.id}
              </TableCell>
              <TableCell align="center">
                <TextField
                  id="outlined-secondary"
                  label="Nombre"
                  variant="outlined"
                  color="primary"
                  // value={newRecipe.description}
                  type="text"
                  onChange={(e) => handleChange(e, "nombre")}
                  name="nombre"
                  defaultValue={receta.nombre}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  id="outlined-secondary"
                  label="Descripción"
                  variant="outlined"
                  color="primary"
                  multiline
                  // value={newRecipe.description}
                  type="text"
                  onChange={(e) => handleChange(e, "descripcion")}
                  name="descripcion"
                  defaultValue={receta.desc}
                />
              </TableCell>
              <TableCell align="center">{ingredientes}</TableCell>
              <TableCell align="center">{cantidad}</TableCell>
              <TableCell align="center">{unidades}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="right">Añadir Ingrediente:</TableCell>
              <TableCell>
                <List>
                  <ListItem>
                    <Box width="100%" align="center">
                      <InputLabel>Ingredientes</InputLabel>
                      <NativeSelect
                        value={select.ingr}
                        defaultValue={30}
                        onChange={(e) => handleChange(e, "ingredientes")}
                      >
                        <option aria-label="None" value="" />
                        {productos.map((el) => (
                          <option>{el.nombre}</option>
                        ))}
                      </NativeSelect>
                    </Box>
                  </ListItem>
                </List>
              </TableCell>
              <TableCell>
                <List>
                  <ListItem>
                    <Box width="100%" align="center">
                      <TextField
                        label="Cantidad"
                        defaultValue=" "
                        onChange={(e) => handleChange(e, "cantidad")}
                      />
                    </Box>
                  </ListItem>
                </List>
              </TableCell>
              <TableCell>
                <List>
                  <ListItem>
                    <Box width="100%" align="center">
                      <InputLabel>Unidades</InputLabel>
                      <NativeSelect
                        value={select.uds}
                        onChange={(e) => handleChange(e, "unidades")}
                      >
                        <option aria-label="None" value="" />
                        {units.map((el) => (
                          <option>{el}</option>
                        ))}
                      </NativeSelect>
                    </Box>
                  </ListItem>
                </List>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={añadirIngrediente}
                >
                  Añadir
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box color="text.primary" align="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          href="/recetas"
          onClick={save}
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
}
