import { GameFlow } from "./game/game-flow.js"
import { UIRenderer } from "./ui/ui-renderer.js"

const playButton = document.querySelector(".play-btn")
const hitButton = document.querySelector(".hit-btn")
const standButton = document.querySelector(".stand-btn")

const gameFlow = new GameFlow()
const uiRenderer = new UIRenderer()

playButton.addEventListener("click", () => {
    uiRenderer.disableElement(playButton)
    uiRenderer.enableElement(hitButton)
    uiRenderer.enableElement(standButton)
    gameFlow.startGame()
})

hitButton.addEventListener("click", () => {
    gameFlow.hit()
})

standButton.addEventListener("click", ()=>{
    gameFlow.stand()
    uiRenderer.enableElement(playButton)
    uiRenderer.disableElement(hitButton)
    uiRenderer.disableElement(standButton)
})