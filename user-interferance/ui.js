import { GameController } from "../system/game-controller.js"

const gameController = new GameController()

const playButton = document.querySelector(".play-btn")

playButton.addEventListener("click", () => {
    gameController.startGame()
})