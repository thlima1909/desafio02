// // Funções - Desafio 2

// // 1- Criar uma função que exibe "Olá, mundo!" no console.

// function exibirOla() {
//     console.log('Olá, Mundo!');
// }
// exibirOla();

// // 2- Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function exibirNome(nome) {
//     console.log(`Olá, ${nome}!`);
// }
// exibirNome('Thiago');

// // 3- Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function exibirDobro(n) {
//     return n * 2;
// }
// let dobro = exibirDobro(5);
// console.log(dobro);

// // 4- Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function exibirMedia(n1, n2, n3) {
//     return (n1 + n2 + n3) / 3;
// }
// let media = exibirMedia(5, 7, 6);
// console.log(media);

// // 5- Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function exibirMaior(n1, n2) {
//         return n1 > n2 ? n1 : n2;
//     }
// let maior = exibirMaior(10, 3);
// console.log(maior);

// // 6- Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function exibirMultiplicacao(n) {
//     return n * n;
// }
// let multiplicacao = exibirMultiplicacao(4)
// console.log(multiplicacao);

// // Funções - Revisão Desafio 2

// 1- Criar uma função que exibe "Olá, mundo!" no console.

function exibirOla() {
    console.log('Olá, Mundo!');
}
exibirOla();

// 2- Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome(nome) {
    console.log(`Olá ${nome}!`);
}
exibirNome('Thiago');

// 3- Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function exibirDobro(n) {
    return n * 2;
}
let dobro = exibirDobro(2);
console.log(dobro);

// 4- Criar uma função que recebe três números como parâmetros e retorna a média deles.

function exibirMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
let resultado = exibirMedia(8, 5, 4);
console.log(resultado);

// 5- Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function exibirMaior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
let numeroMaior = exibirMaior(4, 8);
console.log(numeroMaior);

// 6- Criar uma função que recebe um número como parâmetro e 
// retorna o resultado da multiplicação desse número por ele mesmo

function exibirMult(n) {
    return n * n;
}
let numeroMultiplicado = exibirMult(2);
console.log(numeroMultiplicado);



