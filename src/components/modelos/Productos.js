let Productos = [
  { id: 1, nombre: "Harina" },
  { id: 2, nombre: "Azúcar" },
  { id: 3, nombre: "Aceite" },
  { id: 4, nombre: "Levadura" },
  { id: 5, nombre: "Sal" },
];

class Producto {
  // constructor(nombreProducto) {
  //   this.nombre = nombreProducto;
  //   this.id = Productos.length + 1;
  //   // Productos.push(this);
  // }

  static getProductos = (idProducto) => {
    // let elProducto = Productos.filter((el) => el.id === idProducto);
    if (localStorage.getItem("productsList") === null) {
      return Productos;
    } else {
      return JSON.parse(localStorage.getItem("productsList"));
    }
  };

  // static addProducto = (nombreProducto) => {
  //   // let max = 0;
  //   // Productos.forEach((el) => {
  //   //   max = max < el.id ? el.id : max;
  //   // });
  //   let nuevoId = Productos.length + 1;
  //   let productoNuevo = { id: nuevoId, nombre: nombreProducto };
  //   Productos.push(productoNuevo);
  // };

  // static eliminarProducto = (idBorrar) => {
  //   Productos = Productos.filter((el) => el.id !== idBorrar);
  // };
}
export default Producto;
