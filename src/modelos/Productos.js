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

  static getProductos = () => {
    return Productos;
  };

  static addProducto = (nombreProducto) => {
    let nuevoId = Productos.lenght + 1;
    let productoNuevo = { id: nuevoId, nombre: nombreProducto };
    return productoNuevo.push();
  };
}
export default Producto;
