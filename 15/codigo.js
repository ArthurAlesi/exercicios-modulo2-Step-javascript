function myTimer() {
    var timer = setTimeout(function() {
        imprime();
        if (contador > 0) {
            myTimer();
        }
    }, 1000);
}

function imprime() {

    //document.write(counter++)
    contador--

    document.getElementById("numeros").innerHTML = `<img src="./numeros/${contador}.jpg">`
}

function iniciar() {
    this.contador = 11;
    //  window.alert(10)
    myTimer();
}