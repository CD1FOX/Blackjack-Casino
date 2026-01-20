import { GameStateSystem } from "./Systems/game_state_system.js"
import { CardDistributer } from "./Systems/card_distributer_system.js"
import { HandEvaluatorSystem } from "./Systems/hand_evaluator_system.js"
import { UISystem } from "./ui_system.js"

const gameStateSystem = new GameStateSystem()
const cardDistributerSystem = new CardDistributer(gameStateSystem)
const handEvaluatorSystem = new HandEvaluatorSystem(gameStateSystem)
const uiSystem = new UISystem(gameStateSystem, cardDistributerSystem, handEvaluatorSystem)
