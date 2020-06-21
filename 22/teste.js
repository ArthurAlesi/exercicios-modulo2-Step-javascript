class Peca {
    constructor(param) {
        this.nome = param
    }
}

class Volante extends Peca {
    constructor() {
        super("volante")

    }

}

function criarBotao(param) {
    console.log(param)
    botao = document.createElement("button")
    botao.innerHTML = "criar " + param
    botao.setAttribute("id", param)
    stringFuncao = "criar('" + param + "')"
    botao.setAttribute("onclick", stringFuncao)
    document.body.appendChild(botao)
    document.body.innerHTML += "<br>"
}

function criar(parametro) {
    switch (parametro) {
        case "volante":
            carro.push(new Volante())
            break;
    }

}

pecasNecessarias = ["volante", "marcha"];
(function iniciar() {
    console.log("abacaxiu")
    carro = []
    for (p in pecasNecessarias) {
        if (sessionStorage.getItem(pecasNecessarias[p]) == null) {
            window.alert("ate aqui funcionopu")
            window.alert(pecasNecessarias[p])
            criarBotao(pecasNecessarias[p])
        }
    }
    a = sessionStorage.getItem("alemanha")

})();