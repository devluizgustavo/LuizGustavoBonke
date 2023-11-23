//Mostrar na tela o nome do dia da semana, o dia, o mês, o ano e a hora atual


function diaCompleto() { //Aqui criei uma função para formatar o Dia/Mes/Ano do formato que o exercício está pedindo
    const data = new Date(); //Aloquei a data ATUAL a uma variável DATA
    const dia = data.getDate(); //Aloquei o dia ATUAL a uma variável DIA
    const mes = data.getMonth(); //Aloquei o mês ATUAL a uma variável MÊS
    const ano = data.getFullYear(); //Aloquei o ano ATUAL a uma variável ANO
    const diaSemana = data.getDay(); //Aloquei o dia da semana ATUAL a uma variável diaSemana
    let nomeDia; //Criei variáveis sem valor para alocar posteriomente outros valores
    let nomeMes; //Mesma coisa

    switch (diaSemana) { //Aqui no SWITCH criei 7 CASOS baseado nos 7 DIAS da semana, tendo em vista que DOMINGO é o primeiro dia da SEMANA
        case 0:
            nomeDia = 'Domingo'; //Caso for o primeiro dia escreva DOMINGO
            break;
        case 1:
            nomeDia = 'Segunda-Feira'; //Caso for o segundo dia escreva SEGUNDA
            break;
        case 2:
            nomeDia = 'Terça-Feira'; //Caso for o terceiro dia escreva TERÇA
            break;
        case 3:
            nomeDia = 'Quarta-Feira'; //Caso for o quarto dia escreva QUARTA
            break;
        case 4:
            nomeDia = 'Quinta-Feira'; //Caso for o quinto dia escreva QUINTA
            break;
        case 5:
            nomeDia = 'Sexta-Feira'; //Caso for o sexto dia escreva SEXTA
            break;
        case 6:
            nomeDia = 'Sábado'; //Caso for o sétimo dia escreva SÁBADO
            break;
    }

    switch (mes) { //Mesma coisa baseando-se no mês agora, TEMOS 12 meses, e caso for mes TAL mostre TAL coisa
        case 0:
            nomeMes = 'Janeiro';
            break;
        case 1:
            nomeMes = 'Fevereiro';
            break;
        case 2:
            nomeMes = 'Março';
            break;
        case 3:
            nomeMes = 'Abril';
            break;
        case 4:
            nomeMes = 'Maio';
            break;
        case 5:
            nomeMes = 'Junho';
            break;
        case 6:
            nomeMes = 'Julho';
            break;
        case 7:
            nomeMes = 'Agosto';
            break;
        case 8:
            nomeMes = 'Setembro';
            break;
        case 9:
            nomeMes = 'Outubro';
            break;
        case 10:
            nomeMes = 'Novembro';
            break;
        case 11:
            nomeMes = 'Dezembro';
            break;
    }
    //Depois dos switches estarem prontos, basta agora alocar tudo em uma variável só
    const horaFormatada = `${nomeDia}, ${dia} de ${nomeMes} de ${ano}`; //Criei horaFormatada e adicionei nesse padrão...
    return horaFormatada; //Por fim, a função irá retornar essa padronização
}

function horaCompleta() {
    const data = new Date();
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    const horaFormatada = `<br>${hora}:${min}:${seg}`;
    return horaFormatada;
}

function criaElemento() {
    return document.createElement('elemento');
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function mostraResultado() {
    const h1 = document.querySelector('#data');
    h1.innerHTML = '';

    const criaData = criaElemento();
    const criaHora = criaElemento();

    criaData.innerHTML = diaCompleto();
    h1.appendChild(criaData);

    criaHora.innerHTML = horaCompleta();
    h1.appendChild(criaHora);
}

mostraResultado();
