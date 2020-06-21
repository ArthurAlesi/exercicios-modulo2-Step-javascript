function Pessoa(primeiro, sobreNome, idade) {
    this.nome = { primeiro, sobreNome }
    this.idade = idade
}

function Professor(nome, sobreNome, idade, materia, salario) {
    Pessoa.call(this, nome, sobreNome, idade)
    this.materia = materia
    this.salario = salario

}

function Diretor(nome, sobreNome, idade, materia, salario) {
    Professor.call(this, nome, sobreNome, idade, materia, salario)
    this.mandarNosProfessores = true;
}

function Aluno(nome, sobreNome, idade, serie) {
    Pessoa.call(this, nome, sobreNome, idade)
    this.serie = serie
}

professor = new Professor("José", "Silva", 52, "Portugues", 3000)
diretor = new Diretor("Marcos", "Sanchez", 60, "Matemática", 4000)
aluno = new Aluno("Tulio", "Ferreira", 10, 3)

function iniciar() {
    document.getElementById("diretor").innerHTML += Object.getOwnPropertyNames(diretor)
    document.getElementById("professor").innerHTML += Object.getOwnPropertyNames(professor)
    document.getElementById("aluno").innerHTML += Object.getOwnPropertyNames(aluno)

}