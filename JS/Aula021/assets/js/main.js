const form = document.querySelector('.form');

form.addEventListener('submit', recebeDados);

function recebeDados(dado) {
    dado.preventDefault();

    const inputPeso = dado.target.querySelector('.peso');
    const inputAltura = dado.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso && !altura) {
        mostraResultado('Valores invalidos', false);
        return;
    }
    if (!peso) {
        mostraResultado('Peso invalido', false);
        return;
    }
    if (!altura) {
        mostraResultado('Altura invalida', false);
        return;
    }
    const imc = calcIMC(peso, altura);
    const tipoNivel = nivelIMC(imc);

    const msg = `O seu IMC é ${imc}<br>${tipoNivel}`;

    mostraResultado(msg, true);
}

function criaP() {
    return document.createElement('p');
}

function mostraResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado-final');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('valido');
    } else {
        p.classList.add('invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function calcIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function nivelIMC(imc) {
    const nivel = ['Você está abaixo do peso', 'O seu peso está normal', 'Você está sobrepeso', 'Atenção...Grau de obesidade 1', 'Cuidado...Grau de obesidade 2', 'Perigo...Grau de obesidade 3'];

    if (imc > 40) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}