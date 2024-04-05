//Calculadora IMC

const peso = "hola";
const altura = 1.8; 

const calculadoraIMC = (peso , altura) => (peso / (altura*altura))

const imc = calculadoraIMC(peso, altura);

if (peso || altura == NaN) {
    console.log ("Alerta: el numero ingresado no es valido")
};

//Categoria del IMC

const interpreteIMC = (imc) => {
    if (imc < 18.5 ) {
         return "Tu peso es Bajo"
    }
    else if (imc >= 18.5 && imc < 24.9) {
        return "Estas en un peso saludable"
    }
    else if( imc >= 25 && imc < 29.9 ) {
        return "Tienes Sobrepeso"
    }
    else if ( imc >= 30) {
        return "Tienes Obesidad";
    }
}


console.log(interpreteIMC(imc));
