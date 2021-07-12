// MATERIALIZE
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});



//BACKIN INFO JSON
const libroJSON = sessionStorage.getItem('LibroBuy');
// console.log(libroJSON);
const libroObj = JSON.parse(libroJSON);
// console.log(libroObj);

let totalshow = '';

function addLibroCompra(){

    librosMostrar = document.querySelector('.listaLibros');
    // console.log(librosMostrar);
  

    
    for(const libros of libroObj){

        let textShow2 = `<li class="collection-item"> Libro: ` + libros.nombre + ` - Precio: $` + libros.precio + `</li>`
        // librosMostrar.innerHTML = textShow2;
        totalshow = totalshow + textShow2
        // console.log(textShow2);
        // console.log(totalshow);
        addTextHtml(totalshow);
    }

    function addTextHtml(totalshow){
        // console.log(totalshow);
        librosMostrar.innerHTML = totalshow;
    }
    
}

function addPrecioCompra(){

    librosPrecioMostrarConIVA = document.querySelector('.TotalConIVA');
    librosPrecioMostrarSinIVA = document.querySelector('.TotalSinIVA');

    console.log(librosPrecioMostrarConIVA);
    console.log(librosPrecioMostrarSinIVA);


    librosPrecioMostrarConIVA.innerHTML = '<li class="collection-header"><h4>Precio Total Con IVA: $ ' + sessionStorage.getItem('TotalPriceConIva'); + '</h4></li>';
    librosPrecioMostrarSinIVA.innerHTML = '<li class="collection-header"><h4>Precio Total Sin IVA: $ ' + sessionStorage.getItem('TotalPriceSinIva'); + '</h4></li>';

}



addLibroCompra();
addPrecioCompra();



$('form').on('submit', function(event) {
            
    event.preventDefault();
    
    let $inputName = $(this).find('#first_name');
    console.log($inputName);
    let inputName = $inputName.val();
    console.log(inputName);

    let $inputApellido = $(this).find('#last_name');
    console.log($inputApellido);
    let inputApellido = $inputApellido.val();
    console.log(inputApellido);

    let $inputTel = $(this).find('#phone');
    console.log($inputTel);
    let inputTel = $inputTel.val();
    console.log(inputTel);

    let $inputEmail = $(this).find('#email');
    console.log($inputEmail);
    let inputEmail = $inputEmail.val();
    console.log(inputEmail);


    $('#text-outputFactura').text("Factura a Nombre: " + inputName + " " + inputApellido);
    $('#text-outputFactura2').text("Telefono: " + inputTel);
    $('#text-outputFactura3').text("Email: " + inputEmail);
});