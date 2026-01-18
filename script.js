import { GameStateSystem } from "./Systems/game_state_system.js"
import { CardDistributer } from "./Systems/card_distributer_system.js"
import { CardValueLogic } from "./Systems/card_value_logic.js"
import { UISystem } from "./ui_system.js"

const gameStateSystem = new GameStateSystem()
const cardDistributerSystem = new CardDistributer(gameStateSystem)
const cardValueLogic = new CardValueLogic(gameStateSystem)
const uiSystem = new UISystem(gameStateSystem, cardDistributerSystem, cardValueLogic)
