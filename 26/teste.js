var notas = [
    { nome: 'João', nota: 8, sexo: 'M' },
    { nome: 'Sara', nota: 12, sexo: 'F' },
    { nome: 'Francisco', nota: 16, sexo: 'M' },
    { nome: 'Paulo', nota: 2, sexo: 'M' },
    { nome: 'Everton', nota: 4, sexo: 'M' },
    { nome: 'Paula', nota: 18, sexo: 'F' },
    { nome: 'Demétrio', nota: 5, sexo: 'M' },
    { nome: 'Márcio', nota: 13, sexo: 'F' },
    { nome: 'Carlos', nota: 15, sexo: 'F' },
    { nome: 'Janaína', nota: 9, sexo: 'F' }
];

var soma = 0;
var me = 0;
var maior;

// const isSexo = (param) => { return param.sexo === sexo };
const getNota = (turma) => { return turma["nota"] }
const somar = (nt) => { soma += nt }
const acharMaior = (nota) => {
    if (nota > maior) {
        maior = nota
    }
}


function stringSexo(sexo) {
    if (sexo === "M") {
        return "Homens"
    } else if (sexo === "F") {
        return "mulheres"
    } else {
        return "inválido"
    }
}


function media(listaNt, quem) {
    var lista = listaNt.map(getNota);
    soma = 0;
    lista.forEach(somar)
    me = soma / lista.length
    document.getElementById("avaliacoes").innerHTML += ("Média " + quem + ": " + me) + "<br>"
}


(function mediaTurma() {

    media(notas, "turma");
})();

function mediaSexo(sexo) {
    const isSexo = (param) => { return param.sexo === sexo };

    listaPorSexo = notas.filter(isSexo)
    media(listaPorSexo, stringSexo(sexo))
}



function maiorNota(lista, quem) {
    var listaMaior = lista.map(getNota);
    maior = listaMaior[0]
    listaMaior.forEach(acharMaior)
    document.getElementById("avaliacoes").innerHTML += ("maior nota" + quem + " : " + maior) + "<br>"
};

function maiorPorSexo(sexo) {
    const isSexo = (param) => { return param.sexo === sexo };
    listaPorSexo = notas.filter(isSexo)
    maiorNota(listaPorSexo, stringSexo(sexo));
}


const exibeNotas = (param) => {
    document.getElementById("notas").innerHTML += param["nome"] + ": "
    document.getElementById("notas").innerHTML += param["nota"] + "<br>"

}

notas.forEach(exibeNotas)


mediaSexo("M")
mediaSexo("F")
maiorPorSexo("M")
maiorPorSexo("F")