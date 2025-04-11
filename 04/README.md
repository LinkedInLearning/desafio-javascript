# Desafio #4: Use Herança para Criar uma Variação da Classe Livro

Seu objetivo é criar uma classe de livro técnico que herda da classe de livro do [desafio anterior](/01/livros_disponiveis.js).

Essa classe também receberá título, autoria, ISBN e número de cópias, mas terá um quinto argumento: a edição.

A classe de livro técnico também fornecerá uma função getEdição, que retorna a seguinte string: “A versão atual deste livro é <this.edicao>”. Você deve usar um template literal para essa frase.

## Exemplo de entrada e saída

```console
// Entrada
const desvendandoEntrevistas = new LivroTecnico(
  "Cracking The Coding Interview",
  "Gayle Laackmann McDowell",
  1209123,
  7,
  "2.3"
);

console.log(desvendandoEntrevistas.disponibilidade);
console.log(desvendandoEntrevistas.obterEdicao());

// Saída
Estoque baixo
A versão atual deste livro é 2.3
```
