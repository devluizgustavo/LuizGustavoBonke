//Operador ternário     ? = If
                    //  : = Else
                   
                    //Sintaxe:  (condição) ? 'Valor para Verdadeiro' : 'Valor para Falso';

//Usado para encurtar o código em determinados momentos, substituindo o if, else
//ex

//Suponha que, precise criar uma categoria para determinados pontos que o usuário tiver
const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário NORMAL');
// }
//Os pontos irá determinar se ele é vip ou normal, nesse caso, ele é vip, mais lógicamente vem na cabeça fazer esse processo com if

//Porém com o operador ternário, a gente encurta isso, e faz exatamente a mesma coisa
//Ex

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario NORMAL';

console.log(nivelUsuario);

//Podemos utilizar também o operador ou para multiplas escolhas...
//Ex

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(nivelUsuario, corPadrao);

