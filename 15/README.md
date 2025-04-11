# Desafio #15: Crie um validador de senha usando expressões regulares

Seu objetivo é criar um validador de senha, que verifica se a senha desejada pela pessoa é forte o suficiente.

Você deve usar uma expressão regular na sua solução.
Se a senha for forte o suficiente, retorne a string `"Sua senha é válida."`.  
Caso contrário, retorne a string `"Sua senha é inválida."`.

Os critérios que devem ser atendidos para que uma senha seja considerada forte são:

- Ter ao menos uma letra minúscula.
- Ter ao menos uma letra maiúscula.
- Ter ao menos um dígito.
- Ter ao menos um caractere especial.
- Ter no mínimo 8 caracteres de comprimento.

## Exemplo de Entrada e Saída

```console
// Entrada
"Senha123!"

// Saída
"Sua senha é válida."
```

```console
// Entrada
"fraca"

// Saída
"Sua senha é inválida."
```
