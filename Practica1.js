//monto previsto para ese mismo dia
const montoPrevisto = 5;
// Crear una variable para guardar el numero de ordenes
const ordenesEfectivas = 10;
function proyectarCapacidad(){
// si las ordenes superaron el monto previsto
if (ordenesEfectivas > montoPrevisto) {
    console.log("Carlos, se debe de incrementar la capacidad en el siguiente dia");
    } else if (ordenesEfectivas < montoPrevisto){
// si por el contrario la cantidad de ordenes fue menor, reducir su capacidad
    console.log ("Debes reducir la capacidad");
    } else {
        console.log("No se necesita nada")
    }
}
// llamar la fucnion...
proyectarCapacidad();

// Determinar si el dia es par o impar
const diaDelMes = 3;

function diaParOImpar() {
    //Si el dia es par...
    if(diaDelMes % 2 === 0){
        console.log("El dia del mes es Par");
    }
    else {
        console.log("El dia es Impar");
    }
}

//Llamar la funcion
diaParOImpar();

//Carlos quiere que el programa avise aquellas veces que el dia es impar y la demanda fue mayor a la prevista...
function diaImparAltaDemanda(){
    
//Si el dia es impar y la cantidad de ordenes supera la prevista, mandar alerta...
if(  ordenesEfectivas > montoPrevisto && diaDelMes % 2 === 1 ) {
    console.log("Cuidado el dia es impar y la demanda fue mayor a la prevista");
}
else{
    console.log()
}
}

diaImparAltaDemanda();

//BONUS

//Carlos quiere saber la proporcion de ordenes cumplidas respecto al total previsto...

function proporcionDeOrdenesCumplidas() {
    console.log((ordenesEfectivas / montoPrevisto  * 100 ) + "%");
}

proporcionDeOrdenesCumplidas();
