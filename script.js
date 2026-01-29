import { Dealer } from "./entity/dealer.js"
import { Entity } from "./entity/entity.js"
import { UI } from "./ui/UI.js"

const player = new Entity("player")
const dealer = new Dealer("dealer")
const ui = UI(dealer, player)
