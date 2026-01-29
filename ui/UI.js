export function UI(dealer, player) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const stopbtn = document.querySelector(".stop-btn")

    playbtn.addEventListener("click", () => {
        const initialCard = 2

        player.drawCard(initialCard)
        console.log(player.getHandValue())


        dealer.resetHand()
        player.resetHand()
    })

    hitbtn.addEventListener("click", () => {
        
    })
}