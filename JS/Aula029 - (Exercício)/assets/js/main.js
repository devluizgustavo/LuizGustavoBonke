//Node List = querySelectorAll (Faz como se fosse uma array com todos os elementos, e dá pra manipular com for, nesse caso usamos em p's)

//Exercício: Pegue todos os p's da div e troque o fundo e a cor

const paragrafos = document.querySelector('.paragrafos');
const pegaPs = document.querySelectorAll('p'); // Pegar todos os p da página
const estilos = getComputedStyle(document.body); // Pegar todos os estilos da pagina
const corBackground = estilos.backgroundColor // Escolher a cor do background


for (let p of pegaPs) {
    p.style.background = corBackground; //Setar a cor do background no background do p
    p.style.color = 'white' //Trocar cor da letra do parágrafo
}