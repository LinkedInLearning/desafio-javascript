// Escreva seu código aqui

// Solução comentada
// function numeroDePermutacoes(letras) {
//   let total;
//   for (let i = 1; i <= letras.length; i++) {
//     if (total === undefined) {
//       total = i;
//       continue;
//     }
//     total *= i;
//   }
//   return total;
// }

// function numeroDePermutacoes(letras) {
//   if (letras.length === 1) {
//     return 1;
//   }
//   return letras.length * numeroDePermutacoes(letras.slice(1));
// }

// console.log(numeroDePermutacoes("olá"));

