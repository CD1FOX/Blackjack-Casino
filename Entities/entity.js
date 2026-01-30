export class Entity {
    constructor(name) {
        this.name = name
        this.hand = []
        this.handValue = 0
        this.bust = false
    }

    displayHandValue() {
        console.log(this.name + ": " + this.handValue)
    }

    displayHand() {
        console.log(this.hand)
    }

    resetHand() {
        this.hand = []
    }
}