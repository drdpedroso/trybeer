# Boas vindas ao repositório do projeto TryBeer!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## O que deverá ser desenvolvido

Esse será o projeto mais desafiador até agora! Você será responsavél por criar uma aplicação de ponta-a-ponta!

Isso significa que tanto a API, o banco de dados e o front-end serão escritos por você 😁

O projeto em si é super divertido! Vamos criar uma plataforma de delivery de cerveja 🍻

Para facilitar, dá para dividirmos a aplicação em 3 partes:

- API (vamos fazer apenas uma)
- Front-End Cliente (onde nosso cliente vai comprar a cerveja)
- Front-End Admin (onde o estabelecimento controla os pedido feitos)

Você pode acessar um protótipo do Front-End no link abaixo:

https://www.figma.com/file/gzvsPYRwHUmRnvmVn9h6b5/TryBeer?node-id=0%3A1

Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI, só respeite os atributos `data-testid`, eles serão usados na correção do exercicio.

Você pode ler mais sobre atributos para testes [nesse link](https://www.eduardopedroso.com.br/?p=494) 

#### ⚠️ Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI, só respeite os atributos `data-testid`, eles serão usados na correção do exercício.

#### ⚠️ Para ver os comentários sobre cada componente, basta clicar no ícone de comentários no Figma (lado esquerdo superior).

![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)

---

## Desenvolvimento e testes

Este repositório já contem um _template_ com um App React criado, configurado e com os testes automatizados que fazem parte da correção. Após clonar o projeto e instalar as dependências, sinta-se livre para escolher usar Redux ou não, saiba avaliar as vantagens/desvantagens.

Para o projeto ser validado, todos os [testes E2E](https://www.guru99.com/end-to-end-testing.html) devem passar. É possível testar isso local rodando `npm run cy`. Esse comando roda a suite de testes do [Cypress](https://www.cypress.io/how-it-works/) que valida se o fluxo geral e os requisitos funcionais estão funcionando como deveriam.

Esses testes não consideram o layout de maneira geral, mas sim os atributos e informações corretas, então preste atenção nos atributos definidos no protótipo.

Os testes te darão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

#### Além dos testes automatizados, você também deve **escrever testes unitários que devem cobrir pelo menos 90% do projeto**. Na [documentação do Jest CLI](https://jestjs.io/docs/en/cli) é possível ver como essa cobertura é coletada.

## Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate**, e tiver a **cobertura de testes unitários mínima de 90%**
⚠️ Os endpoints, a arquitetura do banco e a estrutura geral do projeto estão nas mãos da pessoa que está desenvolvendo o projeto. O importante é que todos os requisitos sejam atendidos.  
 
O intuito com esse app é que uma pessoa possa pedir uma cerveja no aplicativo e outra pessoa possa aceitar esse pedido no admin.  


### Tela de login:

   - Todos os elementos devem respeitar os atributos descritos no protótipo;

   - A pessoa deve conseguir escrever seu email no input de email;
   
   - A pessoa deve conseguir escrever sua senha no input de senha;
   
   - O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos.
   
   - Caso o formulário esteja inválido, o botão de submeter deve estar desativado. Caso contrário, deve estar ativado.
   
   - Após a submissão, um token que identifica o usuário deve ser salvo no navegador. Esse token vai ser utilizado para as requisições da API.
   
   - Se o usuário for do tipo `administrador`, a próxima rota deve ser a de **Pedidos**.
    
   - Se o usuário for do tipo `cliente`, a próxima rota deve ser a de **Produtos**.
   
   - Um botão de se registrar deve existir. Ao ser clickado, levar para a rota `/registrar`. 
   
### Tela de registro
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A tela deve mostrar um formulário com os seguintes campos:

- `nome` - deve conter no minimo 12 letras, sem números ou caracteres especiais.

- `email` - deve conter um email válido.
 
- `senha` - composta por 6 números.

- `quero vender` - sendo um checkbox opcional.

- Caso a opção `quero vender` esteja "checkada", o usuário deve ter um papel de ADMIN. Caso contrário, será um CLIENT.

- O botão de submeter o formulário deve está desabilitado caso algum dos campos seja inválido. 

- Caso a opção `quero vender` esteja "checkada", ao clickar no botão `Cadastrar`, a rota deve mudar para `/admin/pedidos`.
 Caso contrario, mudar a rota para `produtos`


## Admin

### Menu Lateral 
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- Deve conter 3 items: `Pedidos`, `Perfil` e `Sair`

- Ao clickar no item `Pedidos`, a rota deve mudar para `/admin/pedidos` e mostrar a tela de Pedidos.

- Ao clickar no item `Perfil`, a rota deve mudar para `/admin/perfil` e mostrar a tela de Perfil.
 
- Ao clickar no item `Sair`, a rota deve mudar para `/login` e a pessoa deve ser deslogada. 

### Tela de pedidos:
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota deve ser `/admin/pedidos`.

- Essa tela deve mostrar todos os pedidos com status **Pendente**.

- Os "cards" dos pedidos devem conter as informações: ``número do pedido, endereço para entrega e valor total``.

- Ao clickar no card do pedido, levar para a rota ``/admin/pedido/:id``, onde o id é o id do pedido que o card faz referencia.

### Tela de detalhes de pedido:
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota deve ser `/admin/pedido/:id`.

- No cabeçalho, mostrar o ``número do pedido`` e o `status` atual.

- Mostrar uma listagem com os produtos do pedido, onde cada linha deve conter `quantidade, o nome do produto e qual o preço total do produto`.

- A listagem deve sempre mostrar o pedido mais antigo com status pendente primeiro.

- O `preço total do produto` é calculado usando `quantidade * preço unitário`.

- Mostrar também o `valor total do pedido`, calculado com a `soma de todos os preços totais dos produtos`.

- Caso o status do pedido seja Pendente: um botão para marcar o pedido como entregue deve ser exibido. Caso contrário, não exibir.

- Ao clickar no botão "Marcar pedido como entregue", o status desse pedido deve mudar para `Entregue` e as informações devem ser atualizadas na tela. 

### Tela de perfil:
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota deve ser `/admin/perfil`.

- Mostrar o `e-mail` e o `nome` do usuário. Não permitir edição.


## Cliente

### Menu superior
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- Mostrar o titulo correspondente a tela (vide protótipo).

- Mostrar "hamburguer" que, quando clickado, deve mostrar o menu lateral (caso esteja oculto) e esconder (caso esteja aberto).

### Menu lateral
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- Deve conter 3 items: `Produtos`, `Meus pedidos`, `Meu Perfil` e `Sair`

- Ao clickar no item `Produtos`, a rota deve mudar para `/produtos` e mostrar a tela de Produtos.

- Ao clickar no item `Meus pedidos`, a rota deve mudar para `/meus-pedidos` e mostrar a tela de Meus Pedidos.

- Ao clickar no item `Meu perfil`, a rota deve mudar para `/meu-perfil` e mostrar a tela de Meu Perfil.
 
- Ao clickar no item `Sair`, a rota deve mudar para `/login` e a pessoa deve ser deslogada.

### Tela de Produtos
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota deve ser `/products`.

- Caso a pessoa atualize o browser, o carrinho deve ser mantido.

- Caso a pessoa volte em menos de 12h (contando da ultima alteração nos items do checkout), o carrinho deve ser mantido.

- Nessa tela, os produtos devem ser organizados em cards.

- Os cards devem conter `foto, nome do produto, o preço unitário, quantidade atual, um botão de adicionar e de remover`.

- O preço unitário deve seguir o padrão da moeda: ``R$ 00,00``.

- Ao clickar no botão `+`, a quantidade do produto deve aumentar em 1.

- Ao clickar no botão `-`, a quantidade do produto deve diminuir em 1, limitado a 0.

- Quando a quantidade for 0, o produto deve ser removido do carrinho.

- Mostrar um botão de ``Ver carrinho`` com o `valor total` no texto.

- Quando a quantidade mudar, o valor total no botão deve mudar.

- Ao clickar no botão ``Ver carrinho``, mudar a rota para `/checkout`.

### Tela de Meus pedidos
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota deve ser `/meus-pedidos`.

- Essa tela deve contar uma lista de cards contendo informações do pedido: ``número do pedido, data e o valor total`` (apenas dia e mês para data).

- A listagem deve sempre mostrar o pedido mais novo primeiro. 

- Ao clickar no card, a rota deve mudar para os detalhes do pedido clickado: ``/pedido/:numero-do-pedido``, sendo `numero-do-pedido` o número daquele pedido.

### Tela de Detalhes do pedido
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota deve ser ``/pedido/:numero-do-pedido``.

- Mostrar o `número do pedido e a data de realização` (apenas dia e mês).

- Mostrar uma lista com ``quantidade do produto -- nome do produto -- valor total do produto``. Sendo o valor total calculado por `quantidade * preço unitário`.

- Abaixo da lista, mostrar o `valor total do pedido`, sendo calculado pela `soma de todos os valores totais por produto`.

### Tela de perfil:
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota deve ser `/perfil`.

- Mostrar campos de texto com `e-mail` e o `nome` do usuário. Permitir edição apenas do `nome`.

- Disponibilizar um botão `Salvar`, que quando clickado deve alterar o nome do usuário (caso ele tenha editado).

- Caso nenhuma edição ocorra, o botão deve ficar desabilitado.

### Tela de Checkout 
- Todos os elementos devem respeitar os atributos descritos no protótipo;

- A rota deve ser ``/checkout``.

- Caso a pessoa atualize o browser, o carrinho deve ser mantido.

- Caso a pessoa volte em menos de 12h (contando da ultima alteração nos items do checkout), o carrinho deve ser mantido.

- Mostrar o `número do pedido e a data de realização` (apenas dia e mês).

- Mostrar uma lista com ``quantidade do produto -- nome do produto -- valor total do produto``. Sendo o valor total calculado por `quantidade * preço unitário`.

- O campo de `quantidade` deve habilitar a edição da mesma. Caso a quantidade se altere, recalcular o `valor total do pedido`.

- Abaixo da lista, mostrar o `valor total do pedido`, sendo calculado pela `soma de todos os valores totais por produto`.

- Deve existir um formulário para a pessoal digitar a `rua` e o `número da casa` para entrega.

- Exibir um botão de `Finalizar pedido`, que deve estar habilitado apenas se: o valor for maior que 0 e o endereço estiver preenchido.

- Ao clickar em `Finalizar pedido`, a rota deve mudar para a `/produtos` (em caso de sucesso).

- Uma mensagem de sucesso deve ser exibida caso a operação dê certo. Caso contrário, exibir uma mensagem de erro.

   
### Implementações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que os teste de correção funcionem corretamente.

- O Front-End deve estar na em ``localhost:3000`` e a API em ``localhost:3001``.

- O uso de `localStorage` é necessário para que as informações não se percam caso a pessoa atualize a página. 

No `localStorage` do navegador:
* a chave `user` deve conter a seguinte estrutura:
```
{
    name,
    email,
    token,
    role (podendo ser ADMIN ou CLIENT) 
}
```

- Ao deslogar, remover completamente a chave `user` do `localStorage`.

- Os endpoints devem permitir o acesso com um token de teste: ```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c```

- Criar um ``produto de teste`` que deve ficar na primeira posição dos cards (com test-id começando com o indice 0) com as especificações:

```javascript
{
    name: 'Cerveja Skol Lata 250ml',
    price: 2.20,
    image: 'https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_600/v1587242866/132_Cerveja_Skol_Pilsen_Lata_350ml_zu1xth.jpg'
}
``` 


- Criar um `login de teste para ADMIN` com as seguintes especificações: 

```javascript
{
    name: 'Admin Trybe',
    email: 'admin@trybe.com',
    password: '123456'
}
```

- Criar um `login de teste para CLIENT` com as seguintes especificações: 

```javascript
{
    name: 'Client Trybe',
    email: 'client@trybe.com',
    password: '123456'
}
```

#### Endpoints

- para o registro, usar ``POST /register``. 
- para o listar os produtos do cliente, usar ``GET /products``. 
- para finalizar o pedido, usar ``POST /finish-order``. 

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

