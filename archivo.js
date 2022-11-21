let carrito= [];
let eliminar = document.getElementById("vaciarCarrito")
const sumadorCarrito = document.getElementById ("carritoContenedor")
const totalCompra = document.getElementById ("precioTotal")
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
// Renderizado de Productos - Utilización de Fetch
stockProductos = []
const URLJSON= "./productos.json"
const contenedor = document.getElementById("productos")
fetch(URLJSON)
.then(response => response.json())
.then( data => {
    console.log(data)
    for(let prod of data){
        let prodNuevo = new Producto (prod.codigo, prod.articulo, prod.talle, prod.color, prod.precio, prod.img)
        stockProductos.push(prodNuevo)

    }
    stockProductos.forEach((elemento) => {
        contenedor.innerHTML += `<div class="card ">
                                <img src="${elemento.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${elemento.articulo}</h5>
                                <p class="card-text">Color ${elemento.color}</p>
                                <p class="card-text">Precio: $ ${elemento.precio}</p>
            
                                <button  onClick="agregarProducto(${elemento.codigo})" class="btn btn-primary">Agregar al carrito</button>
                            </div>
                        </div>`
        })
})






document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("miCompra")) ?? [] 
    mostrarCompra();
})

function agregarProducto(codigo){
   const item = stockProductos.find((elemento)=>elemento.codigo === codigo)
    carrito.push(item)
    mostrarCompra()
    Swal.fire({
        title: 'Producto agregado al carrito',
        text: `${item.articulo}`.toUpperCase(),
        imageUrl: `${item.img}`,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
      })
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

    if(carrito.length=== 0){
        modalbody.innerHTML=`
        <p class = "text-center" > No hay productos agregados </p>
        `
    }

    totalCompra.innerHTML = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0)

    sumadorCarrito.textContent = carrito.length
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

// vaciar carrito
 eliminar.onclick = ()=>{
    carrito = []; 
    mostrarCompra()
 }

/*
 //Renderizado

function renderizarPrductos(){
    const URLJSON= "/productos.json"
    fetch(URLJSON)
       .then(response => response.json())
       .then(data => {
        const misProductos = data.productoJson
        misProductos.forEach(producto => {
            document.getElementById("divProdNuevo").innerHTML +=`<div class="card ">
            <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.articulo}</h5>
            <p class="card-text">${producto.color}</p>

            <button  onClick="agregarProducto(${producto.codigo})" class="btn btn-primary">Agregar al carrito</button>
        </div>
    </div>`
        })
     
       })
}

renderizarPrductos()

*/