let a = 7;
let b = 94;

// Forma 1 de Alterar Valores entre 2 Variáveis
// let temp = a;
// a = b;
// b = temp;

// Forma 2 de Alterar Valores entre 2 Variáveis
[a, b] = [b, a]

// depois da troca... a = 94 e b = 7
console.log(a)
console.log(b)