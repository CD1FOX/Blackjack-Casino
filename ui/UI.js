import { CardDealer } from "../system/card-dealer.js"

const cardDealer = new CardDealer()

export function UI(dealer, player) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const standbtn = document.querySelector(".stand-btn")

    playbtn.addEventListener("click", () => {
        const initialCard = 2

        playbtn.disabled = true
        standbtn.disabled = false
        hitbtn.disabled = false

        dealer.resetHand()
        player.resetHand()

        cardDealer.shuffleDeckCard()

        dealer.drawCard(initialCard)
        player.drawCard(initialCard)

        dealer.getHandValue()
        player.getHandValue()


    })

    hitbtn.addEventListener("click", () => {
        player.drawCard(1)
        player.getHandValue()


    })

    standbtn.addEventListener("click", () => {
        console.log("Player stand")
        playbtn.disabled = true
        hitbtn.disabled = true
        standbtn.disabled = true

        dealer.decideDealerAction()
    })
}