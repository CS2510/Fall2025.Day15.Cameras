/**
 * Base class for all objects ín a scene.
 * 
 * See: https://docs.unity3d.com/ScriptReference/GameObject.html
 */

class GameObject {
    components = []
    hasStarted = false
    markForDelete = false
    name = "[NO NAME]"
    constructor(name) {
        this.addComponent(new Transform())
        this.name = name
    }
    start() {
        for (const component of this.components) {
            component.start()
        }
    }
    update() {
        if (!this.hasStarted) {
            this.hasStarted = true
            this.start()
        }
        for (const component of this.components) {
            
            component.update()
            
        }
    }
    draw(ctx) {
        for (const component of this.components) {
            ctx.save()
            ctx.translate(this.transform.position.x, this.transform.position.y)
            ctx.scale(this.transform.scale.x, this.transform.scale.y)
            ctx.rotate(this.transform.rotation)
            component.draw(ctx)
            ctx.restore()
        }
    }
    addComponent(component, values) {
        this.components.push(component)
        component.gameObject = this
        Object.assign(component, values)
    }
    get transform() {
        return this.components[0]
    }
    destroy() {
        this.markForDelete = true
    }
    getComponent(type) {
        return this.components.find(go => go instanceof type)
    }

    static find(name) {
        return Engine.currentScene.gameObjects.find(go => go.name == name)
    }
}