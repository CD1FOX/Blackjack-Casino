export function UISystem(gameStateSystem, cardDistributerSystem, cardValueLogic) {
    const btn = document.querySelector(".btn")

    btn.addEventListener("click", () => {
        gameStateSystem.houseHand = [cardDistributerSystem.RandomCard(), cardDistributerSystem.RandomCard()]
        gameStateSystem.playerHand = [cardDistributerSystem.RandomCard(), cardDistributerSystem.RandomCard()]


        console.log(`${gameStateSystem.houseHand} \n${gameStateSystem.playerHand}`)

        console.log(cardValueLogic.cardValueSetter())
    })
}