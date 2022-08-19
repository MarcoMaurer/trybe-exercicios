// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu.indexOf("Serviços")

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf("Portfólio");

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push("Contato");

// console.log(menu);


// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index])
// }


// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
//   console.log(arrOfNumbers);
// // Resultado: [10, 20, 30]
// }


// 11
// 21
// 31



// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let press of names){
//     console.log(press);
// }


// let counter = 0;

// while(counter !== 5) {
//   counter += 1;
// }

// Exercicios 4.2 - o array abaixo é para o exercicio 1 ao 7:/

// exercicio 01:/

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// console.log(numbers[5])
// console.log(numbers[6])
// console.log(numbers[7])
// console.log(numbers[8])
// console.log(numbers[9])

// Exercicio 02:/

// let resultado = 0

//   for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }
// console.log(resultado);


// Exercicio 03 e 04: /

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index] /= 10;   
//     }

// if ( resultado > 20) {
//         console.log ("Valor maior que 20");
// }
// else {
//     console.log ("Valor menor ou igual a 20");
// }

// exercicio 05:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValorDoArray = [0]


for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
    for (let numeroMaior = numbers[index]; maiorValorDoArray < numbers.length; index +1) {
        console.log(maiorValorDoArray)
    }
    }







