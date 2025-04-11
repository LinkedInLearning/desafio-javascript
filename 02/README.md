# Desafio #2: Crie um objeto chamado Filme 

Seu objetivo é criar objeto chamado Filme que receba cinco argumentos. 
Os cinco argumentos são: título, direção, gênero, anoDeLançamento e avaliação.

O protótipo de Filme deve ter uma função chamada obterResumo que retorna: `${this.título}, um filme de ${this.gênero} dirigido por ${this.direção}, foi lançado em ${this.anoDeLançamento}. Recebeu uma avaliação de ${this.avaliação}.`

Você pode usar a sintaxe de função ou de classe para criar esse protótipo. Depois de criar o objeto Filme, crie alguns filmes para testá-lo.


## Exemplo de entrada e saída

// Entrada
const HomemAranha = new Filme("Homem-Aranha", "Sam Raimi", "Ação", 2002, 87);
const Batman = new Filme("O Cavaleiro das Trevas", "Christopher Nolan", "Ação", 2008, 83);

console.log(HomemAranha.obterResumo());
console.log(Batman.obterResumo());

// Saída
Homem-Aranha, um filme de Ação dirigido por Sam Raimi, foi lançado em 2002. Recebeu uma avaliação de 87.
O Cavaleiro das Trevas, um filme de Ação dirigido por Christopher Nolan, foi lançado em 2008. Recebeu uma avaliação de 83.
