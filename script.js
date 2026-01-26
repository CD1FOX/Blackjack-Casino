import { Entity } from "./Entity/entity.js"
import { UI } from "./ui/UI.js"

const player = new Entity("player")
const dealer = new Entity("dealer")
const ui = UI(dealer, player)
