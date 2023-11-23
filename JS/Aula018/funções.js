//Funções

//São funcionalidades, que seu papel é fazer uma coisa, pra se tornar automático, e não termos que fazer toda vez a mesma linha de codigo, 
//nesse caso abaixo, está uma função simples, que manda bom dia

function mensagem() {
    console.log('Bom dia');
}

mensagem();
//                 Parâmetro 
//                     V 
function mensagemnome(nome) {
    console.log(`Bom dia ${nome}`)
}
//Nesta função, ele recebeu como parâmetro, o nome, que foi declarado junto da função abaixo

mensagemnome('Luiz'); //Nome que vai ir para o parâmetro

function soma(valor1, valor2) {
    const resultado = valor1 + valor2;
    console.log(resultado);
}
//Nesse caso, criei uma função de soma, devolvendo o resultado da soma

soma(5, 4);
//Aqui coloquei os dois números que eu queria que fosse somado.

function soma2(vl1, vl2) {
    const resultado = vl1 + vl2;
    return resultado;
}
//Ou declaramos desta forma, nesse caso o Return, ele vai retornar apenas um valor, que é o resultado, e precisaremos armazenar ele em uma variável,
//fiz duas variaveis do mesmo nome, porém isso não tem importancia e não gera erro pq não tem nada a ver com a da dentro da função!!

const resultado = soma2 (2, 2);
console.log(resultado);

function raiz(n) {
    return n ** 0.5;
}
//Nesse caso acima, criei uma função que recebe como parâmetro apenas um valor, que seria o valor que quero saber a raiz e dei apenas o return no resultado, porém pra mostrar-mos, precisamos criar o console.log

console.log(raiz(25));
