class Player {

    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;


        this.playerSize = {
            w: 100,
            h: 100
        }

        this.playerPos = {
            left: 100,
            top: this.gameSize.h / 2 - this.playerSize.h,
        }

        this.playerVel = {
            left: 1,
            top: 0,
            gravity: 0.2,
        }


        this.init()
    }

    init() {


        this.playerElement = document.createElement('img')
        this.playerElement.src = "./img/birdy.png"

        this.playerElement.style.position = "absolute"
        this.playerElement.style.width = `${this.playerSize.w}px`
        this.playerElement.style.height = `${this.playerSize.h}px`
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`


        this.gameScreen.appendChild(this.playerElement)
    }

    move() {

        this.playerPos.top += this.playerVel.top;
        this.playerVel.top += this.playerVel.gravity;
    }

    updatePosition() {
        this.playerElement.style.left = `${this.playerPos.left}px`
        this.playerElement.style.top = `${this.playerPos.top}px`
    }

    jump() {
        this.playerPos.top -= 40;
        this.playerVel.top -= -8;
    }
}