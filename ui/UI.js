export function UI(dealer, player) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const stopbtn = document.querySelector(".stop-btn")

    playbtn.addEventListener("click", () => {
        dealer.drawCard(2)
        player.drawCard(2)

        console.log(dealer.getHandValue())
        console.log(player.getHandValue())

        dealer.resetHand()
        player.resetHand()
    })
}