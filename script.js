
import { HandEvaluator } from "./systems/hand-evaluator.js"
import { TurnBase } from "./systems/turn-base.js"
import { CardEvaluator } from "./systems/card-evaluator.js"
import { Entity } from "./Entity/entity.js"
import { UI } from "./ui/UI.js"

const handEvaluator = new HandEvaluator()
const turnBase = new TurnBase()
const cardEvaluator = new CardEvaluator()
const player = new Entity("player")
const dealer = new Entity("dealer")
const pageUI = new UI(entity, cardDistributer, handEvaluator, turnBase, cardEvaluator)
