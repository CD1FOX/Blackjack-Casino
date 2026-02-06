export function decideWinner(playerHandValue, dealerHandValue) {
    if (playerHandValue > dealerHandValue) {
        return "Player wins"
    } else if (playerHandValue < dealerHandValue) {
        return "Dealer wins"
    } else {
        return "Tie"
    }
}
