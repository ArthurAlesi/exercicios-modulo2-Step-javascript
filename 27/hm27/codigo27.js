var notas = [
    { nome: 'João', gastos: { pgto1: 100.08, pgto2: 20.00, pagto3: 5.00 }, sexo: 'M' },
    { nome: 'Sara', gastos: { pgto1: 10.0, pgto2: 10.30, pagto3: 1.00 }, sexo: 'F' },
    { nome: 'Francisco', gastos: { pgto1: 12.00, pgto2: 30.33, pagto3: 2.00 }, sexo: 'M' },
    { nome: 'Paulo', gastos: { pgto1: 1.02, pgto2: 2.50, pagto3: 3.00 }, sexo: 'M' },
    { nome: 'Everton', gastos: { pgto1: 15.20, pgto2: 2.80, pagto3: 5.00 }, sexo: 'M' },
    { nome: 'Paula', gastos: { pgto1: 26.00, pgto2: 28.00, pagto3: 1.00 }, sexo: 'F' },
    { nome: 'Demétrio', gastos: { pgto1: 5.00, pgto2: 57.10, pagto3: 5.00 }, sexo: 'M' },
    { nome: 'Márcio', gastos: { pgto1: 8.00, pgto2: 3.10, pagto3: 2.00 }, sexo: 'F' },
    { nome: 'Carlos', gastos: { pgto1: 5.00, pgto2: 12.00, pagto3: 8.00 }, sexo: 'F' },
    { nome: 'Janaína', gastos: { pgto1: 10.01, pgto2: 10.45, pagto3: 9.00 }, sexo: 'F' }
]



// O total de pagamentos de sexo masculino
// O total de pagamentos de sexo feminino

// O maior pagamento entre todas as pessoas de sexo masculino
// O maior pagamento entre todas as pessoas de sexo feminino
// O maior de todos os pagamentos


const exibeCadaUm = (param) => {
    document.getElementById("cadaUm").innerHTML += "total de " + param[0] + ": " + param[1] + "<br>"
}

const exibeMaiorDeCada = (param) => {
    document.getElementById("maiorPagamento").innerHTML += "maior pagamento de " + param[0] + ": " + param[1] + "<br>"
}

function totalPagamento(param) {
    temp = 0
    pagamento = param.gastos
    temp = pagamento.pgto1 + pagamento.pgto2 + pagamento.pagto3
    return [param.nome, temp, param.sexo]
}

function achaMaior(param) {
    listinha = param.gastos
    maior = listinha.pgto1

    for (i in listinha) {

        if (listinha[i] > maior) {
            maior = listinha[i]

        }
    }
    return [param.nome, maior, param.sexo]
}



function percorreMaiorDeCada() {
    lista = notas.map(achaMaior)

    listaFeminina = lista.filter((param) => { return param[2] === "F" })
    listaMasculina = lista.filter((param) => { return param[2] === "M" })
        //console.log(listaFeminina)
    document.getElementById("maiorPagamento").innerHTML += "Masculinos: <br>"
    listaMasculina.forEach(exibeMaiorDeCada)
    document.getElementById("maiorPagamento").innerHTML += "Femininos: <br>"
    listaFeminina.forEach(exibeMaiorDeCada)
}

function quemPagaMais() {
    lista = notas.map(totalPagamento)
    lista.forEach(exibeCadaUm)
    maiorMAsculino = lista.filter((param) => { return param[2] === "M" })
    maiorFeminino = lista.filter((param) => { return param[2] === "F" })
}
quemPagaMais()

percorreMaiorDeCada();