// Escreva seu código aqui


// Solução comentada
// function verificarSenha(senha) {
//   const umaLetraMinuscula = /(?=.+[a-z])/;
//   const umaLetraMaiuscula = /(?=.+[A-Z])/;
//   const umDigito = /(?=.+[0-9])/;
//   const umCaractereEspecial = /(?=.+[!@#$%^&*])/;
//   const minimoOitoCaracteres = /(?=.{8,})/;

//   const senhaValida = 
//   umaLetraMinuscula.test(senha) &&
//   umaLetraMaiuscula.test(senha) &&
//   umDigito.test(senha) &&
//   umCaractereEspecial.test(senha) &&
//   minimoOitoCaracteres.test(senha);

//   return senhaValida ? "Sua senha é válida" : "Sua senha é inválida";
// }

// console.log(verificarSenha("abc"));
// console.log(verificarSenha("(Ab!4567"));