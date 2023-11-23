/* Crie variáveis com o valor de 'A', 'B' e 'C' e faça a seguinte coisa

   Troque o valor da 1 varA=A pelo valor da varB=B
   Troque o valor da 2 varB=B pelo valor da varC=C
   Troque o valor da 3 varC=C pelo valor da varA=A
   
   E imprima tudo na tela*/

//PRIMEIRA FORMA DE SOLUÇÃO

let varA = 'A'; 
let varB = 'B';
let varC = 'C';
const tempA = 'A';

varA = varB; // B
varB = varC; // C
varC = tempA; //A

console.log(varA, varB, varC);

let valorA = 'A';
let valorB = 'B';
let valorC = 'C';

[valorA, valorB, valorC] = [valorB, valorC, valorA];

console.log(valorA, valorB, valorC);


