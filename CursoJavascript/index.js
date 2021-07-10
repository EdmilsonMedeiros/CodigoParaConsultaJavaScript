console.log("Hello world");
//console.log("Hello world"); comentário.
console.log("Hello world");

//-------variável/operadores

var olaMundo = "Olá mundo!";
console.log(olaMundo);

let a = 10;//let considera o contexto no qual a variável foi criada.
const b = 5;
console.log(a == b);
// == ignora o tipo de dado:

let c = 10;
const d = "10";
console.log(c == d);
// para comparar e considerar inclusive o tipo, deve-se usar === :

let e = 10;
const f = "10";
console.log(e === f);
//operadores lógicos:

let g = 10;
const h = "10";
console.log(g == h && typeof h == 'string' );//Operador AND => retorna true pq as duas condições são verdadeiras

//operador OU, necessário 1 condição verdadeira:

let i = 10;
const j = "10";
console.log(i === j || typeof j == 'string');

//Estrtura de decisão if:
let cor = "amarelo";
if (cor === "verde") {
	console.log ("Siga");
}else if(cor === "amarelo"){
	console.log("Atenção!");
}else{
	console.log("Pare!");
}

//Estrtura de decisão switch
let cor = "azul";

switch (cor){
    case "verde": console.log("Siga!");
    break;
    case "amarelo": console.log("Atenção!");
    break;
    case "vermelho": console.log("Pare!");
    break;
    default: console.log("Não sei!");
}

//laço de repetição for:
let n = 5;
for (let i=0; i<10; i++){
    console.log(`${n} X ${i} = ${n*i}`);
    //console.log(n + " X " + i + " = " + n*i);
}

//funções:
//função
function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);

}
let resultado = calc(1,2,"+");
console.log(resultado);

//função de calculo anomima
(function (x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);

})(1,2,"*");

//Arrow function:
let calc2 = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);

}
let resultado2 = calc2(5,3,"*");
console.log(resultado2);

//eventos:
window. addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log("Click")
});

document.addEventListener('click', event => {
    //abre uma nova janela
    window.open("http://google.com.br");
});

//date: data
let agora = new Date();
console.log (agora.getDate(), agora.getMonth() + 1, agora.getFullYear());

console.log(agora.toLocaleDateString("pt-br"));

//Array:
let carros = ["palio 98", "toro", "uno"];
console.log(carros[2]);
console.log(carros.length);

//foreach => laço para percorrer o array:
carros.forEach(function(value, index){
    console.log(value, index);
});

//Orientação a objetos:

let celular = function(){
    this.cor = "prata";

    this.ligar = function(){
        console.log("uma ligação!");
        return "ligando";
    }

}
let objeto = new celular();
console.log(objeto.cor);
console.log(objeto.ligar());

//Orientação a objetos novo EcmaScript:
class celular{
    constructor(){
        this.cor = "prata";

    }

    ligar(){
        console.log("uma ligação!");
        return "ligando";
    }

}
let objeto = new celular();
console.log(objeto.cor);
console.log(objeto.ligar());