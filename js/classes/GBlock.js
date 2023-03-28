class GBlock {
    constructor({ position, width = 400, height = 500, imgScr = './img/GreenWat.png' }) {
        this.position = position
        this.width = width
        this.height = height

        this.frameRate = 3
        this.currentFrame = 0
        this.frameBuffer = 10
        this.elapsedFrames = 0
        this.scale = 0.5

        this.loaded = false
        this.image = new Image()
        this.image.onload = () => {
            this.width = (this.image.width / this.frameRate) * this.scale
            this.height = this.image.height * this.scale
            this.loaded = true
        }
        this.image.src = imgScr




    }
    draw() {
        if (!this.image) return

        const cropbox = {
            position: {
                x: this.currentFrame * (this.image.width / this.frameRate),
                y: 0,
            },
            width: this.image.width / this.frameRate,
            height: this.image.height,
        }

        c.drawImage(
            this.image,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            115,
            20
        )
    }

    updateFrames() {
        this.elapsedFrames++

        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) this.currentFrame++
            else this.currentFrame = 0
        }
    }


    update() {
        this.draw()
        this.updateFrames()
    }
}
