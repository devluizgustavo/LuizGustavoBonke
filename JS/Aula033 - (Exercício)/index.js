// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o proprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

const fizzBuzz = (num) => {
    if (typeof num != 'number') return num;
    
    const divTres = num % 3 === 0;
    const divCinco = num % 5 === 0;

    if (divTres && divCinco) return 'FizzBuzz';
    if (divTres) return 'Fizz';
    if (divCinco) return 'Buzz';
    if (!divTres && !divCinco) return num;
}

for (i=0;i <= 100;i++) {
    console.log(`${i} = ${fizzBuzz(i)}`);
}
 