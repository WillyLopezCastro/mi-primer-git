let botones=document.querySelectorAll(".likes1");
let valor=document.querySelector("#result");
let contador=0;

function likes1 () {
    contador++;
    valor.innerText=contador;
    alert ("ninja was liked")
}

function clicklogout(element){ /* PARA CAMBIAR EL TEXTO AL DAR CLICK */
    element.innerText = 'Logout'
}

function gone(){ /* PARA QUE DESAPAREZCA EL BOTON */
    let join = document.getElementsByClassName("goneButton")[0];
    join.style = "display: none;";
}

var count = 0;
var totalCount = document.getElementById("totalCount")

function likes2 (element){ /* funcion para sumar cada vez que se le da click a un boton */
    count++;
    valor.innerText=contador;
    alert ("ninja was liked")

    totalCount.innerText = count;
    console.log(count)
} 
