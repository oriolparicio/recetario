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
import Recetas from "../modelos/Recetas.js";

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
  });

  // const [newRecipe, setNewRecipe] = React.useState({
  //   name: "",
  //   description: "",
  // });
  // let recetas = recipe.recetas;

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
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Descripción</TableCell>
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
                  // onChange={(e) => updateNewRecipeDesc(e.target.value)}
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
                  // value={newRecipe.description}
                  type="text"
                  // onChange={(e) => updateNewRecipeDesc(e.target.value)}
                  name="descripcion"
                  defaultValue={receta.desc}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box color="text.primary" align="center" mt={3}>
        <Button variant="contained" color="primary">
          Editar
        </Button>
      </Box>
    </Container>
  );
}
