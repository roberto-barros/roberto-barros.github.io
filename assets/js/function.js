// Funcao nominal com parâmetro obrigatório

//undefined é um tipo de valor que não existe
//null é um tipo de valor - inválido

// uma função sem return é uma subrotina
// function escreve(nome, sobrenome) {
//     const a = sobrenome;
//     if(a === undefined) {
//         console.log("a é undefined");
//         console.log("Valor de a", a,'/n');
//         console.log("Valor de sobrenome", sobrenome, '/n');
//     }
//     console.log(`${nome} ${sobrenome}`);
// }

// escreve('Roberto');

// Função nominal que retorna valor
// function soma(a, b) {
//     return Number(a) + Number(b);
// }

// const resultado = soma(1, 2);

// console.log(resultado);
// console.log(soma(3, 5));

//expressão de função é atribuída a um contexto. Por exemplo uma variável
// const exibe = function(x) {
//     return `Exibindo parâmetro ${x}`;
// }

// console.log(exibe('-x-'));

//O JavaScript evolui a cada ano. Todo ano tem uma nova versão do Javascript.
// 2012-15
// Não tinha muita restrição da forma de escrever JavaScript
// "use strict"
// 2015 - Muitas mudanças e algumas melhorias... o const e o let foram adicionados nesta versão
// 2018 - Os navegadores passaram a implementar o use strict
// option explicit 

// this === window - true
// this === window - false
// use strict - this é undefined

//this - é uma variável interna para apontar atributos e métodos dentro de um objeto ou classe

// Classe - Pessoa - correr() -> Pessoa.correr()
// Classe - Pessoa - correr() parar() andar() sentar() levantar() velocidade

// objeto global
// let empresa = this; // window
// console.log('Quem é o this no contexto global', empresa);

// Quando criamos um objeto, criamos um escopo
// Quando usamos o this dentro de um objeto, o this é o próprio objeto
const aluno = {
    nome: "Roberto",
    matricula: 123,
    executar: function () {
        return this;
    },
};

console.log(aluno.executar());

// this dentro de uma função - também é um objeto global

function globalObj() {
    return this;
}

document.write("<h2>Escrevendo no Body</h2>");
document.write(globalObj());
// globalObj().alert("Não Corinthians!")


// Onde o JavaScript está sendo executado? Qual o contexto?
// Contexto: Navegador. This depende do contexto
// No navegador, o this é a window

// Mas se você estiver usando a versão estrita do JavaScript, o this não será a window

// function quemEOThis() {
//     console.log(this === window);
// }

// function quemEOThisEstrito() {
// Quando queremos usar o JavaScript na versão mais polida, o use strict deve ser informado no início do código
//     "use strict";
//     console.log("strict");
//     console.log(this === window);
// }

// quemEOThis();
// quemEOThisEstrito();

// function Exibe2() {
//     this.a = 50;
// }

// const novoObjeto = new Exibe2();
// console.log(novoObjeto.a);

// arrow function - função de seta. Ela é mais curta, não tem o próprio contexto.
const novaFuncao = (a, b) => {
    console.log("Chamando de dentro de uma arrow function");
    // Interpolação de variáveis. É chamar uma variável dentro de uma string; Template String
    console.log(`Exibindo o valor de ${a}`);
    // Concatenação de variáveis
    console.log("Exibindo o total de caracteres " + b.length);
    // Indentação é um código estrito de forma legível, que respeita hierarquia { dá um espaço, para facilitar a leitura do código. Um código indentado é uma das maneiras de manter um código limpo }
}

const funcao3 = (a) =>
    console.log(`Exibindo o total de caracteres de ${a.length}`);

funcao3("Roberto Barros");

// novo Javascript ES2017

//Spread operator ...

const carros = (primeiro, segundo, ...restante) => {
    console.log(`Os carros informados foram: ${primeiro}, ${segundo}. Todos os demais são ${restante.join(', ')}`);
}

carros('DelRey', 'Brasília', 'Belina', 'Fusca', 'Variant', "Parati", 'Monza', 'Scort', 'fiat 147', 'D-20', 'Kombi', 'BMW', 'Gurgel', 'Maverik', 'Marea');

const frutas = ['Guaraná', 'Cupuaçu', 'Açaí'];
const todasFrutas = [...frutas, 'banana', 'abacaxi'];

console.log(`Todas as Frutas ${todasFrutas}`);

//destructuring assignment - Atribuição por desestruturação

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log('exibindo o primeiro: ', primeiro);
console.log('exibindo o resto: ', resto);

const meuArray = [10,20,30,40];
console.log(meuArray, meuArray.join(', '));
const [p, ...q] = meuArray.reverse();
console.log('Exibindo o quarto elemento', p, q.reverse());

