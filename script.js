
import { Dealer } from "./Entities/dealer.js"
import { Entity } from "./Entities/entity.js"
import { UI } from "./ui/UI.js"

const dealer = new Dealer("Dealer")
const player = new Entity("Player")

const ui = UI(dealer, player)