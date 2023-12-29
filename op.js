import Prompt from 'prompt-sync';
let ler = Prompt();

// || se pelo menos uma é verdadeira

console.log('informe a média');
let media = Number(ler());


let invalida = media < 0 || media > 10;

console.log('A média é inválida ? ' + invalida);

// && = TODAS as comparações são verdadeiras

console.log('informe a média parte 2');
let media2 = Number(ler());


let valida = media2 >= 0 && media <= 10;

console.log('A média é válida ? ' + valida);