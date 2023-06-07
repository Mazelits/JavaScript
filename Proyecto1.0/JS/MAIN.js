// PRODUCTOS
const productos = [
    // Pastillas
    {
        id: "past-01",
        titulo: "Acetaminofén Mk 500Mg x 16 Unidades ",
        imagen: "../IMG/aceta.jpg",
        categoria: {
            nombre: "Pastillas",
            id: "Pastillas"
        },
        precio: 9599
    },
    {
        id: "past-02",
        titulo: "Ibuprofeno 800 Mg Caja Con 50 Tabs",
        imagen: "../IMG/ibuprofeno.jpg",
        categoria: {
            nombre: "Pastillas",
            id: "Pastillas"
        },
        precio: 19200
    },
    {
        id: "past-03",
        titulo: "Vitamina C Sabor Naranja Caja x 100 Tabletas",
        imagen: "../IMG/vitaminas.jpg",
        categoria: {
            nombre: "Pastillas",
            id: "Pastillas"
        },
        precio: 5400
    },
    {
        id: "past-04",
        titulo: "Loratadina 10Mg Ag X 20 Tabletas",
        imagen: "../IMG/loratadina.jpg",
        categoria: {
            nombre: "Pastillas",
            id: "Pastillas"
        },
        precio: 7500
    },
    // Jarabes
    {
        id: "Jarabe-01",
        titulo: "Mieltertos Jarabe x 240 Ml",
        imagen: "../img/mieltertos.jpg",
        categoria: {
            nombre: "Jarabes",
            id: "Jarabes"
        },
        precio: 33500
    },
    {
        id: "Jarabe-02",
        titulo: "Jarabe Vick 44 Expectorante X 120Ml",
        imagen: "../img/vick44.jpg",
        categoria: {
            nombre: "Jarabes",
            id: "Jarabes"
        },
        precio: 7500
    },
    {
        id: "Jarabe-03",
        titulo: "Dihidrocodeina jarabe 12.1 mg x 120 ml",
        imagen: "../img/dihidrocodeina.jpg",
        categoria: {
            nombre: "Jarabes",
            id: "Jarabes"
        },
        precio: 9300
    },
    {
        id: "Jarabe-04",
        titulo: "Salbutamol jarabe x 120 ml. MEMPHIS",
        imagen: "../img/salbutamol.jpg",
        categoria: {
            nombre: "Jarabes",
            id: "Jarabes"
        },
        precio: 37000
    },
    
    // Anticonceptivos
    {
        id: "Anticonceptivos-01",
        titulo: "Condón Today Preservativo Lubricado X 6 Und",
        imagen: "../img/today.jpg",
        categoria: {
            nombre: "Anticonceptivos",
            id: "Anticonceptivos"
        },
        precio: 16700
    },
    {
        id: "anticonceptivos-02",
        titulo: "Lubricante Intimo Durex fresa intensa  X 50 Ml",
        imagen: "../img/Lubri.jpg",
        categoria: {
            nombre: "Anticonceptivos",
            id: "Anticonceptivos"
        },
        precio: 25000
    },
    {
        id: "anticonceptivos-03",
        titulo: "Sildenafilo Tabletas Recubiertas 50Mg Caja X 4",
        imagen: "../img/Sildenafilo.jpg",
        categoria: {
            nombre: "Anticonceptivos",
            id: "Anticonceptivos"
        },
        precio: 14700
    },
    {
        id: "anticonceptivos-04",
        titulo: "Postday  0.75  mg  Caj  x  2  Tabletas",
        imagen: "../img/postday.jpg",
        categoria: {
            nombre: "Anticonceptivos",
            id: "Anticonceptivos"
        },
        precio: 20500
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

