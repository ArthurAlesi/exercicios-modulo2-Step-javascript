class Veterinario {
    lista = []
}


class Animal {


    constructor(nPatas, animal, caracter) {
        this.numPatas = nPatas
        this.animal = animal
        this.exibeAnimal(animal)
        this.noVeterinario = false
        this.simbolo = caracter;
    }

    exibeAnimal(animal) {
        // console.log(animal + " foi criado")
        document.getElementById("fraseBicho").innerHTML = animal + " foi criado"
    }


}

class AnimalSom extends Animal {
    constructor(nPatas, animal, caracter, som) {
        super(nPatas, animal, caracter)
        this.som = som

    }

    emitirSom() {
        console.log(this.som)
    }

    examinar() {
        console.log(this.animal + " foi examinado")
        this.emitirSom(this.som)
    }

}
class Cao extends AnimalSom {
    constructor() {
        super(4, "cachorro", "&#128021;", "AuAu")

    }
}

class Gato extends AnimalSom {
    constructor() {
        super(4, "gato", "&#128008;", "Miau")

    }
}
class Papagaio extends AnimalSom {
    constructor() {
        super(2, "papagaio", "&#128038;", "Loiro quer biscoito")
    }
}

class Lagartixa extends Animal {
    constructor() {
        super(4, "lagartixa", "&#128010;")
    }
}

function iniciar() {
    veterinario = new Veterinario();
    exibeVeterinario();

}



function exibeVeterinario() {
    document.getElementById("veterin").innerHTML = `veterinário: ${veterinario.lista.length} animais`
    exibeAnimal()
}

function exibeAnimal() {
    document.getElementById("veterin").innerHTML = `veterinário: ${veterinario.lista.length} animais <br>`
    for (var i = 0; i < veterinario.lista.length; i++) {
        document.getElementById("veterin").innerHTML += ` ${veterinario.lista[i].simbolo} `

    }


}

function irAoVeterinario(param) {

    switch (param) {
        case 'cachorro':
            veterinario.lista.push(new Cao())
            break;
        case "gato":
            veterinario.lista.push(new Gato())
            break;
        case "papagaio":
            veterinario.lista.push(new Papagaio())
            break;
        case "lagartixa":
            veterinario.lista.push(new Lagartixa())
            break;
    }
    exibeVeterinario()
}

function examinar(param) {
    for (var i = 0; i < veterinario.lista.length; i++) {
        if (veterinario.lista[i].animal == param) {
            // window.alert(true)
            if (veterinario.lista[i].som != undefined) {

                document.getElementById("fraseBicho").innerHTML = veterinario.lista[i].som
            } else {

                document.getElementById("fraseBicho").innerHTML = "..."
            }
            veterinario.lista.splice(i, 1)
            break;
        }
    }
    exibeAnimal()
}