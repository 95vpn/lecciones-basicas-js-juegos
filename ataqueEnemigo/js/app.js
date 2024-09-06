vida = 100;
ataque = 10;
pocion = 20;



function ataqueEnemigo(potencia, nombreAtaque) {
    vida -= potencia;
    console.log("has sido atacado con: " + nombreAtaque)
    console.log("tu vida es de:" + vida)
}
