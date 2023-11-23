//Switch

//Mesma coisa que o if em certa forma, porém em casos, em vez de situações...Seu uso é mais para variáveis fixas 
//Ex: Se queremos que mostre o dia da semana e o nome naquele determinado dia, ai é um caso de Switch, 

//Exemplo em função

function getAllDate(diaSemana1) {
    let diasemanaTexto;
    
    switch(diaSemana1) {
        case 0: 
        diasemanaTexto = 'Domingo';
        return diasemanaTexto; //Como estámos dentro da função, não precisará do break, apenas do return
    
        case 1:
        diasemanaTexto = 'Segunda';
        return diasemanaTexto;
    
        case 2:
        diasemanaTexto = 'Terça';
        return diasemanaTexto;
    
        case 3: 
        diasemanaTexto = 'Quarta';
        return diasemanaTexto;
    
        case 4:
        diasemanaTexto = 'Quinta';
        return diasemanaTexto;
    
        case 5:
        diasemanaTexto = 'Sexta';
        return diasemanaTexto;
    
        case 6:
        diasemanaTexto = 'Sábado';
        return diasemanaTexto;
    
        default:
        diasemanaTexto = '';
        return diasemanaTexto;
    }
}

const data1 = new Date('2005-02-24 01:20:00');
const diaSemana1 = data1.getDay();
const diaSemanaTexto1 = getAllDate(diaSemana1);

console.log(diaSemana1, diaSemanaTexto1);

//Exemplo normal

const data = new Date('2010-11-03 00:00:00');
const diaSemana = data.getDay();
let diasemanaTexto;

switch(diaSemana) {
    case 0: 
    diasemanaTexto = 'Domingo';
    break; //Breaks são obrigatórios, salvo ao menos dentro de uma função...Que ao invés de break, utilizamos return

    case 1:
    diasemanaTexto = 'Segunda';
    break;

    case 2:
    diasemanaTexto = 'Terça';
    break;

    case 3: 
    diasemanaTexto = 'Quarta';
    break;

    case 4:
    diasemanaTexto = 'Quinta';
    break;

    case 5:
    diasemanaTexto = 'Sexta';
    break;

    case 6:
    diasemanaTexto = 'Sábado';
    break;

    default:
    diasemanaTexto = '';
}

console.log(diaSemana, diasemanaTexto);