var numero1;
var numero2;
var resultado;


function suma(num1, num2) {
    var valor;

    valor = +num1 + +num2;
    return valor;
}

function accion() {
    numero1 = prompt('Introduce el numero1: ')
    numero2 = prompt('introduce el numero2: ')
    resultado = suma(numero1, numero2)
    console.log(resultado)
}