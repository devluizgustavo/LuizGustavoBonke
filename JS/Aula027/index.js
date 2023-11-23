//For - Estrutura de Repetição

//Ex: Repete linhas de codigo, sem ter a necessidade de precisar ficar digitando todas
//  Variável ; Condição ; Incremento
for (let i = 0; i <= 10; i++) {
    console.log(`Frase ${i}`);
}

//Nesse caso eu pedi que se repetisse até o numero chegar a dez

//Podemos pular de 10 em 10, ou de quanto quisermos
for (let i = 50; i <= 100; i += 10) {
    console.log(`Numero ${i}`);
}

//Exercício: Faça uma tabuada do 5
for (i = 5, m = 1; i <= 50 && m <= 10; i += 5, m++) {
    console.log(`5 x ${m} = ${i}`);
}

//Podemos usar também o For In: Usado apenas para ler os indices que tem dentro de um array, ou as chaves que tem dentro de um
//Objeto OBS: NÃO É INCREMENTO, É LEITURA!!
//Com ARRAY
const frutas = ['Pera', 'Maça', 'Uva'];

for (let indice in frutas) {
    console.log(`Indice ${indice}: ${frutas[indice]}`);
}
//Resultado 0, 1, 2

//Agora com OBJETOS
const pessoa = {
    Nome: 'Luiz',             //Cada um desses atributos é uma chave, Nome = 1 Chave, Sobrenome = 1 Chave...Etc
    Sobrenome: 'Gustavo',
    Idade: 20
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`); //Para pegarmos o valor da chave, citamos o nome do objeto e [chave] dentro; 
}

//Agora vamos falar sobre FOR OF: Ele é especíico para strings, letras, LINGUAGENS LITERÁRIAS no qual tem índices
//            0123456789...
const nome = 'Luiz Gustavo';

//Exemplos passados (For Clássico)
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

//Exemplo FOR IN
for (let i in nome) {
    console.log(nome[i]);
}

//Nesse caso, a gente tem que fazer artemanhas para pegar o valor, pois ai nesses fors a gente pega os indices...Porém tem uma forma de pegar apenas o valor direto, utilizando FOR OF
for (let valor of nome) {
    console.log(valor);
}
//Nesse caso, ele fez a mesmíssica coisa, porem de uma forma mais simples, pegando apenas o valor direto, sem precisar saber a indice de cada um deles!

//FOR OF com ARRAY
const nomes = ['Luiz', 'Maria', 'Joana'];

for (let valores of nomes) {
    console.log(valores);
}

//OU PODEMOS UTILIZAR UMA FUNÇÃO PARA PEGAR TUDO QUE PRECISAMOS DE UMA VEZ SÓ, ELA É A forEach
//EX

nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
})

//Array = Pode utilizar qualquer um

//Objetos = Todos MENOS for of, pois ele não pega valores que não são iteravéis (Iterável é valores que podem ser percorridos)
//No caso de objetos não, apenas array pode ser percorrido, e for of só pega com valores iteráveis!!

//For Clássico = Geralmente com Iteráveis (array ou strings)
//For In = Retorna o Índice ou a Chave (strings, arrays ou objetos)
//For of = Retorna o valor em si (Iteráveis, arrays ou strings)