class CollisionBlock {
  constructor({ position, height = 23 }) {
    this.position = position
    this.width = 23
    this.height = height
  }

  draw() {
    let img = new Image()
    img.src = './img/sand.png'
    let Pattern = c.createPattern(img, "repeat");
    c.fillStyle = Pattern;
    
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()
  }
}
