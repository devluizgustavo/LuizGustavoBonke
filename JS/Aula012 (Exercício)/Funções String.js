//Strings

//              01234567
let umaString = "Um Texto";

console.log(umaString[5]);
//Entre colchetes a gente pode pedir que ele mostre a coluna do caracter desejado, de 0 até o maximo que tiver!!
console.log(umaString.indexOf('Texto'));
//IndexOf informa qual o começo da posição da string 'Texto', que no caso do exemplo é 3. Caso não for encontrado, ele mostrará -1.
console.log(umaString.indexOf('o', 3))
//Nesse caso de indexof, eu quero identificar aonde está o caracter o, após a coluna 3. Ele identificou que é na coluna 7.
console.log(umaString.lastIndexOf('m', 3))
//LastIndexOf começa a busca do final da string, nesse caso, setei o ponto de ínicio na coluna 3 pra trás. Então ele vai me dar o resultado 1, 
//Que é onde está meu caractér 'm'

console.log(umaString.match(/[a-z]/g))
//Match é expressão regular, nesse caso que setei, vai me mostrar todos os caractéres MINÙSCULO de 'a' até 'z'!!
//EXPRESSÃO REGULAR É DECLARADA COM // SEMPRE
//A flag g no final, é pra ele puxar os caractéres, em um array, se caso for retirada, ele trará apenas o primeiro caracter que contém mínusculo
//EX
console.log(umaString.match(/[a-z]/));

//
console.log(umaString.search(/[a-z]/));
//search não irá fazer diferença se conter a flag g
//search busca a primeira posição que contém letras minúsculas, e entrega no console, nesse caso, de a-z.

//OBS: No caso do search, podemos pedir um caracter específico também, não só de a-z, e ele mostrará qual a sua coluna!!!!!!

console.log(umaString.replace('Um', 'Outra'));
//Replace declaramos o que queremos trocar, e depois colocamos o que queremos alterar, qual palavra queremos colocar de NOVO na string.

let outraString = "O Rato Roeu a Roupa do Rei de Roma.";
console.log(outraString.replace(/R/, '#'));
//Nesse stilo de replace, eu troquei apenas um caracter, que foi o R, porém ele trocou do primeiro R que encontrou na string, não de todos!!

//Se eu quiser que ele mude TODOS os R da string, eu acrescento a flag g
console.log(outraString.replace(/R/g, '#'));

//

console.log(outraString.length);
//Length é para sabermos qual é o tamanho da strings, quantos caracteres ela tem exatamente!

console.log(outraString.slice(2, 6));
//Slice é para fatiar a string, se caso eu quiser pegar determinada parte da string, nesse caso, peguei da coluna 2, até a 6!! Que veio o 'Rato'

console.log(outraString.slice(-5, -1));;
//Nesse caso de slice, eu tirei 5 caracteres do total, que no caso é 35, e pro final tirei 1. E me trouxe a ultima palavra, que é 'Roma'

//No caso desse exemplo a cima, ele faz a mesma coisa que uma SubString
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));
//Porém nesse método de substring é bem mais estenso e mais complexo do que o slice!

console.log(outraString.split(' '));
//Split é dividir, nesse caso, eu ordenei pra dividir cada palavra da string pelos espaços!

console.log(outraString.split('R'));
//Nesse exemplo de split, eu quero dividir tudo após o R, nesse caso ele tirará o R de tudo!!

console.log(outraString.split(' ', 2));
//Nesse outro exemplo de split, eu pedi pra ele dividir pelo espaço, porém no máximo duas vezes!

//
console.log(outraString.toUpperCase())
//toUpperCase é para deixar tudo tudo em caixa alta. Maiúsculo!!

console.log(outraString.toLowerCase());
//toLowerCaso é para deixar tudo em caixa baixa. Minúsculo!!

//

console.log(umaString.concat(' ', 'Legal!'));
//Concat é concatenar, acrescenta uma palavra nova no final da string, no caso, concatena!!

let nome = 'Luiz Gustavo';

console.log(nome.match(/[a-z]/g));
