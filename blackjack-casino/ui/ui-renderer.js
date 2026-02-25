export class UIRenderer {
    enableElement(element) {
        element.disabled = false
    }

    disableElement(element) {
        element.disabled = true
    }

    displayEntityHand(entity){
        const parentClass = document.querySelector(`.${entity.name}-cards`)

        for (const card of entity.hand){
            const div = this.createElement("div")

            this.addClassToElement(div, "card-box")

            this.addElementTextContent(div, card)

            this.appendElementParent(div, parentClass)
        }
    }

    createElement(element){
        return document.createElement(element)
    }

    addClassToElement(element, elementClass){
        element.classList.add(elementClass)
    }

    addElementTextContent(element, textContent){
        element.textContent = textContent
    }

    appendElementParent(element, parent){
        parent.appendChild(element)
    }
}