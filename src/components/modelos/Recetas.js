let Recetas = [
  { id: 1, nombre: "Pastel", descripcion: "poner en el horno y esperar..." },
  {
    id: 2,
    nombre: "Huevo frito",
    descripcion: "Poner el huevo en la sarten...",
  },
];

class Receta {
  static getRecetas = () => {
    return Recetas;
  };
  static getRecetaById = (idReceta) => {
    let elReceta = Recetas.find((el) => el.id === idReceta);
    return elReceta;
  };
}
export default Receta;
