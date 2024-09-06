var turno = 1;
var vida = 100;


//estados jugador

var vivo = true;
var envenenado = false;
var quemado = false;

//jugadas CPU

var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;


function muestraEstadoJugador() {
    if(envenenado == true) {
        console.log('envenenado')
    }

    if (quemado == true) {
        console.log('quemado')
    }
}

function juegaTurno() {
    var jugadorCPU = Math.floor(Math.random() * 4 )
    console.log('tu numero aleatorio es: ' + jugadorCPU)


    if (jugadorCPU == atacar) {
        console.log('he atacado al jugador');
    }

    if (jugadorCPU == quemar) {
        quemado = true;
        console.log('he quemado al jugador');
    }

    if (jugadorCPU == envenenar) {
        envenenado = true;
        console.log('he envenedado al jugador');
    }
    muestraEstadoJugador()
}
