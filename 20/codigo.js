carro = {

    motor: {},
    volante: {},
    marcha: {},
    acessorio: {},
    freio: {},
    acelerador: {},
    embreagem: {}
}

class Peca {
    constructor(param, param2) {
        this.nome = param
        this.estado = param2
        document.getElementById("msg").innerHTML = "criou " + this.nome
        sessionStorage.setItem(this.nome, this.estado)

    }

}

class Motor extends Peca {
    constructor() {
        super("motor", "desligado")

    }
}

class Volante extends Peca {
    constructor() {
        super("volante", "alinhado")

    }
}
class Marcha extends Peca {
    constructor() {
        super("marcha", 0)
    }
}

class Acessorio extends Peca {
    constructor() {
        super("acessorio", "arcondicionado")
    }
}

class Freio extends Peca {
    constructor() {
        super("freio", false)
    }
}

class Acelerador extends Peca {
    constructor() {
        super("acelerador", "solto")
    }
}
class Embreagem extends Peca {
    constructor() {
        super("embreagem", "solto")
    }
}



function criar(param) {



    switch (param) {
        case "volante":
            carro[param] = new Volante();
            break;
        case "marcha":
            carro[param] = new Marcha();
            break;
        case "motor":
            carro[param] = new Motor();
            break;
        case "acessorio":
            carro[param] = new Acessorio();
            break;
        case "freio":
            carro[param] = new Freio();
            break;
        case "acelerador":
            carro[param] = new Acelerador();
            break;
        case "embreagem":
            carro[param] = new Embreagem();
            break;
    }

}


console.log(carro)

function verCarro() {
    document.getElementById("msg").innerHTML = ""

    for (p in carro) {
        document.getElementById("msg").innerHTML += p + ": " + sessionStorage.getItem(p) + "<br>"
        console.log(p + ": " + sessionStorage.getItem(p))
    }
}