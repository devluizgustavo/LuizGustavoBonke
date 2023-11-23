//Mostrar na tela o nome do dia da semana, o dia, o mês, o ano e a hora atual

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function nomeDiaTexto(recebeDia) {
//     let nomeDiaSemana;

//     switch (recebeDia) {
//         case 0:
//             nomeDiaSemana = 'Domingo';
//             return nomeDiaSemana
//         case 1:
//             nomeDiaSemana = 'Segunda-feira';
//             return nomeDiaSemana
//         case 2:
//             nomeDiaSemana = 'Terça-feira';
//             return nomeDiaSemana
//         case 3:
//             nomeDiaSemana = 'Quarta-feira';
//             return nomeDiaSemana
//         case 4:
//             nomeDiaSemana = 'Quinta-feira';
//             return nomeDiaSemana
//         case 5:
//             nomeDiaSemana = 'Sexta-feira';
//             return nomeDiaSemana
//         case 6:
//             nomeDiaSemana = 'Sábado';
//             return nomeDiaSemana
//     }
// }

// function nomeMesTexto(recebeMes) {
//     let nomeMes;

//     switch (recebeMes) {
//         case 0:
//             nomeMes = 'Janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'Fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'Março';
//             return nomeMes;
//         case 3:
//             nomeMes = 'Abril';
//             return nomeMes;
//         case 4:
//             nomeMes = 'Maio';
//             return nomeMes;
//         case 5:
//             nomeMes = 'Junho';
//             return nomeMes;
//         case 6:
//             nomeMes = 'Julho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'Agosto';
//             return nomeMes;
//         case 8:
//             nomeMes = 'Setembro';
//             return nomeMes;
//         case 9:
//             nomeMes = 'Outubro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'Novembro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'Dezembro';
//             return nomeMes;
//     }
// }

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function criaElemento() {
//     return document.createElement('elemento');
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = zeroEsquerda(data.getMonth() + 1);
//     const ano = data.getFullYear();
//     const dia = zeroEsquerda(data.getDate());

//     const nomeDia = nomeDiaTexto(diaSemana);
//     const nomeMes = nomeMesTexto(numeroMes);

//     return `${nomeDia}, ${dia} de ${nomeMes} de ${ano}`;
// }

// function criaHora() {
//     const data = new Date()
//     const hora = zeroEsquerda(data.getHours());
//     const min = zeroEsquerda(data.getMinutes());
//     const seg = zeroEsquerda(data.getSeconds());

//     return `<br>${hora}:${min}:${seg}`;
// }

// function mostraResultado(data) {
//     const h1 = document.querySelector('.container h1');
//     h1.innerHTML = '';

//     const elementoData = criaElemento()
//     const elementoHora = criaElemento()

//     elementoData.innerHTML = criaData(data);
//     h1.appendChild(elementoData);

//     elementoHora.innerHTML = criaHora(data);
//     h1.appendChild(elementoHora);
// }

// mostraResultado(data);

//Ou tem um jeito mais simples que utiliza apenas 3 linhas de código

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });





