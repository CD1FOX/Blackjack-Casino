import { hitLogic } from "../system/hit-logic.js"
import { decideWinner } from "../system/decide-winner.js"
import { GameController } from "../system/game-controller.js"

export function UI(dealer, player) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const standbtn = document.querySelector(".stand-btn")

    playbtn.addEventListener("click", GameController.start())

    hitbtn.addEventListener("click", GameController.hit())

    standbtn.addEventListener("click", GameController.stand())
}