//Try & Cath = Try é para TENTAR fazer algo no código que você não está muito seguro de fazer pra evitar erros, então dentro de try a gente TENTA fazer o código. E o Cath é o que irá ser mostrado pro usuario se CASO houver algum erro...EX:

// try {
//     console.log(naoExisto) //Nesse caso, tentei dar um console em uma variável que não foi decladara, obviamente que ira gerar erro
// } catch (error) { //Se caso der o erro, ele irá mostrar essa linha de código abaixo...
//     console.log('naoExisto NÃO existe!');
//     console.log(error);
//     //Não é interessante EXIBIR esse erro pro usúario, ele deve ficar apenas aqui no BackEnd, até por motivos de segurança...
// }

//Também temos o Throw, no caso de condicionais...EX:

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') { //Se o número que foi digitado em x e y não for tipo NUMBER
        throw new ReferenceError('Usuário digitou string ao invés de number'); //Mostre erro, de uma maneira mais clara pro programador...
    }
    return x + y;
}

//Nesse caso, se temos um throw TEMOS que trata-lo para o USUÁRIO, para isso iremos usar o TRY em cima do erro...Como está abaixo!

try {
    console.log(soma(5, 2));
    console.log(soma('1', 2)); //Nesse caso irá mostrar o erro com a mensagem que eu coloquei ali!!
} catch (error) { //Porem com o catch a gente consegue tratar essa mensagem pro USUÁRIO, 
    console.log('Não utilize letras, use números!'); //Aqui é onde irá pro usuário, o erro!
}

//Também temos o FINALLY, que SEMPRE será executado, por exemplo, se caso tivessimos etapas para a abertura de um arquivo que precisaria ser sigida a risca 1: Abrir o arquivo 2:Manipular 3: Fechar, se alguma dessas etapas forem desrespeitadas, gerará erro!

try {
    console.log('Abri o arquivo');
    console.log('Manipulei e gerou erro', a); //Essa linha ja pularia pro catch, por conta do erro e não fecharia o arquivo
    console.log('Fechei o arquivo'); //Ele não executou essa linha de código, então o arquivo não sera fechado, ele precisa ser tratado primeiro
} catch (err) {
    console.log('Tratando o erro, aguarde!');
} finally {
    console.log('Eu sempre sou executado, mesmo com erro, ou sem erro');
}

//Temos o INSTANCEOF, muito importante pra identificar se um valor é uma instancia de alguma função, por exemplo DATE
//EX:

function mostraData(data) {
    //Para termos CERTEZA que o parâmetro que recebermos de fora, será do tipo Date, faríamos isso
    if (data && !(data instanceof Date)) { //Se a DATA for enviada, e NÃO for uma instância de DATE
        // console.log('Não é um tipo DATE'); NORMALMENTE lancariamos um 'erro' como console.log, mais nesse caso vamos usar o throw
        throw new TypeError('Esperando instancia tipo DATE');
    }

    if (!data) { //Se a DATA não for enviada, DATA será igual a new Date();
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', { //Criamos a data, tipo BRASIL 
        hour: '2-digit', //Colocar o zero a esquerda
        minute: '2-digit', //Colocar o zero a esquerda
        second: '2-digit', //Colocar o zero a esquerda
        hour12: false            //Colocamos um objeto pra citar ao NODE que não são 12 horas, e sim 24hrs
    });
}

//Aqui iremos tratar do erro, pro usuário
try {
    const hora = mostraData(11) //Aqui já coloquei um erro proposital para tratar-mos
    console.log(hora);
} catch (err) {
    console.log('Atenção, digite a data ex: dd-mm-yyyy 00:00:00');
} finally {
    console.log('Tenha um bom dia!');
}