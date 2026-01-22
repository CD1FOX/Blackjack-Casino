export function UISystem(gameStateSystem, cardDistributerSystem, handEvaluatorSystem) {
    const playbtn = document.querySelector(".play-btn")
    const hitbtn = document.querySelector(".hit-btn")
    const stopbtn = document.querySelector(".stop-btn")

    playbtn.addEventListener("click", () => {
        gameStateSystem.houseHand = [cardDistributerSystem.RandomCard("house"), cardDistributerSystem.RandomCard("house")]
        gameStateSystem.playerHand = [cardDistributerSystem.RandomCard("player"), cardDistributerSystem.RandomCard("player")]

        console.log(`${gameStateSystem.houseHand} \n${gameStateSystem.playerHand}`)


        gameStateSystem.playerHandValue = parseInt(handEvaluatorSystem.cardValueSetter(gameStateSystem.playerHand, 0, gameStateSystem.playerHandValue), 10)
        gameStateSystem.playerHandValue += parseInt(handEvaluatorSystem.cardValueSetter(gameStateSystem.playerHand, 1, gameStateSystem.playerHandValue), 10)

        console.log(gameStateSystem.playerHandValue)

        
    })

    hitbtn.addEventListener("click", ()=> {
        console.log(gameStateSystem.playerCardCount)
        gameStateSystem.playerHand.push(cardDistributerSystem.RandomCard())
        console.log(gameStateSystem.playerCardCount)
        gameStateSystem.playerHandValue += parseInt(handEvaluatorSystem.cardValueSetter(gameStateSystem.playerHand, (gameStateSystem.playerCardCount - 1), gameStateSystem.playerHandValue), 10)

        console.log(gameStateSystem.playerHand)
        console.log(gameStateSystem.playerHandValue)
    })
}