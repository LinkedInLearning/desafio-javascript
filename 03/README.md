# Desafio #3: Crie um cardápio vegetariano

Seu objetivo é planejar o cardápio de um jantar italiano, todavia algumas das pessoas que você convidou são vegetarianas, e você precisa criar uma lista não ordenada dos itens vegetarianos.

Cada item de menu é um objeto que contém o nome do prato e uma variável booleana indicando se o prato é vegetariano.

Você deve gerar os itens dinamicamente dessa lista no DOM a partir do array de itens vegetarianos.

## Exemplo de entrada e saída

```javascript
// Entrada (array de objetos)
const cardapio = [
  { nome: "Frango à parmegiana", vegetariano: false },
  { nome: "Conchiglione recheado", vegetariano: true },
  { nome: "Espaguete com almôndegas", vegetariano: false },
  { nome: "Tiramisù", vegetariano: true }
];
```

```html
<!-- Saída esperada no navegador (dentro da <ul id="cardapio">) -->
<ul id="cardapio">
  <li>Conchiglione recheado</li>
  <li>Tiramisù</li>
</ul>
```