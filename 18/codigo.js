class Eletrodomestico {
    constructor(ligado, voltagem) {
        this.ligado = ligado
        this.voltagem = voltagem;
    }

    //  1
    // public void setVoltagem(int voltagem) {
    //     this.voltagem = voltagem;
    // }

    // 2
    // public int getVoltagem() {
    //     return this.voltagem;
    // }

    // 3
    // public void setLigado(boolean ligado) {
    //     this.ligado = ligado;
    // }

    // 4
    // public boolean isLigado() {
    //     return ligado;
    // }

    setVoltagem(voltagem) {
        this.voltagem = voltagem
    }

    getVoltagem() {
        return this.getVoltagem
    }

    setLigado(ligado) {
        this.ligado = ligado;
    }
    isLigado() {
        return this.ligado;
    }



}

class Radio extends Eletrodomestico {
    constructor(voltagem) {
        super(false, voltagem)
        this.AM = 1;
        this.FM = 2;
        this.setBanda(this.AM);
        this.setSintonia(0)
        this.setVolume(0)

    }




    desligar() {
        super.setLigado(false)
        this.setSintonia(0)
        this.setVolume(0)

    }
    ligar() {
        super.setLigado(true);
        this.setSintonia(88.1);
        this.setVolume(25);

    }

    getBanda() {
        return banda;
    }


    setBanda(banda) {

        this.banda = banda;

    }


    getSintonia() {
        return sintonia;
    }
    setSintonia(sintonia) {
        this.sintonia = sintonia;
    }
    getVolume() {
        return volume;
    }
    setVolume(volume) {
        this.volume = volume;
    }





}

class TV extends Eletrodomestico {
    constructor(tamanho, voltagem) {
        super(false, voltagem);

        this.tamanho = tamanho;
        this.canal = 0;
        this.volume = 0;
    }

    desligar() {
        super.setLigado(false);
        this.setCanal(0);
        this.setVolume(0);
    }
    ligar() {
        super.setLigado(true);
        this.setCanal(3);
        this.setVolume(25);
    }

    getTamanho() {
        return tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getCanal() {
        return canal;
    }
    setCanal(canal) {
        this.canal = canal;
    }
    getVolume() {
        return volume;
    }
    setVolume(volume) {
        this.volume = volume;
    }


}


class Liquidificador extends Eletrodomestico {
    constructor(voltagem) {
        super(false, voltagem)
        this.velocidade = 0;

    }

    ligar() {
        super.setLigado(true)
        this.setVelocidade(1)
    }

    desligar() {
        super.setLigado(false)
        this.setVelocidade(0)
    }

    setVelocidade(vel) {
        this.velocidade = vel
    }

    subirVelocidade() {
        if (this.velocidade == 0) {
            this.ligar()
        }
        if (this.velocidade < 3) {
            this.velocidade++
        }
    }

    abaixarVelocidade() {
        if (this.velocidade > 0) {
            this.velocidade--
        } else {
            this.desligar()
        }


    }




}




function iniciar() {

    tv1 = new TV(52, 110)
    tv1.ligar();


    radio1 = new Radio(220)
    radio1.ligar();
    radio1.desligar();


    liquid = new Liquidificador(220)
    liquid.subirVelocidade()
    liquid.subirVelocidade()
    liquid.subirVelocidade()
    liquid.subirVelocidade()
    liquid.subirVelocidade()
    liquid.abaixarVelocidade()

    for (a in tv1) {
        document.getElementById("teve").innerHTML += `${a}: ${tv1[a]} <br>`
    }

    for (b in radio1) {
        document.getElementById("radio").innerHTML += `${b}: ${radio1[b]} <br>`
    }

    for (c in liquid) {
        document.getElementById("liquid").innerHTML += `${c}: ${liquid[c]} <br>`
    }
}