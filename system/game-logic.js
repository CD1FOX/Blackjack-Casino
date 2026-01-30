export function GameLogic(dealer, player){
    const initialCards = 2
    
    dealer.shuffleDeckCard()

    dealer.drawCard(initialCards)
    player.drawCard(initialCards)

    const dealerHandValue = dealer.getHandValue()
    const playerHandValue = player.getHandValue()

    console.log("Dealer: " + dealerHandValue)
    console.log("Player: " + playerHandValue)
}