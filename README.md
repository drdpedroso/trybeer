# Boas vindas ao repositório do projeto de Receitas!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## O que deverá ser desenvolvido

Você irá desenvolver um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

Nela será possivel ver, buscar, filtrar, favoritar e acompanhar o processo de preparação de receitas e drinks!

A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas.

O layout tem como foco dispositivos móveis, então todos os protótipos vão estar desenvolvidos em telas menores.

Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/XfGoCuEf4U9ZSipFnZs3u7/App-Receitas?node-id=0%3A1

Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI, só respeito os atributos `data-testid`, eles serão usados na correção do exercicio.

Você pode ler mais sobre atributos para testes [nesse link](https://www.eduardopedroso.com.br/?p=494) 

#### ⚠️ Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI, só respeite os atributos `data-testid`, eles serão usados na correção do exercício.

#### ⚠️ Para ver os comentários sobre cada componente, basta clicar no ícone de comentários no Figma (lado esquerdo superior).

![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)

---

## Desenvolvimento e testes

Este repositório já contem um _template_ com um App React criado, configurado e com os testes automatizados que fazem parte da correção. Após clonar o projeto e instalar as dependências, você precisará montar toda a configuração do Redux.

Para o projeto ser validado, todos os [testes E2E](https://www.guru99.com/end-to-end-testing.html) devem passar. É possível testar isso local rodando `npm run cy`. Esse comando roda a suite de testes do [Cypress](https://www.cypress.io/how-it-works/) que valida se o fluxo geral e os requisitos funcionais estão funcionando como deveriam.

Esses testes não consideram o layout de maneira geral, mas sim os atributos e informações corretas, então preste atenção nos atributos definidos no protótipo.

Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

#### Além dos testes automatizados, você também deve **escrever testes unitários que devem cobrir pelo menos 90% do projeto**. Na [documentação do Jest CLI](https://jestjs.io/docs/en/cli) é possível ver como essa cobertura é coletada.

## APIs

### TheMealDB API 

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)

O modelo de resposta para uma `meal` é o seguinte: 
```json
{
   "meals":[
      {
         "idMeal":"52882",
         "strMeal":"Three Fish Pie",
         "strDrinkAlternate":null,
         "strCategory":"Seafood",
         "strArea":"British",
         "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
         "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
         "strTags":"Fish,Seafood,Dairy,Pie",
         "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
         "strIngredient1":"Potatoes",
         "strIngredient2":"Butter",
         "strIngredient3":"Milk",
         "strIngredient4":"Gruy\u00e8re",
         "strIngredient5":"Butter",
         "strIngredient6":"Leek",
         "strIngredient7":"Plain Flour",
         "strIngredient8":"White Wine",
         "strIngredient9":"Milk",
         "strIngredient10":"Parsley",
         "strIngredient11":"Salmon",
         "strIngredient12":"Haddock",
         "strIngredient13":"Smoked Haddock",
         "strIngredient14":"Eggs",
         "strIngredient15":"",
         "strIngredient16":"",
         "strIngredient17":"",
         "strIngredient18":"",
         "strIngredient19":"",
         "strIngredient20":"",
         "strMeasure1":"1kg",
         "strMeasure2":"Knob",
         "strMeasure3":"Dash",
         "strMeasure4":"50g",
         "strMeasure5":"75g",
         "strMeasure6":"2 sliced",
         "strMeasure7":"75g",
         "strMeasure8":"150ml",
         "strMeasure9":"568ml",
         "strMeasure10":"2 tbs chopped",
         "strMeasure11":"250g",
         "strMeasure12":"250g",
         "strMeasure13":"250g",
         "strMeasure14":"6",
         "strMeasure15":"",
         "strMeasure16":"",
         "strMeasure17":"",
         "strMeasure18":"",
         "strMeasure19":"",
         "strMeasure20":"",
         "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
         "dateModified":null
      }
   ]
}
```

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

É possivel listar todas as `categorias`, `áreas` e `ingredientes`:

```
categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
areas: https://www.themealdb.com/api/json/v1/1/list.php?a=list
ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

As fotos dos ingredientes veem de um end-point padronizado com a seguinte lógica:

```
https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}.png
// exemplo com "lime
https://www.themealdb.com/images/ingredients/Lime.png
```

### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

As respostas seguem a mesma estrutura, com algumas particularidade relativas as bebidas (como ser ou não alcoolica, por exemplo)

```json
{
   "drinks":[
      {
         "idDrink":"17256",
         "strDrink":"Martinez 2",
         "strDrinkAlternate":null,
         "strDrinkES":null,
         "strDrinkDE":null,
         "strDrinkFR":null,
         "strDrinkZH-HANS":null,
         "strDrinkZH-HANT":null,
         "strTags":null,
         "strVideo":null,
         "strCategory":"Cocktail",
         "strIBA":null,
         "strAlcoholic":"Alcoholic",
         "strGlass":"Cocktail glass",
         "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
         "strInstructionsES":null,
         "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
         "strInstructionsFR":null,
         "strInstructionsZH-HANS":null,
         "strInstructionsZH-HANT":null,
         "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
         "strIngredient1":"Gin",
         "strIngredient2":"Sweet Vermouth",
         "strIngredient3":"Maraschino Liqueur",
         "strIngredient4":"Angostura Bitters",
         "strIngredient5":null,
         "strIngredient6":null,
         "strIngredient7":null,
         "strIngredient8":null,
         "strIngredient9":null,
         "strIngredient10":null,
         "strIngredient11":null,
         "strIngredient12":null,
         "strIngredient13":null,
         "strIngredient14":null,
         "strIngredient15":null,
         "strMeasure1":"1 1\/2 oz",
         "strMeasure2":"1 1\/2 oz",
         "strMeasure3":"1 tsp",
         "strMeasure4":"2 dashes",
         "strMeasure5":null,
         "strMeasure6":null,
         "strMeasure7":null,
         "strMeasure8":null,
         "strMeasure9":null,
         "strMeasure10":null,
         "strMeasure11":null,
         "strMeasure12":null,
         "strMeasure13":null,
         "strMeasure14":null,
         "strMeasure15":null,
         "strCreativeCommonsConfirmed":"No",
         "dateModified":"2017-12-19 18:34:15"
      }
   ]
}
``` 

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

---

## Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate**, e tiver a **cobertura de testes unitários mínima de 90%**.

Nesse projeto, a pessoa que estive utilizando o app pode procurar uma receita especifica, explorar receitas baseado em diferentes critérios, favoritar e fazer as receitas entre outras funcionalidades.

As telas sofrem variações dependendo do tipo da receita (se é comida ou bebida, no caso). 


### Header
- Todos os elementos devem respeitar os atributos descritos no protótipo;

   - Deve apresentar um ícone para a tela de perfil e um para a busca (caso exista no protótipo).
   
   - Ao clickar no botão de perfil, a rota deve mudar para a tela de perfil.
   
   - Ao clickar no botão de busca, a barra de busca deve aparecer.
   
### Barra de busca - Header

- A barra de busca deve aparecer quando a pessoa clickar no ícone de lupa no header. O mesmo serve para escondê-la.

- A busca deve ocorrer 600 milisegundos após a última iteração com o input. (Pesquise por `debounce`)

- A busca deve ocorrer na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas.

- Caso apenas uma receita seja encontrada, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL. Exemplo: `receitasbr.com/receita/{id-da-receita}`

- Caso mais de uma receita seja encontrada, mostrar as receitas em cards da mesma maneira que a tela principal de receitas.

- Caso nenhuma receita seja encontrada, uma mensagem deve ser exibida. 
   
### Menu inferior
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- Deve apresentar 3 ícones, um para comidas, um para bebidas e outro para exploração.

- Ao clickar no ícone de comidas, a pessoa deve ser redirecionada para uma lista de comidas.

- Ao clickar no ícone de bebidas, a pessoa deve ser redirecionada para uma lista de cocktails.

- Ao clickar no ícone de exploração, a rota deve mudar para a tela de exploração. 

- Este menu deve estar oculto dependendo da tela do protótipo.

### Tela de login:

   - Todos os elementos devem respeitar os atributos descritos no protótipo;

   - A pessoa deve conseguir escrever seu email no input de email;
   
   - A pessoa deve conseguir escrever sua senha no input de senha;
   
   - O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos.
   
   - Caso o formulário esteja inválido, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado.
   
   - Após a submissão, 2 tokens devem ser salvos em `localStorage` identificados pelas chaves `meals-token` e `cocktails-token` (o token de teste é sempre "1")
   
   - Após a submissão, o e-mail do usuário deve ser salvo em `localStorage` no formato `user: {email: email-do-usuário}`

### Tela principal de Receitas:

   - Todos os elementos devem respeitar os atributos descritos no protótipo;
   
   - Devem ser carregadas 12 receitas aleatórias, uma em cada card.
   
   - A pessoa deve conseguir filtrar por categoria utilizando botões. Cada um com o atributo prefixado: `data-testid=${categoryName}-category-filter`
   
   - Ao clickar no filtro de categoria, todas as receitas devem mudar para os dados filtrados da API. Um dos botões deve trazer todos os dados sem filtros. Esses campos virão da API que lista categorias `https://www.themealdb.com/api/json/v1/1/list.php?c=list`.
   
   - Mostrar apenas as 5 primeiras categorias retornadas da API.
   
   - No filtro de categorias deve existir a opção de filtrar por Todas as categorias.
   
   - As receitas que serão carregadas dependem de qual ícone a pessoa clickou: comidas acessa a API de comidas e bedidas acessa a API de bebidas.
   
   - Se a API utilizada for a de comidas, a URl deve ser `/comidas`, caso seja bebidas `/bebidas`;
   
   - O título da página mostrado vai depender também de qual ícone a pessoa clickou; (Comidas ou Bebidas)
   
   - Cada receita que voltar da API deve virar um card dentro de uma Grid.
   
   - O Card de receita deve conter uma foto (`strMealThumb` ou `strDrinkThumb`), o nome (`strMeal` ou `strDrink`) e a categoria da receita (`strCategory`).
   
   - Ao clickar no card, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL, além de dizer se a pessoa veio da tela de comidas ou de bebidas.
    Exemplo: `/receitas/comida/{id-da-receita}`
   
   - O Header e o menu inferior devem estar presentes.
   
### Tela de detalhes de uma receita:
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- Uma request para a API deve ser feita passando o `id` da receita que deve estar disponivel nos parametros da URL.

- Essa tela deve contar uma imagem da receita, o titulo, a categoria (ou se é ou não alcoolico), uma lista de ingredientes seguidos pelas quantidades
instruções, um video do youtube "embedado" e recomendações.

- As recomendações para receitas de comida deverão ser bebidas e vice versa. Dica: Explore os ingredientes.

- Deverão ser mostrados 6 cards de recomendação, onde apenas 2 são mostrados e o scroll é horizontal, similar a um `carousel`; 

- Um botão de "Iniciar Receita" deve ficar fixo na parte de baixo da tela o tempo todo.

- Caso a receita ja tenha sido feita, o botão deve sumir;

- Caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continuar receita";  

- Quando "Iniciar Receita" for clickado, a rota deve mudar para a tela de realização de receita.

- Um botão de compartilhar e um de favoritar a receita devem estar disponíveis.

- Ao clickar no botão de compartilhar, o link da receita deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer.

- Caso a receita ja esteja favoritada, o ícone do coração deve vir preenchido.

- Caso a receita não esteja favoritada, o ícone do coração deve vir despreenchido.
  
- Ao clickar no botão de favoritar, o ícone do coração deve mudar de seu estado atual, caso esteja preenchido deve mudar para despreenchido e vice versa.

- As receitas favoritas devem ser salvas em `localStorage` no formato: `favoriteRecipes: [{id, category, image}]`

### Tela de receita em processo

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- Essa tela deve contar uma imagem da receita, o titulo, a categoria (ou se é ou não alcoolico), uma lista de ingredientes seguidos pelas quantidades
instruções;

- A lista de ingredientes deve conter um checkbox para cada um dos items;

- Ao clickar no checkbox de um igrediente, o nome dele deve ser "riscado" da lista.

- O estado do progresso deve ser mantido caso a pessoa atualize a pagina ou volte para a mesma receita. 

- A mesma lógica de favoritar e compatilhar da `Tela de detalhes` se aplica aqui.

- O botão de finalizar receita só pode estar habilitado quando todos os ingredientes estiverem "checkados".

- Após clickar no botão "Finalizar receita", a rota deve mudar para a página de receitas realizadas.

### Tela de receitas feitas 

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A tela deve conter cards horizontais, um para cada receita feita;

- Caso a receita do card seja uma comida: a foto da receita, o nome, a categoria, a area, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar.

- Caso a receita do card seja uma bebida: a foto da receita, o nome, se é alcoolica, a data em que a pessoa fez a receita e um botão de compartilhar.

- O Botão de compartilhar deve copiar a URL da tela de detalhes daquela receita para o clipboard.

- Devem existir 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros.

- Ao clickar na foto ou no titulo, a rota deve mudar para a tela de detalhes daquela receita;

- A rota dessa página deve ser: `/receitas-feitas`

### Tela de receitas favorita 

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A tela deve conter cards horizontais, um para cada receita feita;

- Caso a receita do card seja uma comida: a foto da receita, o nome, a categoria, a area, um botão de compartilhar e um de desfavoritar;

- Caso a receita do card seja uma bebida: a foto da receita, o nome, se é alcoolica, um botão de compartilhar e um de desfavoritar;

- O botão de compartilhar deve copiar a URL da tela de detalhes daquela receita para o clipboard.

- O botão de desfavoritar deve remover a receita da lista.

- Devem existir 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros.

- Ao clickar na foto ou no titulo, a rota deve mudar para a tela de detalhes daquela receita;

- A rota dessa página deve ser: `/receitas-favoritas`

### Tela de explorar

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A tela deve ter dois botões: um para explorar comidas e o outro para explorar bebidas;

- Ao clickar em um dos botões, a rota deve mudar para a pagina de explorar comidas ou de explorar bebidas.

### Tela de explorar bebidas ou comidas

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- Caso na tela de explorar a pessoa tenha clickado em comidas, o titulo deve mostrar "Explora - Comidas". O mesmo para bebidas.

- A tela deve ter três botões: um para explorar por ingrediente, um para explorar por local de origem e um para pegar uma receita aleatória.

- Ao clickar em "Por ingredientes", a rota deve mudar para tela de explorar ingredientes;

- Ao clickar em "Por local de origem", a rota deve mudar para tela de explorar por local de origem;

- Ao clickar em "Me surpreenda", a rota deve mudar para os detalhes de uma receita aleátoria vinda da API;

- A rota deve ser `/explorar/comidas` ou `/explorar/bebidas`, dependendo de qual é a origem;

### Tela de explorar ingredientes
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A tela deve ter cards que contem: O nome do ingrediente e uma foto.

- Ao clickar no card do ingrediente, a rota deve mudar para tela principal de receitas, mas mostrando apenas as receitas que contem o ingrediente escolhido.

- As receitas mostradas devem representar o tipo escolhido antes na tela de explorar: se é comida ou bebida.

- A rota deve ser `/explorar/comidas/ingredientes` ou `/explorar/bebidas/ingredientes`

### Tela de explorar por local de origem/area

- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A tela segue as mesmas especificações da tela de receitas principal, a única diferença é que os filtros de categoria são substituidos por um dropdown;

- No dropdown devem estar disponiveis todas as áreas retornadas da API, incluindo a opção "Todas", que retorna as receitas sem nenhum filtro;

- A rota deve ser `/explorar/comidas/area` ou `/explorar/bebidas/area` 

### Tela de perfil
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- O e-mail do usuário deve estar visível.

- Essa tela deve conter 3 botões: um de receitas favoritas, um de receitas feitas e um para sair.

- Ao clickar no botão de "Receitas Favoritas", a rota deve mudar para a tela de receitas favoritas;

- Ao clickar no botão de "Receitas Feitas", a rota deve mudar para a tela de receitas feitas;

- Ao clickar no botão de "Sair", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login.


***Obs: A maneira como as APIs devem ser estruturadas segue os seguintes modelos: https://www.themealdb.com/api.php e https://www.thecocktaildb.com/api.php***

Além dos requisitos funcionais, a cobertura de testes deve atingir pelo menos **90%**.

---

### Implementações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que os teste de correção funcionem corretamente.

O uso de `localStorage` é necessário para que as informações não se percam caso a pessoal atualize a página. 
O correto é usar os valores para iniciar sua store ou seu context.

No `localStorage` do navegador:
* a chave `done-recipes` deve conter a seguinte estrutura:
```
[{
    ...dados-da-receita,
    doneDate: quando-a-receita-foi-concluida
}]
```

* a chave `favorite-recipes` deve conter a seguinte estrutura:
```
[{
    ...dados-da-receita, 
}]
```

* a chave `in-proggress` deve conter a seguinte estrutura:
```
[
    id-da-receita
]
```

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-01-week10-movie-card-library.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-01-week10-movie-card-library`

2. Instale as dependências, inicialize o projeto e rode os testes
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  * Verifique que os testes E2E estão executando:
    * `npm run cy` (os testes devem rodar e falhar)
    * `npm run cy:open` (os testes devem rodar e falhar, legal caso queira ver o Cypress funcionando)

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuário-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-movie-card-library`

5. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _components_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _components/Header.jsx_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

6. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-movie-cards-library`

7. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-01-week17-trivia-react-redux-1/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-01-week17-trivia-react-redux-1/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠


* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-01`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros alunos forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Os monitores também farão a revisão de todos os projetos, e irão avaliar tanto o seu _Pull Request_, quanto as revisões que você fizer nos _Pull Requests_ dos seus colegas!!!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

