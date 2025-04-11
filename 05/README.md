# Desafio #5: Crie um Objeto com Propriedades Privadas

Seu objetivo é criar um objeto de usuário com três propriedades:

- `nomeDeUsuario` (privado)
- `senha` (privada)
- `idade` (pública)

Você deve usar símbolos (`Symbol`) do JavaScript para tornar os campos `nomeDeUsuario` e `senha` inacessíveis diretamente de fora do objeto, ou seja, propriedades privadas.

## Exemplo de Entrada e Saída

```console
// Entrada
console.log(usuario.nomeDeUsuario);
console.log(usuario.senha);
console.log(usuario.idade);

// Saída esperada
undefined
undefined
34
```
