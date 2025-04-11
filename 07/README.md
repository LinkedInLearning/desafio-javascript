# Desafio #7: Use desestruturação para retornar uma lista de alunos de uma sala de aula

Seu objetivo é usar desestruturação de array e de objeto para retornar uma lista de estudantes.

Crie uma função chamada `obterEstudantes`, que recebe um argumento chamado `salaDeAula`.

`salaDeAula` conterá um valor booleano chamado `temMonitoria` e `listaDeClasse`, que é um array com as pessoas da sala.

- O primeiro valor da `listaDeClasse` será o(a) ensinante.
- Se `temMonitoria` for `true`, o segundo valor será o(a) monitor(a) e os demais, os(as) estudantes.
- Se `temMonitoria` for `false`, os(as) estudantes começam no segundo item.

## Exemplo de Entrada e Saída

```console
// Entrada
obterEstudantes({
  temMonitoria: false,
  listaDeClasse: ["Marina", "Davi", "Fernanda", "Daniel", "Alina", "Laura"]
})

// Saída
["Davi", "Fernanda", "Daniel", "Alina", "Laura"]
```

```console
// Entrada
obterEstudantes({
  temMonitoria: true,
  listaDeClasse: ["Marina", "Davi", "Fernanda", "Daniel", "Alina", "Laura"]
})

// Saída
["Fernanda", "Daniel", "Alina", "Laura"]
```
