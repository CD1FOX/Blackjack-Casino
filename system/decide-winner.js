export function decideWinner(dealer, player) {
    
    if (dealer > player) {
        return "Dealer won"
    } else if (dealer < player) {
        return "Player won"
    } else if (dealer === player) {
        return "Tie"
    }

}