export function UI(player, dealer) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const stopbtn = document.querySelector(".stop-btn")

    playbtn.addEventListener("click", () => {
        console.log(dealer.getCard(2))
        console.log(player.getCard(2))

        console.log(dealer.getHandValue())
        console.log(player.getHandValue())

        dealer.resetHand()
        player.resetHand()
    })
}