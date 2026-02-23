export class UIRenderer {
    constructor() {
        this.playButton = document.querySelector(".play-btn")
        this.hitButton = document.querySelector(".hit-btn")
        this.standButton = document.querySelector(".stand-btn")
    }

    enableElement(element) {
        element.disabled = false
    }

    disableElement(element) {
        element.disabled = true
    }
}