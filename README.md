Projeto 3: Pig Game
---
LINK: https://pevss.github.io/projeto-pig-game/

Com o último projeto, criei um jogo bem mais complexo que o primeiro. Nesse, trabalhei com dois jogadores simultâneos.

O jogo funciona assim:

Cada jogador (um de cada vez) tem que rodar um dado, a cada rolada do dado, um placar temporário é incrementado de acordo com o número que foi rolado no dado. A todo momento o jogador tem como decidir se vai rolar mais uma vez, ou se vai passar sua vez.

Caso o jogador decida rolar o dado e caia em 1, ele perde seus pontos e sua vez é passada.
Caso o jogador decida passar sua vez, seus pontos são somados ao seu placar fixo.

Ganha o primeiro jogador que chegar a 100 no placar fixo.

Aprendi diversos conceitos e técnicas diferentes nesse projeto. 

Quando comecei a codar e seguir as instruções do professor, eu não conseguia entender como aquilo tudo iria chegar no resultado final. Eu tinha dúvidas como:

-  Como eu vou lidar com dois jogadores ao mesmo tempo?
-  Como vou mudar a imagem do dado para a face do número rolado aleatóriamente?
-  Como vou definir que o jogo acabou para que, ao chegar a 100 pontos ninguem possa fazer nada a não ser clicar em "new game"?

Como resolvi esses problemas:

-  Percebi que o desenvolvimento das funcionalidades não começava no JS, mas sim, em toda a estrutura HTML e CSS do projeto. Percebi que o jogador 1 tinha como classe "player--0" e o jogador 2 tinha como classe "player--1". Usei um array para armazenar os pontos dos dois, sendo que no primeiro elemento do array o valor seria o placar do jogador 1, e o segundo elementos seria o placar do jogador 2.
	 Além disso, tudo aquilo que se refere a um jogador tem, em sua classe, o número dele, ou seja, ao definir uma varável "currentPlater" para 0 ou 1, tornou possível eu fazer com que os valores dos dados rolados sejam somados ao elemento DOM do placar do jogador ativo, e quando uma das condições de mudança de jogador aconteça (apertar o botão "hold" ou rolar 1 no dado), usei o operador ternário para mudar "currentPlayer" para o jogador oposto.

-	Mudar a imagem do dado foi algo que explodiu minha cabeça quando eu vi funcionando pela primeira vez. A solução é extremamente simples: Usamos uma template string para mudar o "src" do elemento "img" dessa maneira `dice-${numeroGeradoAleatoriamente}`. Assim, a imagem sempre mudaria quando o um número novo fosse gerado!

-	Por último, eu tive que saber como eu iria controlar o estado do jogo (jogando ou não jogando). Essa foi outra solução bem simples mas efetiva. Tudo que acontece em todas as funções ficaram involtas por uma condicional que leva como condição uma variável "playing" que pode ter o valor "true" ou "false". Quando alguem chega a 100 pontos, essa variável é atualizada para false, deixando todos os botões (menos "new game" inutilizaveis).

O que aprendi com isso tudo
---

Aprendi principalmente a pensar fora da caixa na hora de implementar alguma feature. Aprendi a contabilizar todas as ferramentas que eu aprendi durante o curso e projetos para solucionar um problema, deixei de pensar apenas no básico do básico.

Técnicas utilizadas:

-	Alteração do conteúdo de elementos dos DOM dinâmicamente
-	Alteração de propriedades de elementos DOM
-	Alteração de classes e estilos de elementos DOM
-	Funções
-	Arrays
-	State Management
-	Code Refactor
-	Operador Ternário
-	Lidar com eventos de teclas do teclado
-	Condicionais
-	Solução de problemas como um desenvolvedor
