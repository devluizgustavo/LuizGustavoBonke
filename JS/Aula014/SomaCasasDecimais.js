let num1 = 1; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2);
//ToString transforma o número em uma string no caso se for dentro de consolelog será apenas temporáriamente, só para aparecer na tela

let bin = 254;
console.log(bin.toString(2));
//Se setarmos o numero 2 na toString, veremos o número, em forma binária

console.log(typeof num1);
//Ele continua sendo number, mesmo sendo alterado para toString

num1 = toString();

//Porém nesse caso, aqui ele se torna uma string, pois foi declarado em uma linha de código
console.log(typeof num1);

//

let num3 = 15.24235235236
//Aqui criei um exemplo de um número com várias casas decimais
console.log(num3.toFixed(2));
//toFixed serve para quebrarmos as casas, determinarmos quantas no máximo vai ter, no caso, eu setei para ter apenas 2 casas;

//

let numbers = 10; 
let numberf = 12.22
//Nesse caso, criei uma variável inteira, e sei que ela é inteira, porém imagine se fosse apenas um dado, que não sabemos o que contem?
//Precisaríamos saber se é inteiro, ou não

console.log(Number.isInteger(numbers));
//Nesse caso ele retornou verdadeiro

console.log(Number.isInteger(numberf));
//Nesse caso, ele retornou false, por conta de ser um numero real, não inteiro

//

let temp = num1 * '5';
//Criei uma situação de numero somado com string, que retornará NAN - Not a Number

console.log(temp);
//NaN

console.log(Number.isNaN(temp));
//As vezes não iremos saber oq não é um número, por que não iremos saber da onde veio o dado, e  pra identificarmos, se é um número ou não, tera a isNan retornaldo true ou false

//

//Sobre imprecisão, no caso de números com muitas casas decimais, utilizaremos o Number para corrigirmos e o toFixed 

let numeroa = 0.7;
let numerob = 0.1;
//Nesse caso, criei duas variáveis com números bem imprecisos, apenas com casas decimais
numeroa += numerob;
//Se eu só fazer dessa maneira, ele não trará o que de fato eu quero, que é 0.8

console.log(numeroa);
//Ele trará 0.799999999999999 totalmente impreciso

numeroa += numerob; //0.9
numeroa += numerob; //1
numeroa += numerob; //1.1
numeroa += numerob; //1.2


numeroa = Number(numeroa.toFixed(2));
//Elaborando esse codigo, dessa maneira, a gente consegue resolver a situação, sem imprecisão!!!!

console.log(numeroa);



