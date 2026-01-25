import { GameState } from "./Systems/game_state.js"
import { CardDistributer } from "./Systems/card_distributer.js"
import { HandEvaluator } from "./Systems/hand_evaluator.js"
import { TurnBase } from "./Systems/turn_base.js"
import { CardEvaluator } from "./Systems/card_evaluator.js"
import { UI } from "./Systems/UI.js"

const gameState = new GameState()
const cardDistributer = new CardDistributer(gameState)
const handEvaluator = new HandEvaluator(gameState)
const turnBase = new TurnBase(gameState)
const cardEvaluator = new CardEvaluator(gameState)
const pageUI = new UI(gameState, cardDistributer, handEvaluator, turnBase, cardEvaluator)
