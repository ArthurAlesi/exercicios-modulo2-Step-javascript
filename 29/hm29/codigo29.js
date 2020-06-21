var temperaturas = {
    trimestre1: [
        { tmin: 29.3, tmax: 35.0 }, { tmin: 24.3, tmax: 33.3 }, { tmin: 18.3, tmax: 30.0 }
    ],
    trimestre2: [
        { tmin: 15.3, tmax: 30.5 }, { tmin: 17.6, tmax: 29.9 }, { tmin: 12.3, tmax: 26.0 }
    ],
    trimestre3: [
        { tmin: 10.1, tmax: 21.0 }, { tmin: 9.8, tmax: 24.0 }, { tmin: 13.8, tmax: 30.6 }
    ],
    trimestre4: [
        { tmin: 17.7, tmax: 29.1 }, { tmin: 19.3, tmax: 33.0 }, { tmin: 18.1, tmax: 36.5 }
    ]
}



document.getElementById("infoMes").innerHTML += "Medias Mensais: <br><br>"

function retornaMes(m) {
    switch (m) {
        case 1:
            return "Janeiro";
            break;
        case 2:
            return "Fevereiro";
            break;
        case 3:
            return "Março";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Maio";
            break;

        case 6:
            return "Junho";
            break;
        case 7:
            return "Julho";
            break;
        case 8:
            return "Agosto";
            break;
        case 9:
            return "Setembro";
            break;
        case 10:
            return "Outubro";
            break;
        case 11:
            return "Novembro";
            break;
        case 12:
            return "Dezembro";
            break;




    }
}


//A temperatura média de cada trimestre
listaMediaTri = []
mediaTrimestre = 0;
mesNum = 0;
media = 0
var mesMaior;
var mesMenor;
minAnual = temperaturas["trimestre1"][0].tmin
maxAnual = temperaturas["trimestre1"][0].tmax

for (trime in temperaturas) {
    for (mes in temperaturas[trime]) {
        mesNum++;
        media = temperaturas[trime][mes].tmin + temperaturas[trime][mes].tmax
        media /= 2
        media = media
        document.getElementById("infoMes").innerHTML += "media de " + retornaMes(mesNum) + ": " + media.toFixed(2) + "<br>"

        if (temperaturas[trime][mes].tmin <= minAnual) {
            minAnual = temperaturas[trime][mes].tmin;
            mesMenor = retornaMes(mesNum)

        }

        if (temperaturas[trime][mes].tmax >= maxAnual) {
            maxAnual = temperaturas[trime][mes].tmax;
            mesMaior = retornaMes(mesNum)
        }
        mediaTrimestre += Number(media);
        media = 0

    }
    mediaTrimestre /= 3
    listaMediaTri.push(mediaTrimestre)
    mediaTrimestre = 0
}

document.getElementById("infoMes").innerHTML += "<hr><br> Maior e Menor: <br><br>"
document.getElementById("infoMes").innerHTML += "Maior temperatura: " + mesMaior + ", " + maxAnual + "<br>"
document.getElementById("infoMes").innerHTML += "Menor temperatura: " + mesMenor + ", " + minAnual + "<br>"

document.getElementById("infoMes").innerHTML += "<hr><br> Média de cada Trimestre: <br><br>"
for (mediaTri in listaMediaTri) {
    document.getElementById("infoMes").innerHTML += "Média do " + (Number(mediaTri) + 1) + "º trimestre: " + listaMediaTri[mediaTri].toFixed(2) + "<br>"
    window.alert(mediaTri)
}