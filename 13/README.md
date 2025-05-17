# Desafio #13: Crie um componente de um aplicativo que exiba cinco conexões

Seu objetivo é criar um novo componente para Seu Espaço, um aplicativo de mídia social fictício que permite às pessoas encontrar e visualizar conexões.

Você deve usar a Fetch API para buscar dados da [API Random User](https://randomuser.me/api/) e exibir miniaturas de imagem dinamicamente representando as cinco principais conexões de uma pessoa usuária.

Use a seguinte URL para obter os dados:

```
https://randomuser.me/api/?results=5
```

A resposta será um JSON com cinco perfis de pessoas usuárias contendo, entre outras informações, as fotos (`picture.thumbnail`) e nomes (`name.first`, `name.last`).

## Exemplo de Entrada e Saída

```console
// Entrada (simulação da requisição feita via fetch)
fetch("https://randomuser.me/api/?results=5")
  .then(res => res.json())
  .then(data => {
    console.log(data.results);
  });

// Saída esperada (estrutura de dados simplificada para 2 dos 5 usuários)
[
  {
    name: { first: "Laura", last: "Silva" },
    picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg" }
  },
  {
    name: { first: "Carlos", last: "Almeida" },
    picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg" }
  },
  ...
]
```

Ao renderizar no DOM, espera-se uma lista com as imagens e nomes:

```html
<!-- Saída no HTML -->
<ul id="amigos">
  <li>
    <img
      src="https://randomuser.me/api/portraits/thumb/women/45.jpg"
      alt="Laura Silva"
    />
    <p>Laura Silva</p>
  </li>
  <li>
    <img
      src="https://randomuser.me/api/portraits/thumb/men/12.jpg"
      alt="Carlos Almeida"
    />
    <p>Carlos Almeida</p>
  </li>
  <!-- e assim por diante até 5 amigos -->
</ul>
```
