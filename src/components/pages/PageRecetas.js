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
  Link,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Recetas from "../modelos/Recetas.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Pagina2() {
  const classes = useStyles();
  const [recipe, setRecipe] = React.useState({
    recetas: Recetas.getRecetas(),
  });

  const [newRecipe, setNewRecipe] = React.useState({
    name: "",
    description: "",
  });
  let recetas = recipe.recetas;

  // PRODUCTO NUEVO //
  function recetaNueva() {
    let max = 0;
    recetas.forEach((el) => {
      max = max < el.id ? el.id : max;
    });
    let nuevoId = max + 1;
    let recetaNueva = {
      id: nuevoId,
      nombre: newRecipe.name,
      descripcion: newRecipe.description,
    };
    recetas.push(recetaNueva);

    setNewRecipe({
      name: "",
      description: "",
    });
  }
  function updateNewRecipeName(name) {
    setNewRecipe({
      name: name,
      description: newRecipe.description,
    });
  }
  function updateNewRecipeDesc(desc) {
    setNewRecipe({
      name: newRecipe.name,
      description: desc,
    });
  }

  // ELIMINAR PRODUCTO //
  function eliminarReceta(idBorrar) {
    recetas = recetas.filter((el) => el.id !== idBorrar);
  }
  function borra(id) {
    eliminarReceta(id * 1);
    setRecipe({
      recetas: recetas,
    });
  }

  // LISTA DE PRODUCTOS //
  let lista = recipe.recetas.map((el) => (
    <TableRow key={el.id}>
      <TableCell align="center" component="th" scope="row">
        {el.id}
      </TableCell>
      <TableCell align="center">{el.nombre}</TableCell>
      <TableCell align="center">{el.descripcion}</TableCell>
      <TableCell align="center">
        <Button onClick={(e) => borra(el.id)}>
          <DeleteIcon color="primary"></DeleteIcon>
        </Button>
        <Link href={"/editaReceta/" + el.id}>
          <Button>
            <EditIcon color="primary"></EditIcon>
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  ));
  // ----------------------- //
  return (
    <Container>
      <h1>Recetas</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Descripción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{lista}</TableBody>
        </Table>
      </TableContainer>
      <br />
      <TextField
        className="mb-2"
        id="outlined-secondary"
        label="Nombre de la receta"
        variant="outlined"
        color="primary"
        fullWidth
        value={newRecipe.name}
        type="text"
        onChange={(e) => updateNewRecipeName(e.target.value)}
        name="name"
        required
      />
      <br />
      <br />
      <TextField
        id="outlined-secondary"
        label="Descripción..."
        variant="outlined"
        color="primary"
        fullWidth
        value={newRecipe.description}
        type="text"
        onChange={(e) => updateNewRecipeDesc(e.target.value)}
        name="description"
        required
      />
      <br />
      <br />
      <Button
        disabled={newRecipe.name.length < 2}
        onClick={recetaNueva}
        variant="contained"
        color="primary"
        fullWidth
      >
        Añadir
      </Button>
    </Container>
  );
}
