const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido!', false);
        return;
    }

    const imc = getImc(peso, altura);

    console.log("Cheguei aqui")
});

function getNivelImc() {
      const nivel = ['Abaixo do peso', 'peso normal', 'Sobrepeso', 'Obsidade grau 1', 'Obsidade grau 2', 'Obsidade grau 3'];

      if (imc >= 39.9) {
          return nivel[]
      } else if ()
}

function getImc(peso, altura) {
     const imc = peso / altura ** 2;
     return imc.toFixed(2);
}

function criaParagrafo () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p =  criaParagrafo();
    p.innerHTML = msg;
    resultado.appendChild(p)
}