import { GameController } from "../system/game-controller.js"

export function UI() {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const standbtn = document.querySelector(".stand-btn")

    playbtn.addEventListener("click", GameController.start())

    hitbtn.addEventListener("click", GameController.hit())

    standbtn.addEventListener("click", GameController.stand())
}