'use strict';

// Selecionando os elementos principais
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const score0Element = document.querySelector("#score--0")
const score1Element = document.querySelector("#score--1")
const current0Element = document.querySelector("#current--0")
const current1Element = document.querySelector("#current--1")
const diceElement = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

// Condições iniciais
let scores, currentScore, activePlayer, playing

// Funções
const init = () => {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    player0.classList.remove("player--winner")
    player0.classList.add("player--active")
    player1.classList.remove("player--winner")
    player1.classList.remove("player--active")
    diceElement.classList.add("hidden")

    score0Element.textContent = 0
    score1Element.textContent = 0
    current0Element.textContent = 0
    current1Element.textContent = 0
}

const switchPlayer = () => {
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active")
}

init()

// Rolamento do dado
btnRoll.addEventListener("click", function(){
    if (playing){
        // 1. Gerando um número aleatório de 1 - 6
        const dice = Math.trunc(Math.random()*6) + 1
    
        // 2. Mostrar a imagem do dado
        diceElement.classList.remove("hidden")
        diceElement.src = `dice-${dice}.png`
    
        // 3. Ver se o número gerado foi 1: Se sim, mudar para o outro jogador
        if(dice !== 1){
            // Adicionar "dice" ao score
            currentScore += dice
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore 
        } else {
            // Mudar para o próximo jogador
            switchPlayer()
        }
    }
})

btnHold.addEventListener("click", function(){
    if(playing){
        // 1. Colocar o "currentScore" para o score do jogador ativo
        scores[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
    
        // 2. Checar se o score do jogador ativo é maior ou igual a 100: Se sim, finalize o jogo, caso contrario, mudar de jogador.
        if(scores[activePlayer] >= 100){
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            diceElement.classList.add("hidden")
        } else {
            // mudar para o próximo jogador
            switchPlayer()
        }
    }
})

btnNew.addEventListener("click", init)
