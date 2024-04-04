//Calculadora de IMC (indice de masa corporal)

/*El Índice de Masa Corporal (IMC) es una medida que se utiliza para determinar si una persona tiene un peso saludable para su altura. Ayuda a evaluar si una persona está en riesgo de sufrir problemas de salud relacionados con el peso, como enfermedades cardiovasculares, diabetes tipo 2, presión arterial alta, etc. Se calcula dividiendo el peso (en kilogramos) por el cuadrado de la altura (en metros).*/


// El programa realizara el cálculo del IMC y proporcionara en consola uno de estos resultados basándose en la siguiente tabla:
/*IMC < 18.5	    Bajo peso
18.5 ≤ IMC < 24.9	Peso saludable
25 ≤ IMC < 29.9	    Sobrepeso
30 ≤ IMC	        Obesidad   */


//variables
const peso = 75;
const altura = 1.74;
const imc = calcularIndiceMasaMuscular(peso, altura);
const categoriaImc = categoriaIndiceMasaCorporal(imc);
/* const notANumber = imcNotANumber (imc) */

//Funcion para calcular el indice de masa corporal (IMC) y alertar si el numero ingresado no es un numero...
function calcularIndiceMasaMuscular(peso, altura) {
 if (isNaN(peso) || isNaN(altura)) {
    return "no es un numero valido"
 }
 else {
    return peso / (altura * altura);
}
}

//Funcion para interpretar el IMC y muestra el mensaje correspondiente con la categoria del IMC.

function categoriaIndiceMasaCorporal(imc) {
  //SI el indice de masa corporal es menor a 18.5
  if (isNaN(imc)) {
    return "No es un numero valido"
  }

  else if (imc < 18.5) {
    return "Bajo Peso";
  }
  //SI el indice de masa corporal es mayor o igual a 18.5 pero menor a 24.9
  else if (imc >= 18.5 && imc < 24.9) {
    return "Peso Saludable";
  }
  //SI el indice de masa corporal es mayor a 25 pero menor a 29.9
  else if (imc > 25 && imc < 29.9) {
    return "Sobrepeso";
  }
  //SI el indice de masa corporal es mayor a 30
  else if (imc >= 30) {
    return "Obesidad";
  }
}

//Imprimir en consola

console.log("Su indice de masa corporal es" + " " + imc);
console.log("La categoria de Indice de masa corporal en la que se encuentra es" +" " +    categoriaImc);
