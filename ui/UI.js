export function UI(player, dealer) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const stopbtn = document.querySelector(".stop-btn")

    playbtn.addEventListener("click", () => {
        player.getCard(2)
        player.getHandValue()
    })


}