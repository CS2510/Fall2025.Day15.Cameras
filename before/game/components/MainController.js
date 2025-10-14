class MainController extends Component{
  start(){
    for(let i = 0; i < 100; i++){
      Engine.currentScene.instantiate(new StartGameObject(), new Vector2((Math.random()*2-1)*1000, (Math.random()*2-1)*Globals.starSpacing))
    }
  }
}