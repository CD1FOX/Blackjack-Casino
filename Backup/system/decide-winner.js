export function decideWinner(dealer, player) {
    console.log(dealer.bust, player.bust)
    if (player.bust){
        return "Dealer won"
    }
    
    if (dealer.bust){
        return "Player won"
    } 

    if (dealer.handValue > player.handValue) {
        return "Dealer won"
    } else if (dealer.handValue < player.handValue) {
        return "Player won"
    } else if (dealer.handValue === player.handValue) {
        return "Tie"
    }

}