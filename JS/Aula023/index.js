//Date

//new = função construtora, pra tipo date, sempre será uma função construtura

//Podemos declarar o new date desta forma para pegar alguns dados da hora

//Tipo de declaração 1
const data1 = new Date(2003, 1, 11, 20, 20, 40, 500);
//                    ano  mês dia  hora  min  seg  mili

//Tipo de declaração 2
const data2 = new Date('2020-05-11 20:20:59');
//Tipo string


//Os mêses são INDEXADOS, então é muito importante saber disso, pois janeiro no caso não começaria em 1, seria o mês 0, e assim pros outros também
//Essa regra só é valida pro primeiro tipo ali acima, tipo string já é o próprio mês

//Tipos de exibição da data
console.log(data2.toString());
//Mostra por completo a data

console.log('Dia', data2.getDate());
// getDate() Mostra apenas o número do dia
console.log('Mês', data2.getMonth() + 1); //Mês começa do zero
// getMonth() Mostra apenas o numero do mês
console.log('Ano', data2.getFullYear());
// getFullYear() Mostra apenas o numero do ano
console.log('Hora', data2.getHours());
// getHours() Mostra apenas a hora
console.log('Minuto', data2.getMinutes());
// getMinutes() Mostra apenas os minutos
console.log('Segundo', data2.getSeconds());
// getSeconds() Mostra apenas os segundos
console.log('Milisegundo', data2.getMilliseconds());
// getMilliseconds() Mostra apenas os milisegundos
console.log('Dia Semana', data2.getDay());          //0-Domingo, 6-Sábado
// getDay() Mostra o numero do dia da semana

//Ou também podemos obter os milessimos de segundos de agora ex:
console.log(Date.now());
//O valor que aparecerá são deis do marco zero, 1970 até hoje





//Exercício: Crie uma função que formate a data, em formato Brasileiro, e crie outra função para acrescentar os zeros a esquerda

function formataData(dataAgora) {
    const dia = zeroEsquerda(dataAgora.getDate());
    const mes = zeroEsquerda(dataAgora.getMonth() + 1);
    const ano = zeroEsquerda(dataAgora.getFullYear());
    const hora = zeroEsquerda(dataAgora.getHours());
    const min = zeroEsquerda(dataAgora.getMinutes());
    const seg = zeroEsquerda(dataAgora.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

const dataAgora = new Date();
const dataBrasil = formataData(dataAgora);

console.log(dataBrasil);

