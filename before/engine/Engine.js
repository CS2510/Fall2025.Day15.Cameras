class Engine {
    //Engine-specific
    static layers = ["", "UI"]
    static start(gameProperties) {
        //Object.assign(Engine, gameProperties)
        if (gameProperties?.layers)
            Engine.layers.push(...gameProperties.layers)

        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)
        addEventListener("mousemove", Input.mousemove)
        //Game-specific
        Engine.currentScene.start()
        Engine.gameLoop()

        console.log(Engine.layers)
    }

    //Engine-specific code
    static gameLoop() {
        Engine.update()
        Engine.draw()
        Input.update()
        requestAnimationFrame(Engine.gameLoop)
    }

    //Engine-specific
    static update() {
        Engine.currentScene.update()
    }

    //Engine-specific
    static draw() {

        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight

        //Game-specific
        Engine.ctx.fillStyle = Camera.main.getComponent(CameraComponent).backgroundColor
        Engine.ctx.beginPath()
        Engine.ctx.rect(0, 0, Engine.canvas.width, Engine.canvas.height)
        Engine.ctx.fill()


        Engine.currentScene.draw(Engine.ctx)



    }
}