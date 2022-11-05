let carrito= [];
class Producto {
    constructor (codigo, articulo, talle, color, precio, img ){
        this.codigo = codigo; 
        this.articulo = articulo;
        this.talle= talle;
        this.color = color;
        this.precio=precio;
        this.img=img;
    }
   
}

const producto01 = new Producto (0001, "remera", "m", "rojo", 2100, "./imagenes/remeranegra.jpg");
const producto02 = new Producto (0002, "remera","s", "negro", 1360, "./imagenes/remeranegra.jpg"  );
const producto03 = new Producto (0003, "remera", "m", "negro", 2506, "./imagenes/remeranegra.jpg" );
const producto04 = new Producto (0004, "remera","l", "negro", 1598, "./imagenes/remeranegra.jpg" );
const producto05 = new Producto (0005, "remera","l", "negro", 1598, "./imagenes/remeranegra.jpg" );
const producto06 = new Producto (0006, "camiseta","l", "negro", 1598, "./imagenes/remeranegra.jpg" );
const producto07 = new Producto (0006, "camiseta","l", "negro", 1598, "./imagenes/remeranegra.jpg" );
const stockProductos = [ producto01, producto02, producto03,producto04, producto05, producto06, producto07];


document.addEventListener("DOMContentLoaded", () => {
carrito = JSON.parse(localStorage.getItem("miCompra"))  || [] 
    mostrarCompra();
})

//Renderizado
const contenedor = document.getElementById("productos")
contenedor.className="d-flex "
stockProductos.forEach((elemento) => {
contenedor.innerHTML += `<div class="card m-2 style="width: 18rem; ">
                        <img src="${elemento.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${elemento.articulo}</h5>
                        <p class="card-text">${elemento.color}</p>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Selecciona el talle </option>
                                <option value="1">L</option>
                                <option value="2">M</option>
                                <option value="3">S</option>
                        </select> </br>
                        <button  onclick="agregarProducto(${elemento.codigo})" class="btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>`
})

function agregarProducto(codigo){
   const item = stockProductos.find((elemento)=>elemento.codigo === codigo)
    carrito.push(item)
    mostrarCompra()
}

const mostrarCompra = () =>{
    const modalbody = document.querySelector(".modal .modal-body ")
    modalbody.innerHTML= " "
    carrito.forEach((prod) =>{
        modalbody.innerHTML += ` 
        <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${prod.img}"/>
        </div>
        <div>
        <p>Producto: ${prod.articulo}</p>
      <p>Precio: ${prod.precio}</p>
      <button class="btn btn-danger"  onclick="eliminarCompra(${prod.codigo})">Eliminar</button>
        </div>
      </div>  `
    })
    storage();
}


function eliminarCompra (codigo){
    const itemEliminado = codigo
    carrito = carrito.filter((prod) => prod.codigo !== itemEliminado)
    mostrarCompra()
}



function storage(){
    localStorage.setItem("miCompra", JSON.stringify(carrito) )
}






/*
productos.forEach((e)=> {
    document.getElementById(`btn${e.codigo}`).addEventListener("click", function(){
        agregarAlCarrito(e);
    })
});


function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    document.getElementById("tablabody").innerHTML += `

    <tr>
        <td>${productoAComprar.codigo}</td>
        <td>${productoAComprar.articulo}</td>
        <td>${productoAComprar.color}</td>
        <td>$ ${productoAComprar.precio}</td>
    </tr>
`;




let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
}

let guardarProductos = JSON.stringify(productos);
localStorage.setItem("misProductos",guardarProductos)

let arrayParseado = JSON.parse(localStorage.getItem("misProductos"));
console.log(arrayParseado)

*/
