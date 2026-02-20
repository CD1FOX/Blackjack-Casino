export class DetermineWinner {
    getWinner(player, dealer) {
        if (player.handValue > dealer.handValue){
            return "Player wins"
        } else if(player.handValue < dealer.handValue){
            return "Dealer wins"
        } else {
            return "Tie"
        }
    }
}