import { GameController } from "../system/game-controller.js"

const gameController = new GameController()

const playButton = document.querySelector(".play-btn")
const hitButton = document.querySelector(".hit-btn")
const standButton = document.querySelector(".stand-btn")

playButton.addEventListener("click", () => {
    gameController.startGame()
})

hitButton.addEventListener("click", ()=>{
    gameController.cardHit()
})

standButton.addEventListener("click", () =>{
    gameController.stand()
})
