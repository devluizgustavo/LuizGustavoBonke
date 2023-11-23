//Math

let num1 = 9.54252;

let num2 = Math.floor(num1);
//Math.floor() arredonda o número para baixo!
console.log(num2);
//Resultado: 9

let num3 = Math.ceil(num1);
//Math.ceil() arredonda o número para cima!
console.log(num3);

let num4 = Math.round(num1);
//Math.round() arredonda para o número inteiro mais próximo, no caso se for 50 arredonda pra cima, se ficar menos que 49 arredonda pra baixo!
console.log(num4);

//

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));
//Math.max mostra no console o maior número.
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));
//Math.min mostra no console o menor número.
console.log(Math.random());
//Math.random gera números aleatórios. Varias casas decimais;

const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
//Nesse caso, ele ira gerar um número aleatório entre 10 e 5, com o codigo acima
//Também utilizei math.round. Para arredondar, como podemos ver, podemos colocar diversos um dentro do outro!!
console.log(aleatorio);

//Temos dois modos de pegar a raiz quadrada de algum número
let raiz = 25;
console.log(raiz ** 0.5);
//Desse modo, pegando a potenciação de 0.5 e mudando o valor da variável
console.log(raiz ** (1/2));
//Ou assim



