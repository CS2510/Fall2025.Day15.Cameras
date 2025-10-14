class StarController extends Component{
  scale
  speedScale = 10
  start(){
    this.scale = Math.random()*3+1
    this.transform.scale = new Vector2(this.scale, this.scale)

    const color = Math.random() * 255
    this.gameObject.getComponent(Polygon).fillStyle = `rgb(${color}, ${color}, ${color})`
  }
  update(){
    this.transform.position.plusEquals(new Vector2(0, this.scale*Time.deltaTime*this.speedScale))
    if(this.transform.position.y > Globals.starSpacing)
    {
      this.transform.position.y -= Globals.starSpacing*2
    }

  }
}