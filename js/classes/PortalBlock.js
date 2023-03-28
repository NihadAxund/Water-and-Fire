class PortalBlock {
    constructor({ position , width =250,height = 185,imgScr='./img/portal.png'}) {
      this.position = position
      this.position.x+=25
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
  