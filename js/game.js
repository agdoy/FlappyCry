const Game = {

    gameScreen: document.querySelector("#game-screen"),

    gameSize: {
        w: window.innerWidth, //ref gamescreen
        h: window.innerHeight //ref gamescreen
    },

    framesCounter: 0,

    background: undefined,
    player: undefined,

    init() {
        this.setDimensions()
        this.start()
        this.setEventListeners()
    },

    keys: { jump: 'w' }, //controles

    setDimensions() {
        this.gameScreen.style.width = `${this.gameSize.w}px`//tamaño gamescreen
        this.gameScreen.style.height = `${this.gameSize.h}px`//tamaño gamescreen
    },

    setEventListeners() {
        document.addEventListener("keydown", e => {
            if (e.key === this.keys.jump) { //check kwe to jump
                this.player.jump();
            }
        });
    },

    start() {
        this.createElements()
        this.gameLoop()
    },

    gameLoop() {

        this.drawAll()
        window.requestAnimationFrame(() => this.gameLoop())
    },

    createElements() {
        this.background = new Background(this.gameScreen, this.gameSize)
        this.player = new Player(this.gameScreen, this.gameSize)


    },
    drawAll() {
        console.log("inicio")
        this.background.move()
        this.player.updatePosition()
        this.player.move()
        console.log("fin")

    }





}
