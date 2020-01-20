# Boas vindas ao repositório do projeto de Trivia!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

## O que deverá ser desenvolvido

Você deverá desenvolver um jogo de perguntas e respostas baseado no jogo **Trivia** _(tipo um show do milhão americano rs)_ utilizando _React e Redux_.

O app começa com uma tela onde a pessoa que joga coloca seu nome e seu e-mail. O e-mail será usado para buscar a foto associada no site [Gravatar](https://pt.gravatar.com/) (se houver).

Logo após, ela é redirecionada para o jogo onde deve escolher uma das respostas disponíveis para cada uma das perguntas. A resposta deve ser marcada antes de o contador de tempo chegar a zero, caso contrário a resposta deve ser considerada como errada.

Cada acerto dá à pessoa que joga pontos que deverão ser computados num placar no header da aplicação.

Após 5 perguntas respondidas, a pessoa que joga é redirecionada para uma tela de score, onde o texto mostrado vai depender do número de acertos.

No final de cada jogo, a pessoa que joga pode acessar o ranking com as melhores pontuações.

A pessoa que joga pode configurar algumas opções para o jogo em uma tela de configurações acessível a partir do header do app.


Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/MxuXDNVbiZb69kM9NI0jhZ/Trivia-project?node-id=0%3A1

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

### Trivia API

A [API do Trivia](https://opentdb.com/api_config.php) é bem simples. Temos 2 endpoints que vamos precisar utilizar para esse exercício.

* **Pegar o token de sessão da pessoa que está jogando**
* **Pegar perguntas e respostas**

Primeiro, é necessário fazer um GET request para:

```
https://opentdb.com/api_token.php?command=request
```

Esse endpoint te retornará o token que vai ser utilizado nas requisições seguintes. Esse token expira em 6 horas e te retornará um `response_code: 3` caso esteja expirado.

```
{
   "response_code":0,
   "response_message":"Token Generated Successfully!",
   "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
}
```

Paga pegar as perguntas, você realizar um GET request para o seguinte endpoint:

```
https://opentdb.com/api.php?amount=${quantidade-de-perguntas-retornadas}&token=${seu-token-aqui}
// Recomendação
https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}
```

Recomendamos pedir 5 perguntas de uma vez e controlar a disposição delas no código.

Essa API te retorna as perguntas no seguinte formato:

```
// tipo múltipla escolha
{
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What is the first weapon you acquire in Half-Life?",
         "correct_answer":"A crowbar",
         "incorrect_answers":[
            "A pistol",
            "The H.E.V suit",
            "Your fists"
         ]
      }
   ]
}
```

```
// tipo booleana
{
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"boolean",
         "difficulty":"hard",
         "question":"TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
         "correct_answer":"False",
         "incorrect_answers":[
            "True"
         ]
      }
   ]
}
```

Caso o token seja inválido, essa será a resposta da API:

```
{
   "response_code":3,
   "results":[]
}
```

---

### Gravatar

Na tela de **Inicio**, a pessoa que joga pode colocar um e-mail que deve fazer uma consulta a API do [Gravatar](https://br.gravatar.com/site/implement/images/).

A Implementação é feita baseada no e-mail. Esse email deve ser transformado em uma hash `MD5` (https://br.gravatar.com/site/implement/hash/),
recomendamos utilizar o [CryptoJs](https://github.com/brix/crypto-js).

Após a geração da hash, basta adicionar o valor gerado no final da URL:

```
https://www.gravatar.com/avatar/HASH-GERADA
// Exemplo
https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50
// Exemplo
<img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
```

Caso o e-mail não tenha uma foto vinculada ao Gravatar, exiba a imagem `default`:

```
https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3
```

Lembre-se de manter o `data-testid` correto.

---

## Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate**, e tiver a **cobertura de testes unitários mínima de 90%**.

Nesse projeto, a pessoa que joga deve conseguir completar o jogo e conseguir ver seu placar depois de responder todas as 5 perguntas, além de acessar a tela de configurações e de ranking.

Lembrem-se de utilizar os conhecimentos adquiridos ao longo dos últimos projetos nas ferramentas do React como o Router, Link, Redux e testes para ajudá-los a completar os requisitos.

1. Todos os elementos devem respeitar os atributos descritos no protótipo;

#### Tela de início:

2. A pessoa que joga deve conseguir escrever seu nome no input de texto;

3. A pessoa que joga deve conseguir escrever seu email no input de email;

4. O Botão no canto superior direito leva para a tela de configurações;

5. Após clicar no botão "Jogar", a pessoa deve ser redirecionada para a tela do jogo;

6. Ao clicar no botão "Jogar", uma requisição para a API do Trivia deve ser feita para pegar o token de jogador;

7. O token deve ser armazenado na aplicação e enviado em todas as requisições seguintes.

#### Tela do jogo:

8. O header deve conter a imagem de perfil vinda do Gravatar, o nome da pessoa (digitado na tela de início) e o placar zerado;

9. A pergunta e suas alternativas de resposta devem ser recebidas da API do Trivia;

10. A categoria da pergunta e seu texto devem ser mostradas para a pessoa que está jogando. Essas informações devem vir dos campos category e question, respectivamente;

11. As alternativas devem ser mostradas em ordem aleatória, misturando as incorretas com a correta;

12. Só deve ser possível escolher uma resposta correta por pergunta;

13. Para perguntas com type:"boolean", mostrar somente 2 campos (um para cada resposta possível);

14. Para perguntas com type:"multiple", mostrar a quantidade necessária de campos (um para cada resposta possível);

15. Ao clicar em uma resposta, a resposta correta deve ficar verde e as incorretas, vermelhas;

16. Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando;

17. A pessoa que joga tem 30 segundos para responder cada pergunta. Um temporizador deve aparecer na tela da pessoa, começando de 30 segundos e indo de forma decrescente até o zero;

18. A fórmula para cálculo dos pontos por pergunta é: `10 + (timer * dificuldade)`, onde timer é o tempo restante no contador de tempo e dificuldade é `hard: 3, medium: 2, easy: 1`, dependendo da pergunta. Exemplo: Se no momento da resposta correta o timer estiver contando 17 segundos, e a dificuldade da pergunta é 2 (média), a pontuação deve ser: `10 + (17 * 2) = 44`;

19. Caso a pergunta não seja respondida a tempo, a resposta é considerada como errada;

20. Respostas incorretas não somam pontos ao placar;

21. Após a resposta ser dada, o botão "Próxima" deve aparecer. Ao clicar nesse botão, a próxima pergunta deve aparecer na tela;

22. Após responder 5 perguntas, a pessoa que está jogando deve ser redirecionada para a tela de feedback;

23. Caso a API retorne um response_code: 3 (token expirado), a pessoa que está jogando deve ser redirecionada para a tela de início, sem nenhuma informação prévia salva.

#### Tela de feedback:

24. Deve-se mostrar o placar no header junto com o nome da pessoa que está jogando;

25. A mensagem deve ser "Podia ser melhor..." caso a pessoa que está jogando acerte menos de 3 perguntas;

26. A mensagem deve ser "Mandou bem!" caso a pessoa que está jogando acerte 3 perguntas ou mais;

27. O placar da pessoa que está jogando também deve ser mostrado em uma mensagem de feedback;

28. O número de perguntas que a pessoa que está jogando acertou deve ser mostrado;

29. Ao clicar no botão "Jogar novamente" a pessoa que está jogando deve ser redirecionada para a tela de início, sem nenhuma informação prévia salva;

30. Ao clicar no botão "Ver Ranking" a pessoa que está jogando deve ser redirecionada para a tela de ranking.

#### Tela de ranking:

31. Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar, nome e pontuação das pessoas que jogaram em ordem decrescente (da maior pontuação para a menor);

32. O ranking deve ser armazenado no navegador através do `localStorage`.

#### Tela de configurações:

33. Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API;

34. Ao mudar o valor do dropdown dificuldade, apenas perguntas da dificuldade selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave difficulty no retorno da API;

35. Ao mudar o valor do dropdown tipo, apenas perguntas do tipo selecionado devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave type no retorno da API.

***Obs: A maneira como a API deve ser estruturada segue o seguinte modelo: https://opentdb.com/api_config.php***

Além dos requisitos funcionais, a cobertura de testes deve atingir pelo menos **90%**.

---

### Implementações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que os teste de correção funcionem corretamente.

**Player**

No `localStorage` do navegador:
* a chave `player` deve conter a seguinte estrutura:
```
player: {
    name,
    assertions,
    score,
    gravatarEmail
}
```

* a chave `ranking` deve conter a seguinte estrutura:
```
[
    {name: nome-da-pessoa, score: 10, picture: url-da-foto-no-gravatar}
]
```

* a chave `token` deve conter o valor do token recebido na API do Trivia.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-01-week17-trivia-react-redux-1.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-01-week17-trivia-react-redux-1`

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
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
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
