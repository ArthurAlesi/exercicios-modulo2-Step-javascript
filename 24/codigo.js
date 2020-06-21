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

            posiId = "casa" + i + j + " " + cor
            posicao.setAttribute("class", posiId)
            posicao.setAttribute("onclick", "clicar(" + paramIJ + ")")
            document.body.appendChild(posicao)

            cor = trocaCor(cor);
        }
        cor = trocaCor(cor);
        document.body.innerHTML += "<br>"
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

function clicar(i, j) {

    if (flag == false) {
        flag = true;
        if (tabuleiro[i][j] == "") {
            window.alert("esta vazio")
        } else {
            window.alert("a peça q vc clicou é " + tabuleiro[i][j].nome)

        }
    }
}