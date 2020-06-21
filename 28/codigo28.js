// A soma das temperaturas
// O total de temperaturas de cada trimestre
// O total de temperaturas de cada semestre
// A maior temperatura de cada trimestre
// A maior temperatura de cada semestre

var temperatura = [
    { jan: 22.7 },
    { fev: 21.5 },
    { mar: 23.4 },
    { abr: 22.3 },
    { mai: 22.3 },
    { jun: 22.9 },
    { jul: 29.3 },
    { ago: 31.3 },
    { set: 30.0 },
    { out: 25.5 },
    { nov: 29.0 },
    { dez: 26.4 },
]
soma = 0
somaTrimestre = 0


for (i in temperatura) {
    indice = i += 1

    for (j in temperatura[i]) {
        soma += temperatura[i][j]
    }
}
media = soma / temperatura.length
console.log("a soma de todas as temperaturas é " + soma)
console.log(media)