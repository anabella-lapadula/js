const carrito= [];
class Producto {
    constructor (codigo, articulo, talle, color, precio, img ){
        this.codigo = codigo; 
        this.articulo = articulo;
        this.talle= talle;
        this.color = color;
        this.precio=precio;
        this.img=img;
    }
   
// metodo
}

const producto01 = new Producto (0001, "remera", "m", "rojo", 2100, "./imagenes/remeranegra.jpg");
const producto02 = new Producto (0002, "remera","s", "negro", 1360, "./imagenes/remeranegra.jpg"  );
const producto03 = new Producto (0003, "remera", "m", "negro", 2506, "./imagenes/remeranegra.jpg" );
const producto04 = new Producto (0004, "remera","l", "negro", 1598, "./imagenes/remeranegra.jpg" );
const producto05 = new Producto (0005, "remera","l", "negro", 1598, "./imagenes/remeranegra.jpg" );
const producto06 = new Producto (0006, "camiseta","l", "negro", 1598, "./imagenes/remeranegra.jpg" );

const productos = [ producto01, producto02, producto03,producto04, producto05, producto06];
/*
let busquedaPorTalleM = productos.filter((e)=> e.talle=="m")
console.table(busquedaPorTalleM); 

let busquedaPorTalleL = productos.filter((e)=> e.talle=="l")
console.log(busquedaPorTalleL);

let busquedaPorTalleS = productos.filter((e)=> e.talle=="s")
console.log(busquedaPorTalleS);

//filtrar por precios
let filtrarPorPrecio = productos.filter((e)=> e.precio >= 2000)
console.log(filtrarPorPrecio);
let filtrarPorPrecio01 = productos.filter((e)=> e.precio <= 2000)
console.log(filtrarPorPrecio01)

*/



carrito.splice (1 , 1 )



//plantillas
let divProductos = document.getElementById("productos")
divProductos.className ="d-flex"

productos.forEach((elemento)=>{
    let card = document.createElement("div")
card.innerHTML = `<div class="card m-2 ">
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
                        <button  id="btn${elemento.codigo}" class="btn btn-primary">Comprar</button>
                    </div>
                </div>`
divProductos.appendChild(card)


})

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

cons
