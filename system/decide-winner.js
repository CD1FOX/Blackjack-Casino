export function decideWinner(playerHandValue, dealerHandValue) {
    if (playerHandValue > 21){
        return "Dealer wins"
    }

    if (dealerHandValue > 21){
        return "Player wins"
    }

    if (playerHandValue > dealerHandValue) {
        return "Player wins"
    } else if (playerHandValue < dealerHandValue) {
        return "Dealer wins"
    } else {
        return "Tie"
    }
}
