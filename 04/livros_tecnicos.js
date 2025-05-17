// Escreva seu código aqui

// Solução comentada
// Classe Livro
// class Livro {
//   constructor(titulo, autoria, ISBN, numeroDeCopias) {
//     this.titulo = titulo;
//     this.autoria = autoria;
//     this.ISBN = ISBN;
//     this.numeroDeCopias = numeroDeCopias;
//   }

//   // Getter
//   get disponibilidade() {
//     return this.obterDisponibilidade();
//   }

//   // Método
//   obterDisponibilidade() {
//     if (this.numeroDeCopias === 0) {
//       return "Fora de estoque";
//     } else if (this.numeroDeCopias < 10) {
//       return "Estoque baixo";
//     }
//     return "Em estoque";
//   }

//   venderLivros(quantidadeVendida = 1) {
//     this.numeroDeCopias -= quantidadeVendida;
//   }

//   reporCopias(quantidadeReposta = 5) {
//     this.numeroDeCopias += quantidadeReposta;
//   }
// }

// // Escreva seu código aqui
// class LivroTecnico extends Livro {
//   constructor(titulo, autoria, ISBN, numeroDeCopias, edicao) {
//     super(titulo, autoria, ISBN, numeroDeCopias);
//     this.edicao = edicao;
//   }

//   obterEdicao() {
//     return `A versão atual deste livro é ${this.edicao}`;
//   }
// }

// const desvendandoEntrevistas = new LivroTecnico(
//   "Cracking The Coding Interview",
//   "Gayle Laackmann McDowell",
//   1209123,
//   7,
//   "2.3"
// );

// console.log(desvendandoEntrevistas.disponibilidade);
// console.log(desvendandoEntrevistas.obterEdicao());
