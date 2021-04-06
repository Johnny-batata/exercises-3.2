// 7. Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. Dica: cada inicial termina com um ponto.
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// const batata = books.filter ((book) => {
//     return book.author.name.split(' ')
// }).map((book) => book.author.name.split(' '))

// console.log(batata)
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
    // escreva seu código aqui
    return books.find((book) => (
      book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
    )).name
  }
  console.log(authorWith3DotsOnName())

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

// function authorWith3DotsOnName() {
//     // escreva seu código aqui
//     return books.find((book) => (
//       book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
//     )).name
//   }
//   console.log(authorWith3DotsOnName())
// function authorWith3DotsOnName() {
//   // escreva seu código aqui
//   return books.filter((book) => {
//          book.author.name.split(' ')

//     }).map((book) => book.author.name.split(' '))
//        let count = 0 
//         if ( word.slice(-1) === '.') { count += 1 } 
//         if(count === 3) { return count }
//     })
//   ))
// }
// authorWith3DotsOnName()
  