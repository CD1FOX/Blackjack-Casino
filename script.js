import { Entity } from "./Entity/entity.js"
import { CardDealer } from "./system/card-dealer.js"
import { UI } from "./ui/UI.js"

const player = new Entity("player")
const dealer = new Entity("dealer")
const cardDealer = new CardDealer()
const pageUI = new UI(dealer, player)
