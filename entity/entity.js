export class Entity {
    constructor(name) {
        this.name = name
        this.hand = [A1]
        this.handValue = 0
    }

    drawCard() {
        this.entityHand.push(`${this.drawRandomCardSymbol()}${this.drawRandomCardValue()}`)
    }

    drawRandomCardSymbol() {
        const cardSymbol = ["♠", "♥", "♦", "♣"]
        return cardSymbol[Math.floor(Math.random() * this.cardSymbol.length)]
    }

    drawRandomCardValue() {
        const cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        return cardValue[Math.floor(Math.random() * this.cardDeck.length)]
    }

    drawHand() {
        this.hand = [this.drawCard(), this.drawCard()]
        console.log(this.hand)
        return
    }

    determineCardValue() {
        for (const card of this.hand) {
            let value = card.slice(1)

            if (isFinite(value)) {
                this.handValue += value
            } else if (value === "A") {
                this.handValue += this.determineAceValue()
            } else {
                this.handValue += 10
            }
        }
    }

    determineAceValue() {
        if (this.handValue > 10) {
            this.handValue += 1
        } else {
            this.handValue += 11
        }
    }
}