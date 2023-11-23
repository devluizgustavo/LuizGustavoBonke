//Fazer um formulário, com nome, sobrenome, peso e altura
//Fazer função que recebe os valores e registre em array
//Comando para não atualizar a página preventDefault();
//Comando para registrar os dados após o submit addEventListener('submit', nomeFunção)
const form = document.querySelector('.form');

function meuEscopo() {
    const resultado = document.querySelector('.resultado');
    const pessoa = [];
    
    form.addEventListener('submit', function (dado) {
        dado.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa.push = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };
        console.log(pessoa);
        resultado.innerHTML = `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`;
    })
}

meuEscopo();
