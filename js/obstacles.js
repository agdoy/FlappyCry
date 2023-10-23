class Obstacle {

    constructor(gameScreen, gameSize, playerPos, playerSize) {

        this.gameScreen = gameScreen;
        this.gameSize = gameSize;
        this.playerPos = playerPos;
        this.playerSize = playerSize;


        this.obstacleSize1 = {
            w: 10,
            h: this.gameSize.h - (Math.floor(Math.random() * (600 - 100) + 100))

        }



        this.obstacleSize2 = {
            w: 10,
            h: this.gameSize.h - this.obstacleSize1.height - 200

        }



        this.obstaclePos = {
            left: gameSize.w,
            top: playerPos.base + playerSize.h - this.obstacleSize.h
        }

        this.obstacleVel = {
            left: 10
        }

        this.init()
    }

    init() {
        this.obstacleElement1 = document.createElement('div')
        this.obstacleElement2 = document.createElement('div')

        this.obstacleElement1.style.position = "absolute"
        this.obstacleElement1.style.backgroundColor = `black`
        this.obstacleElement1.style.width = `${this.obstacleSize.w}px`
        this.obstacleElement1.style.height = `${this.obstacleSize.h}px`
        this.obstacleElement1.style.left = `${this.obstaclePos.left}px`
        this.obstacleElement1.style.top = `${this.obstaclePos.top}px`


        this.obstacleElement2.style.position = "absolute"
        this.obstacleElement2.style.backgroundColor = `black`
        this.obstacleElement2.style.width = `${this.obstacleSize.w}px`
        this.obstacleElement2.style.height = `${this.obstacleSize.h}px`
        this.obstacleElement2.style.left = `${this.obstaclePos.left}px`
        this.obstacleElement2.style.top = `${this.obstaclePos.top}px`


        this.gameScreen.appendChild(this.obstacleElement1)
        this.gameScreen.appendChild(this.obstacleElement2)
    }

    move() {
        this.obstaclePos1.left -= this.obstacleVel.left
        this.obstaclePos2.left -= this.obstacleVel.left
        this.updatePosition()
    }

    updatePosition() {
        this.obstacleElement1.style.left = `${this.obstaclePos.left}px`
        this.obstacleElement1.style.top = `${this.obstaclePos.top}px`

        this.obstacleElement2.style.left = `${this.obstaclePos.left}px`
        this.obstacleElement2.style.top = `${this.obstaclePos.top}px`
    }


}