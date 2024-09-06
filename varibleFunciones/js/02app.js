vida = 100;
ataque = 10;
pocion = 20;

function muestraVida() {
    console.log(vida)
}

function ataqueEnemigo() {
    vida -= ataque;
    muestraVida()
}


function aumentarVida() {
    vida += pocion;
    muestraVida()
}
