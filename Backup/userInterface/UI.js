import { GameController } from "../system/game-controller.js"

const game = new GameController()

export function UI() {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const standbtn = document.querySelector(".stand-btn")

    playbtn.addEventListener("click", () => {
        game.start()
    })

    hitbtn.addEventListener("click", () => {
        game.hit()
    })

    standbtn.addEventListener("click", () => {
        game.stand()
    })


}

export function displayHand(entity) {
    console.log(`${entity.name}: ${entity.hand}`)
}

export function displayHandValue(entity) {
    console.log(`${entity.name}: ${entity.handValue}`)
}