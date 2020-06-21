class Animal {
    constructor(raca, som, pata, cobertura, comedor, movimento) {
        this.raca = raca
        this.som = som;
        this.pata = pata;
        this.cobertura = cobertura;
        this.comedor = comedor
        this.movimento = movimento
        this.imprime()
    }

    imprime() {
        document.getElementById("informacoes").innerHTML = this.raca + ": <br>"
        document.getElementById("informacoes").innerHTML += "faz " + this.som + " <br>"
        document.getElementById("informacoes").innerHTML += "possui " + this.pata + " patas <br>"
        document.getElementById("informacoes").innerHTML += "Possui " + this.comedor + "<br> "
        document.getElementById("informacoes").innerHTML += "é coberto por " + this.cobertura





    }
}


class Gato extends Animal {
    constructor() {
        super("gato", "Miau", 4, "pelos", "boca", "andar")
    }
}

class Andorinha extends Animal {
    constructor() {
        super("Andorinha", "Piu Piu", 2, "penas", "bico", "voar")
    }
}

class Cobra extends Animal {
    constructor() {
        super("Cobra", "SSSShhh", 0, "escamas", "boca", "esgueira-se")
    }
}
var gato;
var andorinha;
var cobra

function criar(param) {
    switch (param) {
        case "gato":
            if (gato == null) {
                gato = new Gato()

            } else {
                document.getElementById("mensagem").innerHTML = param + " já existe"

            }
            break;

        case "andorinha":
            if (andorinha == null) {
                andorinha = new Andorinha()


            } else {
                document.getElementById("mensagem").innerHTML = param + " já existe"

            }

            break;


        case "cobra":
            if (cobra == null) {
                cobra = new Cobra();


            } else {
                document.getElementById("mensagem").innerHTML = param + " já existe"

            }

            break;


    }
}

function jaExiste(param) {

}