// Some todos os números (reduce) - (acumulador, valor, indice, array)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

// reduce reduz um array em único elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);


const totalPar = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

const totalDobroValor = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

//console.log(totalDobroValor);


// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoaMaisVelha);