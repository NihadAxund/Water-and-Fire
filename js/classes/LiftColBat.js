class LiftColBat {
    constructor({ position, width = 60, height = 25 }) {
        this.position = position
        this.width = width
        this.height = height
        this.imgScr1 = './img/batao.png'
        this.imgScr2 = './img/batao2.png'
        this.imgScr = this.imgScr1
        this.position.y -= 1
        this.y = this.position.y
    }

    draw() {

        let img = new Image()
        img.src = this.imgScr
        c.drawImage(img, this.position.x, this.position.y, this.width, this.height);

    }

    LiftCheck(boolen) {
        if (boolen) {
            this.position.y = this.y + 10
            this.height = 15
            this.imgScr = this.imgScr2
            ISGlobal2 = false
        }
        else {
            this.position.y = this.y
            this.height = 25
            this.imgScr = this.imgScr1
            ISGlobal2 = true
        }
    }

    update() {
        this.draw()
    }
}
