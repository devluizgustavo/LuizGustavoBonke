//Objetos, é a mesma coisa que Struct em C, ele cria uma estrutura pra determinada variável!!

//Por exemplo, pra criar um cadastro de uma pessoa, será necessário armazenar os dados, e pra isso TEMOS que ter uma estrutura da pessoa x, ou y
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Gustavo',
    idade: 20
}; //No final deverá ter o ;, como se fosse em SQL, segue o mesmo padrão

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Clara',
    idade: 22
};

//Com essas estruturas de Objetos prontas, podemos manipula-la, podemos extrair apenas um dado, de cada, etc.

console.log(pessoa1.nome);
console.log(pessoa2.nome);

//Utilizaremos isso em função, que fica mais fácil, por exemplo...

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}//Esta função cria o comando por si só, e fará o cadastro, sem que precisemos criar várias variáveis de forma estruturada, que daria um código gigante

const pessoa3 = criaPessoa('Alfredo', 'Fernandes', 40);
//Dessa forma, a variável fica mais simples, sem estresse
console.log(pessoa3.nome);
//E a pessoa realmente é gerada!!

//

//Podemos criar comandos dentro da estrutura também, exemplo, se quisermos que uma das pessoas fale Oi!

//ex

const pessoa4 = {
    nome: 'Victor',
    sobrenome: 'Ruiz',
    idade: 35,

    //Nesse caso, criei uma função dentro da estrutura objeto, que diz oi, 
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está dizendo Oi! Ele tem ${this.idade} anos.`); //This é pra dizer ao JavaScript que estamos usando a variável dentro da estrutura, ou seja, eu quero o nome DESSA estrutura, e o sobrenome também, por isso usamos this!!

    }, // Podemos criar mais funções dentro, não só essa, por exemplo, vou criar mais uma que, a cada fala, a idade dele aumenta

    incrementaIdade() {
        this.idade++;
    }
};

pessoa4.fala(); //nesse caso, pessoa4 fala oi, somente ela conseguirá falar, pois a função está criada dentro dela
pessoa4.incrementaIdade(); //Nesse caso ele incrementa a idade, a cada vez declarado
pessoa4.fala();
pessoa4.incrementaIdade(); //Nesse caso ele incrementa a idade, a cada vez declarado
pessoa4.fala();



