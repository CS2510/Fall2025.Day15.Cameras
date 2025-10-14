class Camera extends GameObject {
  constructor() {
    super("Camera")
    this.addComponent(new CameraComponent())
  }
  static get main() {
    if (!GameObject.find("Camera"))
      throw new Error("You need to add a camera to your scene.")
    return GameObject.find("Camera")
  }

  screenToWorldPosition(screenPoint) {
    let matrix = new DOMMatrix()
    const screenDOMPoint = new DOMPoint(screenPoint.x, screenPoint.y)
    matrix = matrix.translate(window.innerWidth / 2, window.innerHeight / 2)
    matrix = matrix.scale(Camera.main.transform.scale.x, Camera.main.transform.scale.y)
    matrix = matrix.translate(-Camera.main.transform.position.x, -Camera.main.transform.position.y)

    const worldDOMPoint = matrix.inverse().transformPoint(screenDOMPoint)
    return new Vector2(worldDOMPoint.x, worldDOMPoint.y)

  }

}