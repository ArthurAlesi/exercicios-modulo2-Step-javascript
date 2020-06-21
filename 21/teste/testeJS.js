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

pecasNecessarias = ["rodas", "volante", "marcha", "motor", "acessorio", "freio", "acelerador", "embreagem"]

function criarBotao() {
    for (p in pecasNecessarias) {
        peça = pecasNecessarias[p]
            // window.alert(peça + (typeof peça))
        botao = document.createElement("button")
        botao.innerHTML = "criar " + peça
        botao.setAttribute("id", peça)
        stringFuncao = "criar('" + peça + "')"

        botao.setAttribute("onclick", stringFuncao)
        document.body.appendChild(botao)
        document.body.innerHTML += "<br>"

    }
}


function criar(param) {
    switch (param) {
        case "volante":
            carro.push(new Volante())
            break;
        case "marcha":
            carro.push(new Marcha())
            break;
        case "motor":
            carro.push(new Motor())
            break;
        case "acessorio":
            carro.push(new Acessorio())
            break;
        case "freio":
            carro.push(new Freio())
            break;
        case "acelerador":
            carro.push(new Acelerador())
            break;
        case "embreagem":
            carro.push(new Embreagem())
            break;
        case "rodas":
            criarRodas();
            break;
    }
    removido = document.getElementById(param)
    document.body.removeChild(removido)
}

function ligar() {
    if (carro.length >= 8) {

        for (a in carro) {

            if (carro[a].nomePeca == "motor") {
                carro[a].ligarMotor()
                break;
            }
        }
    } else {
        document.getElementById("resultado").innerHTML = "O carro nao tem todas as peças necessárias"
    }

}


function pisarEmbreagem() {
    temEmbre = false
    for (a in carro) {
        if (carro[a].nomePeca == "embreagem") {
            temEmbre = true;
            carro[a].pisar()
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
    for (a in carro) {
        if (carro[a].nomePeca == "embreagem") {
            possuiEmbreagem = true;
            posicaoEmbre = a;

        }


    }

    for (b in carro) {
        if (carro[b].nomePeca == "marcha") {
            possuiMarcha = true;
            posiMarcha = b;
            break;
        }
    }
    if ((possuiMarcha) & (possuiEmbreagem)) {

        if (carro[posiMarcha].marcha < 5) {
            if (carro[posicaoEmbre].pisada == true) {
                carro[posiMarcha].marcha++;
            }
            carro[posicaoEmbre].soltar()
                // window.alert("deveria estar certo")
            document.getElementById("resultado").innerHTML = "marcha:" + carro[posiMarcha].marcha

        } else {
            document.getElementById("resultado").innerHTML = "marcha já está no máximo: 5"

        }

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

    carro.push(listaRodas)
}

function iniciar() {
    carro = []
    criarBotao()
    document.body.appendChild(document.createElement("hr"))

    document.body.innerHTML += '<button onclick="ligar()">ligar</button> <br>    <button onclick="pisarEmbreagem()">pisar embreagem</button> <br>    <button onclick="subirMarcha()">subir marcha</button> <br></br>'

}