//Exercício: Identificar se o número é par ou impar
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputNum = form.querySelector('.numero');
    const num = Number(inputNum.value);

    criaResultado(num);
})

function criaResultado(num, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const elemento = criaP();

    if (isValid) {
        return resultado.classList.add('valido');
    } else {
        return resultado.classList.add('invalido');
    }

    elemento.innerHTML = identificaNum(num);
    resultado.appendChild(elemento);
}

function criaP() {
    return document.createElement('p');
}

function identificaNum(num) {

    if (num === 0) {
        return `O número não pode ser <strong>NULO</strong>`, false;
    }

    if (!num) {
        return `Digite apenas valores <strong>NÚMERICOS</strong> e <strong>INTEIROS</strong>`, false;
    }

    return num % 2 === 0 ? `O número ${num} é <strong>PAR</strong>` : `O número ${num} é <strong>ÍMPAR</strong>`;
}

