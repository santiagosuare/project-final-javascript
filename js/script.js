// MATERIALIZE
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});
// MATERIALIZE


const ClickButton = document.querySelectorAll('#add'); // Añadir botones + de item
const ClickButtonAction = document.querySelectorAll('#btn'); // Botones Resetear/Comprar
// console.log(ClickButton);
// console.log(ClickButtonAction);
let itemPrice = 0;
let carrito = [];

ClickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem);
});

ClickButtonAction.forEach(btn => {
    btn.addEventListener('click', ClickFinalPage);
});

function ClickFinalPage(e) {
    let button = e.target;
    let buttonAction = button.closest('.button');

    console.log(button);


    const btnxx = String(buttonAction.querySelector('.material-icons').textContent);

    console.log(btnxx);
    // console.log(totalConIVA);

    if (btnxx == 'autorenew') {
        // console.log('reseteee');
        location.reload();
    } else if (btnxx == 'beenhere') {
        // console.log('compree');
        alert("Actualizando..." );
        // console.log(totalConIVA.textContent);
    }

}

class Producto {
    constructor(precio) {
        this.precio = parseFloat(precio);
    }
}

class Libro extends Producto {
    constructor(nombre, precio) {
        super(precio);
        this.nombre = nombre;
    }
}



function addToCarritoItem(e) {
    const button = e.target;
    const item = button.closest('.card');

    const nombreLibro = item.querySelector('.card-title').textContent;
    const precioLibro = Number(item.querySelector('.card-title2').textContent.replace('$', ''));

    const LibroNew = new Libro(nombreLibro, precioLibro);

    console.log(nombreLibro, precioLibro);

    


     addItemCarrito(LibroNew);
}


function addItemCarrito(LibroNew) {
    carrito.push(LibroNew);
    renderCarrito();
}

function renderCarrito() {
    document.getElementById('total').innerHTML = '$   ' + carrito.map(item => item.nombre);

    // console.log(carrito.map(item => item.nombre));

    
    let totalSinIVA = 0;
    carrito.forEach((item) => {

        totalSinIVA = totalSinIVA + item.precio
    });


    let totalConIVA = 0;
    let itemConIVA = 0;
    carrito.forEach((item) => {

        let iva = x => x * 0.21;
        itemConIva = item. precio + iva(item.precio);
        // console.log(itemConIva);
        totalConIVA = totalConIVA + itemConIva;
    });


    document.getElementById('totalConIVA').innerHTML = '$ ' + totalConIVA;
    document.getElementById('totalSinIVA').innerHTML = '$ ' + totalSinIVA;
}


class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = parseInt(dni);
    }
    show() {
        return 'Nombre y Apellido: ' + this.nombre + " " + this.apellido + " (DNI: " + this.dni + ")"
    }
}
