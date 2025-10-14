class LaserController extends Component{
    start(){
        this.speed = -500
    }
    update(){
        this.transform.position.y += this.speed * Time.deltaTime

        if(this.transform.position.y < -500){
            this.gameObject.destroy()
        }
    }
}