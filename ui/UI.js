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

        cardDealer.shuffleDeckCard()

        dealer.drawCard(initialCard)
        player.drawCard(initialCard)

        console.log(dealer.getHandValue())
        console.log(player.getHandValue())
    })

    hitbtn.addEventListener("click", () => {
        player.drawCard(1)
        console.log(player.getHandValue())
        
        
    })

    standbtn.addEventListener("click", ()=>{
        console.log("Player stand")
        playbtn.disabled = true
        hitbtn.disabled = true
        standbtn.disabled = true

        
    })
}