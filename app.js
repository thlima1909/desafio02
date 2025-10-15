// // Desafio 03 - Reiniciando o jogo

// // 1- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// // a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function exibirImc(altura, peso) {
//     result = peso / (altura * altura);
//     return result;
// }
// console.log(exibirImc(1.70, 80));

// // 3- Crie uma função que converte um valor em dólar, passado como parâmetro, 
// // e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// function converterValorEmDolar(valorEmDolar) {
//     let valorEmReais = valorEmDolar * 4.80;
//     return valorEmReais;
// }
// let valorEmDolar = 150;
// let valorEmReais = converterValorEmDolar(valorEmDolar);
// console.log(`O valor ${valorEmDolar} em dolar, convertido para reias é ${valorEmReais}`);

// // 4- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// // utilizando altura e largura que serão dadas como parâmetro.

// function exibirAreaPerimetro(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
//     console.log(`area ${area}`);
//     console.log(`perimetro ${perimetro}`);
// }
// console.log(exibirAreaPerimetro(10, 5));

// // 5- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// // utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function exibirAreaPerimetroCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
//     console.log(`area ${area}`);
//     console.log(`perimetro ${perimetro}`);
// }
// let raio = 4;
// console.log(exibirAreaPerimetroCircular(raio));

// // 6- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function exibirTabuada(n) {
//     let contador = 1;
//     while (contador <= 10){        
//         let resultado = n * contador;
//         console.log(`${n} X ${contador} = ${resultado}`);
//         contador++        
//     }
// }
// exibirTabuada(7);

// // Revisão - Desafio 03 - Reiniciando o jogo

// 1- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function exibirImc(altura, peso){
    resul = peso / (altura * altura);
    return resul.toFixed(2);
}
console.log(exibirImc(1.70, 80));

// 2- Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function exibirFatorial(n) {
       
    for (let i = 1; i <= n ; i++ ) {        
        fat = fat * i;
        console.log(i);         
    }    
    console.log(`Farotial de ${n} é ${fat}`);
}
let fat = 1;
let n = 3;
console.log(exibirFatorial(n));

// 3- Crie uma função que converte um valor em dólar, passado como parâmetro, 
// e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterValorEmDolar(valorEmDolar) {
    let cotacao = 4.80;
    let valorEmReais = valorEmDolar * cotacao;
    return valorEmReais;
}
let valorEmDolar = 20;
let valorEmReais = converterValorEmDolar(valorEmDolar);
console.log(`O valor ${valorEmDolar} em dolar, convertido para reais é ${valorEmReais}`);

// 4- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// utilizando altura e largura que serão dadas como parâmetro.

function exibirAreaPerimetroRetangular(altura, largura) {
    area = altura * largura;
    perimetro = 2 * (altura * largura);
    console.log(`area ${area} da sala retangular`);
    console.log(`perimetro ${perimetro} da sala retangular`);
}
let area = 10;
let perimetro = 5;
exibirAreaPerimetroRetangular(area, perimetro);

// 5- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function exibirAreaPerimetroCircular(raio) {
    area1 = Math.PI * raio * raio;
    perimetro2 = 2 * Math.PI * raio;
    console.log(`area ${area1.toFixed(2)} da sala circular`);
    console.log(`perimetro ${perimetro2.toFixed(2)} da sala circular`);
}
let area1 = 12;
let perimetro2 = 10;
exibirAreaPerimetroCircular(area1, perimetro2);

// 6- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function exibirTabuada(n) {
    for (let i = 1; i <= 10; i++) {
    let resul = n * i;
    console.log(`${n} X ${i} = ${resul}`);
    }
}
let num = 5;
exibirTabuada(num);


    

