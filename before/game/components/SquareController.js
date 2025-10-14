class SquareController extends Component{
    speed  = 100
    start() {
        // this.vertex = new Vector2(100, 100)
        // this.transform.position = new Vector2(100, 100)

        this.velocity = new Vector2(1, 1)
        this.nextFireFrame = 10
        this.frame = 0
        this.nextRight = true

    }
    update() {
        this.frame++

        // console.log(Input.keysDown)

        let proposedChange = Vector2.zero

        //Left
        if(Input.keysDown.includes("ArrowLeft")){
            proposedChange.plusEquals(Vector2.left)
        }
        if(Input.keysDown.includes("ArrowRight")){
            proposedChange.plusEquals(Vector2.right)
        }
        if(Input.keysDown.includes("ArrowUp")){
            proposedChange.plusEquals(Vector2.up)
        }
        if(Input.keysDown.includes("ArrowDown")){
            proposedChange.plusEquals(Vector2.down)
        }

        this.transform.position.plusEquals(proposedChange.times(Time.deltaTime*this.speed))

        let cameraX = this.transform.position.x
        if(cameraX > 100)
            cameraX = 100
        if(cameraX < -100)
            cameraX = -100

        Camera.main.transform.position = new Vector2(cameraX, 0)




        Camera.main.transform.scale = new Vector2(1, 1)

        if(this.frame >= this.nextFireFrame){
            if(this.nextRight){
                Engine.currentScene.instantiate(new LaserGameObject(), this.transform.position.plus(Vector2.right.times(10)))
            }
            else{
                Engine.currentScene.instantiate(new LaserGameObject(), this.transform.position.plus(Vector2.left.times(10)))
            }
            this.nextRight = !this.nextRight
            this.nextFireFrame = this.frame + 10
        }
    }
}