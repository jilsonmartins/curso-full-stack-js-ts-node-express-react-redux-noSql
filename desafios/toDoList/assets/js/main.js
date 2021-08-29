const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoEntrada) {
    const li = criaLi();
    li.innerText = textoEntrada;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
    salvaTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(event) {
    const elemento = event.target;

    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvaTarefas();
    }
});

function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionarTarefasSalvas();