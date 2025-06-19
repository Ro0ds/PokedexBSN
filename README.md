## PokedexBSN ⚡

### Descrição
Projeto para vaga Fullstack Jr da BSN.
Aplicação em Ionic que consome a PokéAPI e exibe alguns detalhes de Pokémons com tema escuro/claro e sistema de favoritos.

[Clique aqui para acessar.](https://pokedexbsn.vercel.app/tabs/tab1).
<hr />

### Funcionalidades
* Busca de Pokémon
* Visualizar detalhes
* Alternar entre tema claro/escuro
* Favoritar pokémons favoritos
* Cache em memória e localStorage

### Tecnologias usadas
* Ionic + Angular
* PokéAPI
* TypeScript

### Pré-requesitos
* Node, npm, Ionic CLI
* Editor de código fonte de sua escolha (ex: VSCode, Neovim, SublimeText)

### Como rodar
* Passo a passo:
``` bash
git clone https://github.com/Ro0ds/PokedexBSN.git
cd PokedexBSN
npm install
ionic serve
```

### Estrutura de pastas
```
├───app
│   ├───explore-container
│   ├───services
│   ├───tab1
│   ├───tab2
│   ├───tabs
│   └───Utilities
├───assets
│   └───icon
├───environments
└───theme
```

* app/services: contém os principais serviços utilizados na aplicação inteira (dadosService, favoritosService, pokeService).
  * dadosService: serviço utilizado no transporte das informações dos pokemons entre as páginas.
  * favoritosService: serviço exclusivo para lidar com a lógica de favoritos (adição, exclusão e visualização).
  * pokeService: serviço de busca de pokémons, consumindo a API e armazenando as informações de acordo com o que foi feito.
* app/tab1: tela principal da aplicação, contento a barra de pesquisa dos Pokemons, botão para mudar o tema entre claro/escuro e visualização do nome e foto do Pokémon escolhido.
* app/tab2: tela que mostra um card com as informações básicas do pokémon escolhido e os pokémons que foram favoritados pelo usuário.
* app/tabs: tela contendo o cabeçalho e o rodapé compartilhado entre as páginas.
* Utilities: funções/métodos úteis para serem utilizados na aplicação.
