class Producto {
    constructor(id, precio) {
        this.id = parseInt(id);
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

class Libro extends Producto {
    constructor(nombre, id, precio) {
        super(id, precio);
        this.nombre = nombre;
    }
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

const arrayLibro = [];
arrayLibro.push(new Libro("Narnia", 12, 300));
arrayLibro.push(new Libro("Harry Potter 1", 13, 500));
arrayLibro.push(new Libro("El Señor de los Anillos", 14, 600));
arrayLibro.push(new Libro("El Principito", 15, 400));


for (const libros of arrayLibro) {
    libros.sumaIva();
}

let nameUser = prompt("Favor de ingresar su nombre: ");
let apellidoUser = prompt("Favor de ingresar su apellido: ");
let docUser = prompt("Favor de ingresar su DNI: ");

persona1 = new Persona(nameUser, apellidoUser, docUser);

alert('Los libros disponibles son:');

for (const libros of arrayLibro) {
    alert('Libro: ' + libros.nombre + ', dispone del precio de: $' + libros.precio);
}

do {
    libroId = Number(prompt('¿Que libro desea elegir? \n1) Narnia \n2) Harry Potter 1 \n3) El Señor de los Anillos \n4) El Principito'));
} while (libroId < 1 || libroId > 4);

console.log(libroId);
console.log(nameUser, apellidoUser, docUser);


console.log(persona1);

switch (libroId) {
    case 1:
        alert('Ustede a comprado el libro: "' + arrayLibro[1].nombre + '" por el precio de: ' + arrayLibro[1].precio + '\nA cargo de: \n' + persona1.show());

        break;
    case 2:
        alert('Ustede a comprado el libro: "' + arrayLibro[2].nombre + '" por el precio de: ' + arrayLibro[2].precio + '\nA cargo de: \n' + persona1.show());
        break;
    case 3:
        alert('Ustede a comprado el libro: "' + arrayLibro[3].nombre + '" por el precio de: ' + arrayLibro[3].precio + '\nA cargo de: \n' + persona1.show());
        break;
    case 4:
        alert('Ustede a comprado el libro: "' + arrayLibro[4].nombre + '" por el precio de: ' + arrayLibro[4].precio + '\nA cargo de: \n' + persona1.show());
        break;
    default:
        alert('Error del sistema');
        break;

}

alert('Gracias por su compra!');

