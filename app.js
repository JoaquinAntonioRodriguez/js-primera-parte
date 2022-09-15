function Producto(id,nombre, precio, inventario) {
    this.id= id;
    this.nombre=nombre;
    this.precio=precio;
    this.inventario=inventario
    this.motrarStock =function(){
        alert(`Tenemos" ${this.inventario} unidades disponible`)
    }
    this.realizarVenta =function(){
       this.inventario --
       alert(`Venta realizada con exito`)
    }
    this.agregarStock = function(cantidad){
         this.inventario+=cantidad
         alert(`Has agregadado ${cantidad} ${this.nombre} al inventario`)
    }
    
} 
let productos = [
    new Producto(1,"Tomos One piece del 1 al 21",750, 40),
    new Producto(2,"Tomos de Naruto del 1 al 35", 700, 50 ),
    new Producto(3,"Tomos de Boku no Hero Academy del 1 al 20", 700, 30),
    new Producto(4,"Buzo de Nezuko polar de M a XXL", 3000, 10),
    new Producto(5,"Gorro de pikachu de lana", 1800, 9),
    new Producto(6,"Pines de anime/videojuegos",250,70),
    new Producto(7,"Paquete de cartas Yu-Gi-Oh ", 450, 40)
    ]

    let carrito =[ ]
  

 function agregarCarrito ( ) {
    let productoId = Number ( prompt ( ' ID producto : ' ) )
    let cantidad = Number ( prompt ( ' Cantidad : ' ) )
    let producto = productos.find ( product => product.id === productoId )
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push ( producto )}
  
    //  agregarCarrito()
      console.log(carrito)
  function calcularTotal(carrito) {
    let  total= 0
    carrito.forEach(producto => {
        total+= producto.total
    });
    return total
  }    
//  alert  (`El total de tu compra es de: ${calcularTotal(carrito)}`)
  function crearProducto(id,nombre, precio, inventario) {
    let nuevoProducto = new Producto(id,nombre, precio, inventario)
    productos.push(nuevoProducto)
  }
  crearProducto(8,"Tomos de Dragon Ball Z del 1 al 30", 650, 50)
