pecaAserJogada = null

var flag = false;

class Casa {
    peca = []
}






class Peca {
    constructor(nome, sigla, color) {
        this.nome = nome;
        this.sigla = sigla;
        this.cor = color
        this.posicao = ""
    }



}

class Torre extends Peca {
    constructor(core) {
        super("torre", "T", core)
    }
}

class Cavalo extends Peca {
    constructor(core) {
        super("cavalo", "C", core)
    }
}

class Bispo extends Peca {
    constructor(core) {
        super("Bispo", "B", core)
    }
}

class Rei extends Peca {
    constructor(core) {
        super("rei", "Re", core)
    }
}
class Rainha extends Peca {
    constructor(core) {
        super("rainha", "Ra", core)
    }
}

class Peao extends Peca {
    constructor(core) {
        super("peao", "P", core)
    }
}
//   [new Torre("branco"), new Cavalo("branco"), new Bispo("branco"), new Rei("branco"), new Rainha("branco"), new Bispo("branco"), new Cavalo("branco"), new Torre("branco")],
// [new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco")],
//  [new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta")],
// [new Torre("preta"), new Cavalo("preta"), new Bispo("preta"), new Rei("preta"), new Rainha("preta"), new Bispo("preta"), new Cavalo("preta"), new Torre("preta")]

tabuleiro = [
    [new Torre("branco"), new Cavalo("branco"), new Bispo("branco"), new Rei("branco"), new Rainha("branco"), new Bispo("branco"), new Cavalo("branco"), new Torre("branco")],
    [new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco"), new Peao("branco")],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    [new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta"), new Peao("preta")],
    [new Torre("preta"), new Cavalo("preta"), new Bispo("preta"), new Rei("preta"), new Rainha("preta"), new Bispo("preta"), new Cavalo("preta"), new Torre("preta")]
];


(function exibeTabuleiro() {
    var cor = "branco";
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            posicao = document.createElement("div");

            if (tabuleiro[i][j] == "") {
                posicao.innerHTML = "&nbsp;"

            } else {
                posicao.innerHTML = tabuleiro[i][j].sigla
                tabuleiro[i][j].posicao = (i, j)
            }
            paramIJ = i + "," + j

            casaCor = "casa " + cor
            posiIJ = "" + i + j
            console.log(casaCor)
            posicao.setAttribute("class", casaCor)
            posicao.setAttribute("id", posiIJ)
            posicao.setAttribute("onclick", "clicar(" + paramIJ + ")")
            document.getElementById("externa").appendChild(posicao)

            cor = trocaCor(cor);
        }
        cor = trocaCor(cor);
        document.getElementById("externa").innerHTML += "<br>"
    }
})();


function trocaCor(cor) {
    var color;
    if (cor == "branco") {
        color = "preto"
    } else {
        color = "branco";
    }
    return color;
}

var globalVariavelEScrota = false
var x = null;

function clicar(i, j) {

    if (globalVariavelEScrota == true) {
        window.alert("Vc escolheu agora pa onde essa peça foi")
        tabuleiro[i][j] = tabuleiro[x[0]][x[1]]
        console.log("" + i + j)
        tabuleiro[x[0]][x[1]] = ""
        console.log("" + x[0] + x[1])
        class1 = "" + i + j
        class2 = "" + x[0] + x[1]
        console.log("o tabuleiro[i][j].sigla é " + tabuleiro[i][j].sigla)
        document.getElementById(class1).innerHTML = tabuleiro[i][j].sigla
        document.getElementById(class2).innerHTML = "&nbsp;"
        globalVariavelEScrota = false

        console.log(tabuleiro)
    } else {
        window.alert("escolheu a peça")
        window.alert("diga para onde ela vai")
        x = [i, j]
        globalVariavelEScrota = true
    }



    // if (casaClicada == "&nbsp;") {
    //     pecaAserJogada = tabuleiro[i][j]
    // } else {
    //     tabuleiro[i][j] = pecaAserJogada
    //     document.getElementById("casa" + i + j).innerHTML = pecaAserJogada.sigla
    // }

}