let valorDolarBlue = 1100;

function pesosADolarBlue(cantidad) {
    return cantidad / valorDolarBlue;
};

function dolarBlueAPesos(cantidad) {
    return cantidad * valorDolarBlue;
};


function cambioDeMoneda() {
    let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero a que desea cambiar"));
    let resultado;

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese una cantidad válida");
    } else {
        let tipoDeMoneda = prompt("Ingrese 'DOLAR' si quiere cambiar dólares a pesos, o, ingrese 'PESOS' si quiere cambiar pesos a dólares ");

        if (tipoDeMoneda === "DOLAR") {
            resultado = dolarBlueAPesos(cantidad);
            alert(cantidad + " son " + resultado + " pesos argentinos (ARS)");
        } else if (tipoDeMoneda === "PESOS") {
            resultado = pesosADolarBlue(cantidad);
            alert(cantidad + " son " + resultado + " dólares americanos (USD)");
        } else {
            alert("Ingrese una moneda correcta");
        }
    }
};

let nuevaOperacion = true;


while (nuevaOperacion) {
    cambioDeMoneda();
    let respuestaUsuario = prompt("¿Quieres realizar otra operación? (responde 'si' para realizar otra operación, o 'no' para salir)");
    
    do {
        respuestaUsuario = prompt("Por favor ingresa 'si' para realizar otra operación, o 'no' para salir.");
    } while (respuestaUsuario.toLowerCase() !== "si" || respuestaUsuario.toLowerCase() !== "no");

    if (respuestaUsuario.toLowerCase() === "si") {
        nuevaOperacion = true;
    } else {
        nuevaOperacion = false;
        alert("Gracias por utilizar nuestro servicio");
    }
};







