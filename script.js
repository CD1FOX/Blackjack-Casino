let houseCards = [RandomCard(), RandomCard()]
let playerCards = [RandomCard(), RandomCard()]

console.log(houseCards, playerCards)

function RandomCard(){
    const cardSymbol = ["♠", "♥", "♦", "♣"]
    const cardDeck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    const randomCardSymbol = cardSymbol[Math.floor(Math.random() * cardSymbol.length)]
    const randomCardDeck = cardDeck[Math.floor(Math.random() * cardDeck.length)]

    const chosenCard = `${randomCardSymbol} ${randomCardDeck}`
    return chosenCard
}