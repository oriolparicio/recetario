let Recetas = [
  {
    id: 1,
    nombre: "Pastel",
    descripcion: "poner en el horno y esperar...",
    ingredientes: ["Harina", "Fresa", "Levadura"],
    cantidad: ["60", "5", "8"],
    unidades: ["gramos", "unidades", "gramos"],
  },
  {
    id: 2,
    nombre: "Huevo frito",
    descripcion: "Poner el huevo en la sarten...",
    ingredientes: ["Harina", "Huevo", "Levadura"],
    cantidad: ["100", "2", "10"],
    unidades: ["gramos", "unidades", "gramos"],
  },
];
let Unidades = [
  "unidades",
  "vasos",
  "tazas",
  "cucharadas",
  "litos",
  "ml",
  "kg",
  "gramos",
];

class Receta {
  static recetas = null;

  static getRecetas = () => {
    if (this.recetas === null) {
      if (localStorage.getItem("recipeList") === null) {
        this.recetas = Recetas;
      } else {
        this.recetas = JSON.parse(localStorage.getItem("recipeList"));
      }
    }

    return this.recetas;
  };
  static getUnidades = () => {
    return Unidades;
  };
  static getRecetaById = (idReceta) => {
    let elReceta = Receta.getRecetas().find((el) => el.id === idReceta);
    return elReceta;
  };

  static storeRecipes = () => {
    localStorage.setItem("recipeList", JSON.stringify(this.recetas));
  };
}
export default Receta;
