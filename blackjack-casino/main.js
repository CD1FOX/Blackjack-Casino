import { GameFlow } from "./game/game-flow.js"

const gameFlow = new GameFlow()

const playButton = document.querySelector(".play-btn")
const hitButton = document.querySelector(".hit-btn")
const standButton = document.querySelector(".stand-btn")

playButton.addEventListener("click", () => {
    gameFlow.startGame()
})

hitButton.addEventListener("click", () => {
    gameFlow.hit()
})

standButton.addEventListener("click", ()=>{
    gameFlow.stand()
})