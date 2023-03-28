class Lift2Block {
    constructor({ position, width = 160, height = 22, imgScr = './img/Lift2.png' }) {
        this.position = position
        this.width = width
        this.y = this.position.y
        this.height = height
        this.imgScr = imgScr
        this.MaxY = 140
        this.MinY = 0
        this.VerticanAndHorizontal = true;
    }

    draw() {

        let img = new Image()
        img.src = this.imgScr
        this.position.y = this.y + this.MinY
        c.drawImage(img, this.position.x, this.position.y, this.width, this.height);

    }

    update(isok) {
        this.draw()
        this.PlusY(isok)
    }

    liftup() {
        if (this.MinY < this.MaxY) {
            this.MinY++
        }
        //alert("a")
    }
    liftdown() {
        if (0 < this.MinY) {
            this.MinY--
        }
    }
    PlusY(isok) {


        if (isok) {
            this.liftdown()
        }
        else {
            // alert("a")
            this.liftup()
        }
    }
}
