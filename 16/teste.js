 function Lutador() {}
 var lutador = new Lutador();

 function KungFu() {}
 var bruce = new KungFu();
 var jet = new bruce.constructor()
     //  KungFu.prototype.socar = function() { return "queijo" }

 // note que bruce nao é mesmo q jet, mas são duas instância dinstintas
 console.log("verificando se esta afirmação é correta: " + (bruce !== jet))
     //  console.log(bruce.socar())


 // ___________ HERANÇA E A CADEIA DE PROTÓTIPOS
 // Existem várias formas de como obter uma herança como protótipos, 
 // mas sem dúvida, a melhor forma é este modo:

 function Boxeador() {
     this.ataque = function() {
         return "deu um jab"
     }
 }

 function Habilidade() {
     this.esquiva = function() {
         console.log("fushh fush ~esquivou~")
     }
 }

 //fazendo lutador herdar de habilidade
 Boxeador.prototype = new Habilidade()
 var mohamed = new Boxeador()