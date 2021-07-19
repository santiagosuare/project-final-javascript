// MATERIALIZE
document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
});


const FormasDePago = document.querySelector('#result');
//BACKIN INFO JSON
const libroJSON = sessionStorage.getItem('LibroBuy');
const libroObj = JSON.parse(libroJSON);
let totalshow = '';

function addLibroCompra(){
    librosMostrar = document.querySelector('.listaLibros');
  
    for(const libros of libroObj){
        let textShow2 = `<li class="collection-item"> Libro: ` + libros.nombre + ` - Precio: $` + libros.precio + `</li>`;
        totalshow = totalshow + textShow2;
  
        addTextHtml(totalshow);
    }

    function addTextHtml(totalshow){
        librosMostrar.innerHTML = totalshow;
    }
}

function addPrecioCompra(){
    librosPrecioMostrarConIVA = document.querySelector('.TotalConIVA');
    librosPrecioMostrarSinIVA = document.querySelector('.TotalSinIVA');

    librosPrecioMostrarConIVA.innerHTML = '<li class="collection-header"><h4>Precio Total Con IVA: $ ' + sessionStorage.getItem('TotalPriceConIva'); + '</h4></li>';
    librosPrecioMostrarSinIVA.innerHTML = '<li class="collection-header"><h4>Precio Total Sin IVA: $ ' + sessionStorage.getItem('TotalPriceSinIva'); + '</h4></li>';
}

addLibroCompra();
addPrecioCompra();

$('form').on('submit', function(event) {
            
    event.preventDefault();
    
    let $inputName = $(this).find('#first_name');
    let inputName = $inputName.val();

    let $inputApellido = $(this).find('#last_name');
    let inputApellido = $inputApellido.val();

    let $inputTel = $(this).find('#phone');
    let inputTel = $inputTel.val();

    let $inputEmail = $(this).find('#email');
    let inputEmail = $inputEmail.val();

    $('#text-outputFactura').text("Factura a Nombre: " + inputName + " " + inputApellido);
    $('#text-outputFactura2').text("Telefono: " + inputTel);
    $('#text-outputFactura3').text("Email: " + inputEmail + "          PENDIENTE A ACTUALIZACION");
});

$.ajax({
    url:"/MOCK_DATA.json",
    method: "GET",
    dataType: "JSON",
    success: function(data){
       renderFormasPago(data);
    },
    error: function(jqHXR, status,error) {
        console.log(jqHXR);
        console.log(status);
        console.log(error);
    }
})

function renderFormasPago(data) {
    FormasDePago.innerHTML = '';
    
    data.forEach(data=>{
        const {id, Tarjeta, Cuotas} = data;

        $("#cards").append(
            `
                <tr>
                    <td>${id}</td>
                    <td>${Tarjeta}</td>
                    <td>${Cuotas}</td>
                </tr>
            `
        );
    });
}