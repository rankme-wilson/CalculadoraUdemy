var carros = ["Uno", "fusca", "bmw", "ferrari"];

carros.forEach(function(value, index){    
    console.log(index, value
        );
});

let agora = new Date();

console.log(agora.toLocaleDateString("pt-BR"));

// Anotaações sobre estrutura de Classes e funções

window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("click");
});

/* Anotação sobre arrow function */
let ConcatenaNome = (Nome1, Nome2) => {
    return `${Nome1} ${Nome2}`;
}

let NomeCompleto = ConcatenaNome("Wilson", "Junior");

console.log(NomeCompleto);

console.log("Olá Mundo!");
//---------------------------------------------------------------------
//Retire o /* e */ e o código irá funcionar

//Usando console.log com var

var olaMundo = "Olá Mundo"

console.log(olaMundo);

//---------------------------------------------------------------------

//Usando == irá comparar o valor de duas expressões
// let a = 10;
// const b = "10";

// console.log(a === b);
/*
let a = 10;
const b = "10";

console.log(a == b);
*/
//---------------------------------------------------------------------

//Usando === irá comparar o valor e o tipo de dados
/*
let a = 10;
const b = "10";

console.log(a === b);
*/
//---------------------------------------------------------------------

//Usando !== irá comparar se os valores e tipos são diferentes
/*
let a = 10;
const b = "10";

console.log(a !== b);
*/
//---------------------------------------------------------------------

//Usando != irá comparar se os valores são diferentes
/*
let a = 10;
const b = "10";

console.log(a != b);
*/
//---------------------------------------------------------------------

//Usando && para analisar se duas condições são verdadeiras ao mesmo tempo
/*
let a = 10;
const b = "10";

console.log(a == b && typeof b == 'string');//irá dar true
console.log(a == b && typeof a == 'string');//irá dar false
*/
//---------------------------------------------------------------------

//Usando || mesmo se uma das condições estiver errada ele dará true, só dará false se as duas condições estiverem erradas
/*
let a = 10;
const b = "10";

console.log(a == b && typeof a == 'string');
*/
//---------------------------------------------------------------------

//if
/*
let cor = "verde";

if (cor === "verde") {

    console.log("siga");

} else if (cor === "amarelo") {

    console.log("atenção");

} else {

    console.log("pare");

}
*/
//---------------------------------------------------------------------

//for
/*
let n = 5;

for (let i = 0; i <= 10; i++) {

    console.log(`${i} X ${n} = ${i*n}`);
    //console.log(i + " X " + n + " = " + (i * n)); -> Jeito antigo

}
*/