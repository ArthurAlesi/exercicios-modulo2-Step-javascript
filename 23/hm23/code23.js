tabuleiro = [
    ["T", "C", "B", "Re", "Ra", "B", "C", "T"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["_", "_", "_", "_", "_", "_", "_", "_"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["T", "C", "B", "Re", "Ra", "B", "C", "T"]

];
// true white
// false black
window.alert(3);
(function criaTabuleiro() {
    var cor = "branco";
    for (var i = 0; i < 8; i++) {
        console.log(i)
        for (var j = 0; j < 8; j++) {
            console.log(cor)
            posicao = document.createElement("div");
            posicao.innerHTML = tabuleiro[i][j]

            posiId = "casa" + i + j + " " + cor
            posicao.setAttribute("class", posiId)
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