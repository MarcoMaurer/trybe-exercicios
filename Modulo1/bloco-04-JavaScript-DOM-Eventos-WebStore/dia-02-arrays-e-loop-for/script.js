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

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValorDoArray = [0]


// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
//     for (let numeroMaior = numbers[index]; maiorValorDoArray < numbers.length; index +1) {
//         console.log(maiorValorDoArray)
//     }
//     }

// const n = 9 ;

// let resultado = 100;
// for (let index = 0; index <= n; index += 1) {
//   resultado -= index;
// };
// console.log(resultado);



// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// let sum = 0;
// for (let index = 1; index <= 50; index += 1) {
//     sum += index
// }
//  console.log(sum);


//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let resultado = 0;

// for (let index = 2; index <= 150; index += 1) {
//     if (index % 3 === 0) {
//         resultado++
//     }
// }
// console.log("Mensagem secreta " + resultado);

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//     fatorial *= index;
    
// }
// console.log(fatorial)

// let word = "Trybe"
// let reverseWord = ""

// for (let index = 0; index < word.length; index += 1) {
//     reverseWord += word[word.length - 1 - index];
    
// }
// console.log(reverseWord)

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = "";
// let menorPalavra = "";

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > menorPalavra[index].length) {
//         maiorPalavra += array[maiorPalavra ];
//     }
    
// }

// 

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

// 

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let name in names) {
//     console.log("Olá, " + names[name])
//   }


// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let index in car){
//     console.log(index, car[index])
//   }

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020,
//   };
  
//   for (let key in car) {
//     console.log(key + ': ' + car[key]);
//   }

// 

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };

//   console.log("Bem-vinda, " + info.personagem + ".")

// //   for (let key in info) {
// //     console.log(key)
// //         }

// for (let value in info) {
//         console.log(info[value])
//     }


// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)

//   leitor.livrosFavoritos.push(
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editor: 'Rocco',
//     }

//   )

// console.log(leitor)

// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.")


// function verificaPalindrome(word) {
// for(index in word) {
//     if(word[index] != word[(word.length - 1) - index]) {
//         return false;
//     }
// }
// return true;
// }

// function verificaPalindrome(string) {
//     let reverse = string.split("").reverse().join("");
//     return reverse;
// }

// console.log(verificaPalindrome("arara"))
// console.log(verificaPalindrome("desenvolvimento"));

// function inteiros () {
//  for(let index = 0; index <= index.length; index += 1)
//     index[0]    
    
// }

// arrayTeste = [2,3,2,5,8,2,3];
// novaArray = [];

// function numerosInteiros(arrayTeste) {
//     for(let index = 0; index <= index.length; index += 1) {
//         if(index[0] === index[length]);
//     numerosInteiros += novaArray; 
//     }
//    return numerosInteiros;
// }

// console.log(numerosInteiros)

// // Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function maiorPalavraDoArray(nomes) {
    let maiorNome = nomes[0]
    for (let indice in nomes) {
        }
    if (maiorNome.length < nomes[indice].length) {
            maiorNome = nomes[indice];
            
        }
        return maiorNome;
        }
    console.log (maiorPalavraDoArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))



