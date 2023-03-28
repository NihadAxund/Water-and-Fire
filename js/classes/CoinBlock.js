class CoinBlock {
  constructor({ position , width =30,height = 30,imgScr='./img/RedD.png'}) {

    this.position = position
    this.width = width
    this.height = height
    this.imgScr = imgScr
  }

  draw() {

    var img = new Image();
    img.src = this.imgScr    
    c.drawImage(img,this.position.x,this.position.y,this.width,this.height);

  }

  update() {
    this.draw()
  }
}
