// Ao invés de usar IF/ELSE, podemos utilizar o switch. Segue o exemplo

const day = 'domingo'; // se mudar aqui, muda o case

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday': // Desta forma, podemos usar 2 cases com o mesmo conteúdo
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!'); // caso nenhuma case seja utilizada, entra o default
}

// usando if e else ao invés do switch como exercício

const dia = 'sunday';
if (dia === 'segunda'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if (dia === 'terca'){
    console.log('Prepare theory videos');
}else if (dia === 'quarta' || dia === 'quinta'){
    console.log('Write code examples');
}else if (dia === 'sexta'){
    console.log('Record Videos');
}else if (dia === 'sabado' || dia === 'domingo'){
    console.log('Enjoy the weekend :D');
}else {
    console.log('Not a valid day!');
}