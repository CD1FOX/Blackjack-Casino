import { gameLogic } from "../system/game-logic.js"
import { hitLogic } from "../system/hit-logic.js"

export function UI(dealer, player) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const standbtn = document.querySelector(".stand-btn")

    playbtn.addEventListener("click", () => {
        gameLogic(dealer, player)
    })

    hitbtn.addEventListener("click", () => {
        hitLogic(dealer, player)
    })

    standbtn.addEventListener("click", () => {
        dealer.decideDealerAction()
    })
}