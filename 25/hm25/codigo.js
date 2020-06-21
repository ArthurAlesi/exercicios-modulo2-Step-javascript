class Casa {
    constructor(i, j, color) {
        this.i = i;
        this.j = j;
        this.color = color
        this.peca;
    }

    getPosicaoString() {

        return "" + this.i + this.j;
    }

    getCorCasa() {
        return this.color;
    }
}

class Peca {
    constructor(cor) {
        this.cor = cor;
        this.representacao = "O"
    }
}

cor = "preto";
tabuleiro = [];

(function() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            tabuleiro.push(new Casa(i, j, cor = trocaCor(cor)))

        }
        cor = trocaCor(cor)
    }
})();


(function() {
    qtdCasa = 1
    colocaPeca = true
    corPeca = "preto"
    for (casa in tabuleiro) {

        if (tabuleiro[casa].color == "preto") {
            if ((colocaPeca == true)) {

                if (qtdCasa <= 12) {
                    tabuleiro[casa].peca = new Peca(corPeca)

                } else {

                    qtdCasa = 1;
                    colocaPeca = false;
                }


            } else {
                if (qtdCasa == 8) {

                    qtdCasa = 0;
                    colocaPeca = true;
                    corPeca = trocaCor(corPeca);
                }
            }

            qtdCasa++;
        }
    }
})();


(function criaTabuleiroDiv() {
    for (casa in tabuleiro) {
        posiIJ = tabuleiro[casa].getPosicaoString()
        posicao = document.createElement("div")
        posicao.setAttribute("class", "casa " + tabuleiro[casa].getCorCasa())
        posicao.setAttribute("id", posiIJ)
        posicao.setAttribute("onclick", "clicar(" + posiIJ + ")")

        document.getElementById("externa").appendChild(posicao)
        document.getElementById(tabuleiro[casa].getPosicaoString()).innerHTML = "&nbsp;"

        if (tabuleiro[casa].peca != undefined) {
            document.getElementById(posiIJ).innerHTML = tabuleiro[casa].peca.representacao
                // define as letras da fonte (pecas) no inicio do jogo
            posicao.style.color = (tabuleiro[casa].peca.cor == "preto") ? "black" : "white";
        }
        if ((Number(casa) + 1) % 8 == 0 && casa != 0) {
            document.getElementById("externa").innerHTML += "<br>"
        }
    }
})();


function trocaCor(cor) {
    if (cor == "preto") {
        cor = "branco"
    } else {
        cor = "preto"
    }
    return cor;
}


// --------------------------------
var variavelGlobal = false;
var vez = "branco"
var temp;

function clicar(param) {
    var diagonalLivre;
    if (variavelGlobal == false) {
        casa = document.getElementById(param)
        if (casa.textContent == "O") {
            if (diagonalLivre = verificaEspaço(param)) {

                document.getElementById("acao").innerHTML = "voce selecionou uma casa <br> Diga para onde ela vai"
                variavelGlobal = true;
                temp = param

            } else {
                document.getElementById("acao").innerHTML = "jogada obstruida, tente de novo"
            }
        } else {
            document.getElementById("acao").innerHTML = "seleção vazia tente de novo"

        }
    } else {
        document.getElementById("acao").innerHTML = "moveu a peça"
        document.getElementById(param).innerHTML = "O"
        document.getElementById(param).style.color = retornaCor(vez)
        document.getElementById(temp).innerHTML = "&nbsp;"
        vez = trocaCor(vez)
        document.getElementById("cor").innerHTML = vez

        variavelGlobal = false


    }

}


function verificaEspaço(param) {
    posi = "" + param + ""
    i = posi[0]
    j1 = Number(posi[1]) + 1
    j2 = Number(posi[1]) - 1

    if (vez == "branco") {
        i = Number(i) - 1
    } else {
        i = Number(i) + 1
    }


    if (document.getElementById("" + i + j1).innerHTML == "&nbsp;" || document.getElementById("" + i + j2).innerHTML == "&nbsp;") {
        return true;
    } else {

        return false;
    }
}

function retornaCor(cor) {
    if (cor == "preto") {
        return "black"
    } else {
        return "white"
    }
}