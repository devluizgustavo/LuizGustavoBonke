/**
  * Operadores Aritméticos
  * + Soma / Concatenação
  * - Subtração
  * * Multiplicação
  * ** Potenciação
  * % Resto de Divisão
  * 
  * ORDEM DOS OPERADORES
  * 1 ()
  * 2 ** Potenciação
  * 3 * Multiplicação
  * 4 / Divisão
  * 5 % Resto da Divisão
  * 6 + Soma 
  * 7 - Subtração
  * 
  * Inicio Exemplo 1: 
  * PODEMOS USAR O ++ Também (Para Contador tipo While em C)
  */

  const num1 = 2;
  const num2 = 10;
  let contador = 1;
  //PODEMOS USAR O ++ Também (Operador de Pós-Incremento While C) (TEM QUE SER DECLARADO COMO LET) Ex:
  contador ++; // 2
  contador ++; // 3
  contador ++; // 4

  let contador1 = 10;
  //POSSO UTILIZAR O -- Também (Operador de Pré-Decremento While C) (TEM QUE SER DECLARADO COMO LET) Ex:
  --contador1 ; // 9
  --contador1 ; // 8
  --contador1 ; // 7
  //Fim Exemplo 1.

  //Resultados Exemplo 1
  console.log('Resultado Ex: 1');
  console.log(contador);
  console.log(contador1);
  
  //Inicio Exemplo 2
  /*Contadores Podem ser executados direto no consolelog, tanto faz, na frente ou atrás da variável, o que muda é que
  ATRAS:
  Ele realiza a soma junto da variável e já mostra o valor


  Pos-Decremento ou Pos-Incremento:
  Ele só mostra o valor da variável, só irá mostrar a soma se casa tiver outro console log em baixo!

  Pre-Incremento ou Pre-Decremento
  Ele já mostrará o valor das somas, junto com a variável, sem a necessidade de fazer outro console log;
  */
  let exemploAT = 1;
  let exemploFT = 10;    
  //Fim Exemplo 2.

  //Resultados Exemplo 2
  console.log('Resultado Ex: 2');
  console.log(++exemploAT);
  console.log(exemploFT++); // Aqui não mudou o valor
  console.log(exemploFT); //Porém aqui já mudou.

  /*Exemplo 3:
    Podemos utilizar o contador pulando em passos, em vez de pular de um em um, a gente pode determinar o quanto pode pular!!

    Criamos uma variável contador e uma passo, contador pra declarar o valor que vai iniciar e os passos que ele vai pular
    CONTADOR DEVE SER LET passo CONST
    
  */
    const passo = 5; //O Passo vai ser o multiplicador
    let cont10 = 0; //O Valor que vai ser multiplicado vai ser o cont10
    //Fim exemplo 3.
    

    console.log('Resultado Exemplo 3');
    cont10 = cont10 + passo;
    console.log(cont10);
    cont10 = cont10 + passo;
    console.log(cont10);
    cont10 = cont10 + passo;
    console.log(cont10);
    
    //Podemos SIMPLIFICAR isso, utilizando o operador += São chamados de OPERADORES DE ATRIBUIÇÃO

    //Esse operador += é igual a contador = contador + 50  (PODEMOS USAR QUAISQUER OPERADORES ARITMETICOS '* + - / % **)

    //Ex do código:


    console.log('Continuação Resultado');
    let cont_a = 2;
    cont_a *= 2;
    cont_a *= 2;
    cont_a *= 2;
    cont_a *= 2;
    console.log(cont_a);

    //ParseInt - Transforma um número dentro de uma string em tipo númerico para trazer a conta
    //ParseFloat - Transforma um número com casas decimais dentro de uma string em um tripo numérico para efetuar a conta
    //Number - Mesma temática, só que ele é mais facil, é só declarar number, que ele se vira, se for inteiro, ou real;

    //Ex:
    const numero1 = 10;
    const numero2 = parseInt('5');
    const numero3 = parseFloat('5.2');
    const numero4 = number('5.4');

    //Declarando dessa maneira, agora posso trabalhar com essas variáveis mesmo sendo tipo string.




 