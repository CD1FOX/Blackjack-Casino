import { GameController } from "../system/game-controller.js"

export class UI {
    init() {
        const gameController = new GameController()

        const playButton = document.querySelector(".play-btn")
        const hitButton = document.querySelector(".hit-btn")
        const standButton = document.querySelector(".stand-btn")

        playButton.addEventListener("click", () => {
            gameController.startGame()
        })

        hitButton.addEventListener("click", () => {
            gameController.cardHit()
        })

        standButton.addEventListener("click", () => {
            gameController.stand()
        })
    }


    displayCard() {
        /**
         * Draw card
         * Create an element
         * Set the class of the element
         * Display the random card in text
         * Set the parent of the element
         */

        const parentNode = document.querySelector(".player-cards")
        const element = this.createElement('div')
        this.setElementClass(element, ".card-box")
        this.setElementText(element, "Test")
        this.setElementParent(element, parentNode)

        console.log(element.className)
        console.log(element.textContent)
        console.log("created")

    }

    createElement(element) {
        return document.createElement(element)
    }

    setElementClass(element, elementClass) {
        return element.className = elementClass
    }

    setElementText(element, text) {
        return element.textContent = text
    }

    setElementParent(element, parent) {
        return parent.appendChild(element)
    }
}

const ui = new UI()
ui.init()

