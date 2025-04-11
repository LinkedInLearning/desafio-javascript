# Desafio #1: Desenvolva um aplicativo de inventário para uma livraria

Seu objetivo é desenvolver um aplicativo de inventário para uma livraria. É necessário criar uma classe Livro, que forneça informações sobre cada livro na loja: título, autoria, ISBN e a quantidade de cópias disponíveis. 

Você também precisará de uma forma de obter a disponibilidade de cada livro. Se não houver nenhuma cópia restante, a função deve retornar “fora de estoque”. 

e houver menos de 10 cópias, a função deve retornar “estoque baixo”. Caso contrário, deve retornar “em estoque”. Além disso, será necessário criar uma função de venda, que receba a quantidade de cópias vendidas e subtraia esse valor do total de cópias. 

Se nenhum argumento for passado, podemos definir essa quantidade como 1 por padrão. Por fim, você precisará de uma função callback, que receba o número de cópias para repor e some esse valor ao total de cópias.

Se nenhum argumento for passado, podemos definir 5 por padrão. Você deve utilizar a palavra-chave class do JavaScript, assim como um getter para o método de disponibilidade

## Exemplo de entrada e saída

```console
>>> const jogosVorazes = new Livro("Jogos Vorazes", "Suzanne Collins", 123919, 5);
>>> console.log(jogosVorazes.disponibilidade);

#  Estoque baixo
```