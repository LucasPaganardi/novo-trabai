function inserirNome(){
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario
}
inserirNome();

let Linguagens = ["Javascript", "Python", "C"];
const item = documento.querySelector("#lista");
item.textContent = Linguagens[2];
item.textContent = Linguagens[1];
item.textContent = Linguagens[0];

let aluno1 = {
    nome: "Lucas"
    idade: 16,
    anoLetivo: "2ºserie",
    materiasFav: ["Matematica", "Programação", "Minecraft"]
}

console.log(aluno1.nome); // "Lucas"
console.log(aluno1.idade); // 13
console.log(aluno1.materiasFav); // ["Matematica", "Programação", "Minecraft"]
console.log(aluno1.materiasFav[1]);

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
objeto.textContent = aluno1.idade;