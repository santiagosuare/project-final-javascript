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

// const arrayLibro = [];
// arrayLibro.push(new Libro("Narnia", 12, 300));
// arrayLibro.push(new Libro("Harry Potter 1", 13, 500));
// arrayLibro.push(new Libro("El Señor de los Anillos", 14, 600));
// arrayLibro.push(new Libro("El Principito", 15, 400));


// for (const libros of arrayLibro) {
//     libros.sumaIva();
// }

// let nameUser = prompt("Favor de ingresar su nombre: ");
// let apellidoUser = prompt("Favor de ingresar su apellido: ");
// let docUser = prompt("Favor de ingresar su DNI: ");

// persona1 = new Persona(nameUser, apellidoUser, docUser);

// alert('Los libros disponibles son:');

// for (const libros of arrayLibro) {
//     alert('Libro: ' + libros.nombre + ', dispone del precio de: $' + libros.precio);
// }

// do {
//     libroId = Number(prompt('¿Que libro desea elegir? \n1) Narnia \n2) Harry Potter 1 \n3) El Señor de los Anillos \n4) El Principito'));
// } while (libroId < 1 || libroId > 4);

// console.log(libroId);
// console.log(nameUser, apellidoUser, docUser);


// console.log(persona1);

// switch (libroId) {
//     case 0:
//         alert('Ustede a comprado el libro: "' + arrayLibro[1].nombre + '" por el precio de: ' + arrayLibro[1].precio + '\nA cargo de: \n' + persona1.show());

//         break;
//     case 1:
//         alert('Ustede a comprado el libro: "' + arrayLibro[2].nombre + '" por el precio de: ' + arrayLibro[2].precio + '\nA cargo de: \n' + persona1.show());
//         break;
//     case 2:
//         alert('Ustede a comprado el libro: "' + arrayLibro[3].nombre + '" por el precio de: ' + arrayLibro[3].precio + '\nA cargo de: \n' + persona1.show());
//         break;
//     case 3:
//         alert('Ustede a comprado el libro: "' + arrayLibro[4].nombre + '" por el precio de: ' + arrayLibro[4].precio + '\nA cargo de: \n' + persona1.show());
//         break;
//     default:
//         alert('Error del sistema');
//         break;

// }

// alert('Gracias por su compra!');
