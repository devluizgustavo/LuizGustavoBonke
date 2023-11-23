//Criar uma array com objeto, contendo tag e texto, as tags são p, footer e section, elas tem que ser feitas em uma div dentro da container
//Fazer ciclo for para pegar os elementos
//Separar arrays

const container = document.querySelector('.container'); //Pega o container e aloca na variável
const div = document.createElement('div'); //Cria um elemento na pagina 'DIV'

const elementos = [ //Array com objetos, contendo tags, e nomes
    { tag: 'p', nome: 'Luiz' }, //Elemento 0
    { tag: 'p', nome: 'Letícia' }, //Elemento 1
    { tag: 'p', nome: 'Mário' }, //Elemento 2
    { tag: 'p', nome: 'Maria' } //Elemento 3
];

for (i = 0; i < elementos.length; i++) { //For com a condição de que...enquanto o i for menor que o tamanho de elementos, continue executando
    const { tag, nome } = elementos[i]; //Aqui a cada rodada que o for executar, ele vai registrar a tag e o nome de cada indice
    //Ou seja, fiz uma desestruturação

    const criaTag = document.createElement(tag); //Aqui aloquei uma variavel que cria o elemento de cada TAG
    const criaNome = document.createTextNode(nome); //E aqui aloquei outra variavel que cria o texto

    criaTag.appendChild(criaNome); //CriaNome será FILHO de CriaTAG, fazendo exatamente isso --> <p>Luiz</p>
    div.appendChild(criaTag); //E aqui a div que criamos no início será pai da TAG, ou seja ---> <div><p>Luiz</p><div>
}

container.appendChild(div); //E aqui a div será FILHA do Container geral da página...