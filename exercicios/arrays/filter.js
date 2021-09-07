/** 
//OBS: Filter retorna um novo array atraves de uma função de callback(valor, indice, array).
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

// Arrow Function
const nuemrosFiltro = numeros.filter(valor => valor > 5);
console.log(nuemrosFiltro);
*/


/*
ENUNCIADO:
    - Pessoas com 5 ous mais letras no nome,
    - Pessoas acima de 50 anos,
    - Pessoas que o nome termine com a letra 'a' no nome
*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasNomeGrande);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDeCinquentaAnos);

const pessoasNomeFinaLetraA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeFinaLetraA);
