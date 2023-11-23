
//Média dos aluno com 3 notas
// const nome = 'Luiz';
// const nota1 = 8.12;
// const nota2 = 4.12;
// const nota3 = 6.02;
// let media;

// media = (nota1 + nota2 + nota3)/3;

// console.log(`A média do aluno ${nome} é ${media.toFixed(2)}`);

//Colocar na tela Nome, Sobrenome, Idade, Peso, Altura e IndiceMassaCorporal, Calcular o AnoNascimento

const nome = 'Luiz';
const sobrenome = 'Gustavo';
const idade = 20;
const peso = 81;
const altura = 1.83;
let calcImc;
let calcNasc;

calcImc = peso / (altura * altura);
calcNasc = 2023 - 20;

console.log(`O seu nome é ${nome} ${sobrenome}, você tem ${idade} anos`);
console.log(`Você pesa ${peso}kg, e sua altura é ${altura}`)
console.log(`O seu calculo de IMC é ${calcImc.toFixed(2)}, nasceu no ano de ${calcNasc}`);
