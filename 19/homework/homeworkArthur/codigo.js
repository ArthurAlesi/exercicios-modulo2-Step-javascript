class Peca {
    constructor(param) {
        this.nomePeca = param
        document.getElementById("resultado").innerHTML = "criou " + this.nomePeca
    }


}

class Roda extends Peca {
    constructor(posicaoX, posicaoY) {
        super("roda")
        this.posicaoX = posicaoX
        this.posicaoY = posicaoY
    }
}


class Volante extends Peca {
    constructor() {
        super("volante")

    }
}

class Marcha extends Peca {
    constructor() {
        super("marcha")
        this.marcha = 0;
    }

    mudarMarcha(num) {
        this.marcha = num
    }

}


class Motor extends Peca {
    constructor() {
        super("motor")
        this.ligado = false
    }


    ligarMotor() {
        this.ligado = true;
        document.getElementById("resultado").innerHTML = "carro ligado"
    }

    desligar() {
        this.ligado = false;

    }

}

class Acessorio extends Peca {
    constructor() {
        super("acessorio")
    }

}



class Freio extends Peca {
    constructor() {
        super("freio")
    }
}

class Acelerador extends Peca {
    constructor() {
        super("acelerador")
        this.velocidade = 0;
    }
}

class Embreagem extends Peca {
    constructor() {
        super("embreagem")
        this.pisada = false;
    }

    pisar() {
        this.pisada = true;
        window.alert("pisou")

    }

    soltar() {
        this.pisada = false;
    }

}

pecas = []

function criaPush(parametro) {
    switch (parametro) {
        case "volante":
            pecas.push(new Volante())
            break;
        case "marcha":
            pecas.push(new Marcha())
            break;
        case "motor":
            pecas.push(new Motor())
            break;
        case "acessorio":
            pecas.push(new Acessorio())
            break;
        case "freio":
            pecas.push(new Freio())
            break;
        case "acelerador":
            pecas.push(new Acelerador())
            break;
        case "embreagem":
            pecas.push(new Embreagem())
            break;
    }
    console.log(pecas)
}

function criar(param) {
    // window.alert('6')
    this.pecaDentro = false;

    for (a in pecas) {
        if (pecas[a].nomePeca == param) {
            this.pecaDentro = true
            break
        }
    }
    if (!pecaDentro) {
        console.log("criou")
        criaPush(param)
    } else {
        console.log("ja existia")

    }


}


function ligar() {
    if (pecas.length >= 8) {

        for (a in pecas) {

            if (pecas[a].nomePeca == "motor") {
                pecas[a].ligarMotor()
                break;
            }
        }
    } else {
        document.getElementById("resultado").innerHTML = "O carro nao tem todas as peças necessárias"
    }

}

function pisarEmbreagem() {
    temEmbre = false
    for (a in pecas) {
        if (pecas[a].nomePeca == "embreagem") {
            temEmbre = true;
            pecas[a].pisar()
            break;
        }
    }
    if (temEmbre) {
        document.getElementById("resultado").innerHTML = "possui embreagem"
    } else {
        document.getElementById("resultado").innerHTML = "Ainda não tem embreagem"

    }

}

function subirMarcha() {
    possuiEmbreagem = false
    possuiMarcha = false
    posicaoEmbre = -1;
    posiMarcha = -1;
    for (a in pecas) {
        if (pecas[a].nomePeca == "embreagem") {
            possuiEmbreagem = true;
            posicaoEmbre = a;

        }


    }

    for (b in pecas) {
        if (pecas[b].nomePeca == "marcha") {
            possuiMarcha = true;
            posiMarcha = b;
            break;
        }
    }
    if ((possuiMarcha) & (possuiEmbreagem)) {
        if (pecas[posicaoEmbre].pisada == true) {
            pecas[posiMarcha].marcha++;
        }
        pecas[posicaoEmbre].soltar()
            // window.alert("deveria estar certo")
        document.getElementById("resultado").innerHTML = "marcha:" + pecas[posiMarcha].marcha
    } else {
        document.getElementById("resultado").innerHTML = "voce precisa possuir embreagem e marcha para realizar essa funcção"

    }


}

function criarRodas() {

    listaRodas = []
    listaRodas.push(new Roda("dianteiro", "esquerdo"))
    listaRodas.push(new Roda("dianteiro", "direito"))
    listaRodas.push(new Roda("traseiro", "esquerdo"))
    listaRodas.push(new Roda("traseiro", "direito"))

    pecas.push(listaRodas)
}