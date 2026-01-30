import { GameController } from "../system/game-controller.js"

const game = new GameController()

export function UI(dealer, player) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const standbtn = document.querySelector(".stand-btn")

    playbtn.addEventListener("click", () => {
        game.start()

        displayHand(dealer)
        displayHand(player)
        
        displayHandValue(dealer)
        displayHandValue(player)
    })

    hitbtn.addEventListener("click", () => {
        game.hit()
    })

    standbtn.addEventListener("click", () => {
        game.stand()
    })

    function displayHand(entity) {
        console.log(`${entity.name}:  ${entity.hand}`)
    }

    function displayHandValue(entity) {
        console.log(`${entity.name}:  ${entity.handValue}`)
    }
}

