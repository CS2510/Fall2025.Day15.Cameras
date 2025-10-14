class StartGameObject extends GameObject{
  constructor(){
    super("Start Game Object", {layer: "background"})
    this.addComponent(new Polygon(), {fillStyle:"white", points: GameAssets.starPoints})
    this.addComponent(new StarController())
    this.transform.scale = new Vector2(2, 2)
  }
}