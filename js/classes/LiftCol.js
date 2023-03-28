class LiftCol {
    constructor({ position, width = 50, height = 80}) {
        this.position = position
        this.width = width
        this.height = height
        this.imgScr1 = './img/LiftCol1.png'
        this.imgScr2 = './img/LiftCol2.png'
        this.imgScr = this.imgScr1
    }

    draw() {

      let img = new Image()
      img.src = this.imgScr 
      c.drawImage(img,this.position.x,this.position.y,this.width,this.height);

    }

    LiftCheck(boolen){
        if (boolen) {
            this.imgScr = this.imgScr2
            ISGlobal = false
        }
        else{
            this.imgScr = this.imgScr1
            ISGlobal = true
        }
        
    }

    update() {
        this.draw()
    }
}
