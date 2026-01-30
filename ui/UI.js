import { GameLogic } from "../system/game-logic.js"

export function UI(dealer, player) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const standbtn = document.querySelector(".stand-btn")

    playbtn.addEventListener("click", () => {
        GameLogic(dealer, player)
    })
}