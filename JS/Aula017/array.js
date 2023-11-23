//Arrays
//               0       1         2
const alunos = ['Luiz', 'Rebeca', 'Maria'];
//Arrays são criadas com esses conchetes, podemos acrescentar vários elementos dentro. 
//É bom separar cada array por assunto, pra não confundir

//Podemos manipular ela como desejarmos, pois por mais que sejam constantes, não iremos mudar o valor, e sim o que há dentro das arrays

//Arrays são indexadas, porém de um jeito diferente, cada elemento, é uma posição de index, que nem como está acima deles, Luiz é 0, Rebeca é 1, Maria é 2

console.log(`${alunos[0]}`);
//Nesse caso, só ira aparecer o aluno na casa 0, que é o Luiz

alunos[0] = 'Eduardo';
//Nesse caso, eu mudei o Luiz, por Eduardo, 
console.log(alunos);

alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Isabela';
alunos[alunos.length] = 'Caio';
//Nesse caso, eu adicionei esses nomes a Array, eles foram acrescentamos em ordem, lá pro final
console.log(alunos);

alunos.push('Fagner');
alunos.push('Cristian');
//Nesse caso, eu adicionei ao final da array
console.log(alunos);

alunos.unshift('José');
alunos.unshift('Vitor');
//Aqui adicionei ao começo da Array
console.log(alunos);

const removido = alunos.pop();
//Pop é estourar, ele deleta o ultimo conteúdo da array
console.log(alunos);
console.log(removido);
//Cristian foi excluido
//Se quiser salvar esse conteúdo que foi excluido, usamos variável pra isso
delete alunos [1];
//Posso deletar determinado conteúdo na array também, só especificar a coluna, porém ele fica empty, 
console.log(alunos);










