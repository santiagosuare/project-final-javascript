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



// CARGA DE DATOS

// let namecomplete = '';
// let name = document.getElementById('first_name'); 
// name.addEventListener("keyup", function(){
//     namecomplete = this.value;
//   });
// console.log(namecomplete);


