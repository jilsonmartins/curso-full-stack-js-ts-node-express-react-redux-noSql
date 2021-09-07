// OBS: MAP ALTERAR OS VALORES E RETORNA UMA ARRAY DO TAMANHO ORIGINAL
/*
ENUNCIADO:
    - Retorne apenas string com nome pessoa,
    - Remove apenas a chave "nome" do objeto,
    - Adicione uma chave id em cada objeto 
*/

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

/*
const removeNomes = pessoas.map(function(obj) {
    delete obj.nome;
    return obj;
});
console.log(removeNomes);
 */

const addId = pessoas.map(function(obj, indice) {
    //não afeta o objeto original
    const newObj = { ...obj };
    newObj.id = (indice + 1);
    return newObj;
});
console.log(addId)

console.log(pessoas) // obj original