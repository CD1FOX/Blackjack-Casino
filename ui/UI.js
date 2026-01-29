export function UI(dealer, player) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const stopbtn = document.querySelector(".stop-btn")

    playbtn.addEventListener("click", () => {
        const initialCard = 2

        player.getNewDeck()
        player.drawCard(initialCard)
        console.log(player.getHandValue())
    })

    hitbtn.addEventListener("click", () => {
        player.drawCard(1)
        console.log(player.getHandValue())
        
        
    })

    stopbtn.addEventListener("click", ()=>{
        player.resetHand()
    })
}