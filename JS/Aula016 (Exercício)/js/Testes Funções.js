const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
//Método para obter um elemento no html pelo JavaScript "getElementById"
//Salvamos o método, na variável numeroTitulo, 

numeroTitulo.innerHTML = numero;
//Declarar que, a variavel NumeroTitulo será o numero, que o valor é o que o usuário digitar!!
texto.innerHTML += `<p>Raiz Quadrada: ${numero ** 0.5}.<p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;