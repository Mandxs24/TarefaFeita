// estudante e validação
let nome = "Ana"; //1
let idade = 40; //2
let estudante = true; //3

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

console.log({ nome, idade, estudante });

// funcionario

let funcionario = "Pedro"; //4
let cod = 10; //5
let ativo = false; //6

console.log({ funcionario, cod, ativo });


let funcao = "Padeiro"; //7
let anoEntrada = 2000; //8
let anoSaida = 2020; //9
let trabalhando = false; //10

console.log({ funcao, anoEntrada , anoSaida, trabalhando });

let nav = {
    nome: "<nav>",
    descricao: "Menu de navegação"
}
console.log(nav.descricao);

const frutas = [ 
    "banana", 
    "maça", 
    "maracuja", 
    "laranja", 
    "mamão",
    "pitaya",
    "tanjerina",
    "uva",
    "morango",
    "caju",
    "açai"

]

if(frutas.include("banana")) {
    console.log("existe a fruta");
}else{
    console.log("não existe a fruta")
}
console.log(frutas[1]);

const pessoas = [
    {
        nome: "Guilherme",
        idade: 20
    },

    {
        nome: "Clara",
        idade: 18
    },

    {
        nome: "Luisa",
        idade: 27
    }
]
