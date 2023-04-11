class Player2 extends Sprite {
  constructor({
    position,
    collisionBlocks,
    coinBlocks,
    TBlock1,
    imageSrc,
    frameRate,
    scale = 0.5,
    animations,
  }) {
    super({ imageSrc, frameRate, scale })
    this.position = position
    this.velocity = {
      x: 0,
      y: 50,
    }
    this.iskill = true
    this.isWin = false
    this.collisionBlocks = collisionBlocks
    this.coinBlocks = coinBlocks
    this.TBlock1 = TBlock1
    this.hitbox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: 10,
      height: 10,
    }

    this.animations = animations
    this.lastDirection = 'right'

    for (let key in this.animations) {
      const image = new Image()
      image.src = this.animations[key].imageSrc

      this.animations[key].image = image
    }

    this.camerabox = {
      position: {
        x: this.position.x,
        y: this.position.y,
      },
      width: 200,
      height: 80,
    }
  }

  switchSprite(key) {
    if (this.image === this.animations[key].image || !this.loaded) return

    this.currentFrame = 0
    this.image = this.animations[key].image
    this.frameBuffer = this.animations[key].frameBuffer
    this.frameRate = this.animations[key].frameRate
  }

  // updateCamerabox() {
  //   this.camerabox = {
  //     position: {
  //       x: this.position.x - 50,
  //       y: this.position.y - 20,
  //     },
  //     width: 150,
  //     height: 150,
  //   }
  // }

  checkForHorizontalCanvasCollision() {
    if (
      this.hitbox.position.x + this.hitbox.width + this.velocity.x >= canvas.width ||
      this.hitbox.position.x + this.velocity.x <= 0
    ) {
      this.velocity.x = 0
    }
  }

  update() {
    this.updateFrames()
    this.updateHitbox()

    //this.updateCamerabox()
    this.draw()
    this.position.x += this.velocity.x
    this.updateHitbox()
    this.checkForHorizontalCollisions()
    this.checkForHorizontalCoin()
    this.checkForHorizontalLiftColBats()
    this.checkForHorizontalLift2Block()
    this.checkForHorizontalPortal()
    this.applyGravity()
    this.updateHitbox()
    this.checkForVerticalCollisions()
    this.checkForVerticalTBlock()
    this.checkForVerticalWBlock()
    this.checkForHorizontalCol()
    this.checkForHorizontalLiftBlock()
    this.checkForVerticalLiftBlock()
    this.checkForVerticalLiftColBat()
    this.checkForVerticalLift2Block()
    this.checkForVerticalGBlock()
  }

  updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + 10,
        y: this.position.y + 10,
      },
      width: 50,
      height: 64,
    }
  }


  checkForVerticalGBlock() {
    for (let i = 0; i < GBlocks.length; i++) {
      const collisionBlock = GBlocks[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0

          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height

          this.position.y = collisionBlock.position.y - offset - 0.01
          this.velocity.x = 0;
          this.iskill = false;
          player2.switchSprite('killF')
          player2.lastDirection = 'right'
          break
        }

        if (this.velocity.y < 0) {
          this.velocity.y = 0

          const offset = this.hitbox.position.y - this.position.y

          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01
          break
        }
      }
    }

  }



  checkForHorizontalPortal() {
    for (let i = 0; i < Portals.length; i++) {
      const coinBlock = Portals[i]

      if (
        collision({
          object1: this.hitbox,
          object2: coinBlock,
        })
      ) {
        if (this.velocity.x > 0) {
          this.velocity.x = 0

          // const offset =
          //   this.hitbox.position.x - this.position.x + this.hitbox.width

          // this.position.x = coinBlock.position.x - offset - 0.01
          this.isWin = true
          //this.iskill = true
          break
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0

          // const offset = this.hitbox.position.x - this.position.x

          // this.position.x =
          //   coinBlock.position.x + coinBlock.width - offset + 0.01
          this.isWin = true
          //this.iskill = true
          break
        }
      }
    }
  }



  checkForVerticalCollisions() {
    for (let i = 0; i < this.coinBlocks.length; i++) {
      const collisionBlock = this.coinBlocks[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0

          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height

          this.position.y = collisionBlock.position.y - offset - 0.01

          coinBlocks.splice(i, 1);
          break
        }

        if (this.velocity.y < 0) {
          this.velocity.y = 0

          const offset = this.hitbox.position.y - this.position.y

          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01
          coinBlocks.splice(i, 1);
          break
        }
      }
    }

  }

  checkForVerticalWBlock() {


    for (let i = 0; i < WBlocks.length; i++) {
      const collisionBlock = WBlocks[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0

          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height

          this.position.y = collisionBlock.position.y - offset - 0.01
          this.velocity.x = 0;
          break
        }

        // if (this.velocity.y < 0) {
        //   this.velocity.y = 0

        //   const offset = this.hitbox.position.y - this.position.y

        //   this.position.y =
        //     collisionBlock.position.y + collisionBlock.height - offset + 0.01
        //     alert("b");
        //   break
        // }
      }
    }

  }




  checkForVerticalTBlock() {


    for (let i = 0; i < TBlocks1.length; i++) {
      const collisionBlock = TBlocks1[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0

          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height

          this.position.y = collisionBlock.position.y - offset - 0.01
          this.velocity.x = 0;
          this.iskill = false;
          player2.switchSprite('killF')
          player2.lastDirection = 'right'
          break
        }

        // if (this.velocity.y < 0) {
        //   this.velocity.y = 0

        //   const offset = this.hitbox.position.y - this.position.y

        //   this.position.y =
        //     collisionBlock.position.y + collisionBlock.height - offset + 0.01
        //     alert("b");
        //   break
        // }
      }
    }

  }


  checkForHorizontalCol() {
    for (let i = 0; i < LiftCols.length; i++) {
      const coinBlock = LiftCols[i]

      if (
        collision({
          object1: this.hitbox,
          object2: coinBlock,
        })
      ) {
        if (this.velocity.x > 0) {
          this.velocity.x = 0

          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width
          coinBlock.LiftCheck(false);
          //this.position.x = coinBlock.position.x - offset - 0.01
          //alert("b");
          break
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0

          const offset = this.hitbox.position.x - this.position.x
          coinBlock.LiftCheck(true);
          //this.position.x = coinBlock.position.x + coinBlock.width - offset + 0.01
          //alert("a");
          break
        }
      }
    }
  }

  checkForHorizontalCoin() {
    for (let i = 0; i < BlueCoins.length; i++) {
      const coinBlock = BlueCoins[i]

      if (
        collision({
          object1: this.hitbox,
          object2: coinBlock,
        })
      ) {
        if (this.velocity.x > 0) {
          CoindSound()
          this.velocity.x = 0

          // const offset =
          //   this.hitbox.position.x - this.position.x + this.hitbox.width

          // this.position.x = coinBlock.position.x - offset - 0.01
          BlueCoins.splice(i, 1);
          BlueCoinCount++
          break
        }

        if (this.velocity.x < 0) {
          CoindSound()
          this.velocity.x = 0

          // const offset = this.hitbox.position.x - this.position.x

          // this.position.x =
          //   coinBlock.position.x + coinBlock.width - offset + 0.01
          BlueCoins.splice(i, 1);
          BlueCoinCount++
          break
        }
      }
    }
  }




  checkForHorizontalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.x > 0) {
          this.velocity.x = 0

          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width

          this.position.x = collisionBlock.position.x - offset - 0.01
          break
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0

          const offset = this.hitbox.position.x - this.position.x

          this.position.x =
            collisionBlock.position.x + collisionBlock.width - offset + 0.01
          break
        }
      }
    }
  }

  applyGravity() {
    this.velocity.y += gravity
    this.position.y += this.velocity.y
  }
  //Lift


  checkForHorizontalLiftBlock() {
    for (let i = 0; i < LiftBlocks.length; i++) {
      const collisionBlock = LiftBlocks[i]
      if (!collisionBlock.VerticanAndHorizontal) {
        //alert("a")
        return
      }

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.x > 0) {
          this.velocity.x = 0

          const offset =
            this.hitbox.position.x - this.position.x + this.hitbox.width

          //this.position.x = collisionBlock.position.x - offset - 0.01
          break
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0

          const offset = this.hitbox.position.x - this.position.x

          this.position.x =
            collisionBlock.position.x + collisionBlock.width - offset + 0.01
          //alert("a")
          break
        }
      }
    }
  }




  checkForVerticalLiftBlock() {
    for (let i = 0; i < LiftBlocks.length; i++) {
      const collisionBlock = LiftBlocks[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0

          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height

          this.position.y = collisionBlock.position.y - offset - 0.01
          //alert("a")
          collisionBlock.VerticanAndHorizontal = false
          break
        }
        else if (!collisionBlock.VerticanAndHorizontal) {
          collisionBlock.VerticanAndHorizontal = true
        }


        if (this.velocity.y < 0) {
          this.velocity.y = 0

          const offset = this.hitbox.position.y - this.position.y

          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01
          break
        }
      }
    }

  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0

          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height

          this.position.y = collisionBlock.position.y - offset - 0.01
          break
        }

        if (this.velocity.y < 0) {
          this.velocity.y = 0

          const offset = this.hitbox.position.y - this.position.y

          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01
          break
        }
      }
    }

  }




  // Lift2 block
  checkForVerticalLift2Block() {
    for (let i = 0; i < Lift2Blocks.length; i++) {
      const collisionBlock = Lift2Blocks[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0

          const offset =
            this.hitbox.position.y - this.position.y + this.hitbox.height

          this.position.y = collisionBlock.position.y - offset - 0.01
          //alert("a")
          collisionBlock.VerticanAndHorizontal = false
          break
        }
        else if (!collisionBlock.VerticanAndHorizontal) {
          collisionBlock.VerticanAndHorizontal = true
        }


        if (this.velocity.y < 0) {
          this.velocity.y = 0

          const offset = this.hitbox.position.y - this.position.y

          this.position.y =
            collisionBlock.position.y + collisionBlock.height - offset + 0.01
          break
        }
      }
    }
  }


  checkForHorizontalLift2Block() {
    for (let i = 0; i < Lift2Blocks.length; i++) {
      const collisionBlock = Lift2Blocks[i]
      if (!collisionBlock.VerticanAndHorizontal) {

        return
      }

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {
        if (this.velocity.x > 0) {
          this.velocity.x = 0
          const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
          this.position.x = collisionBlock.position.x - offset - 0.01
          break
        }

        // if (this.velocity.x < 0) {
        //   this.velocity.x = 0

        //   const offset = this.hitbox.position.x - this.position.x

        //   this.position.x =
        //     collisionBlock.position.x + collisionBlock.width - offset + 0.01
        //   //alert("a")
        //   break
        // }
      }
    }
  }

  checkForHorizontalLiftColBats() {
    for (let i = 0; i < LiftColBats.length; i++) {
      const coinBlock = LiftColBats[i]

      if (
        collision({
          object1: this.hitbox,
          object2: coinBlock,
        })) {
        //alert("a");
        if (this.velocity.x > 0) {
          this.velocity.x = 0
          this.CheckBat = true;
          coinBlock.LiftCheck(true);
          const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
          //this.position.x = coinBlock.position.x - offset - 0.01
          //alert("a")
          //alert("b");
          break
        }

        if (this.velocity.x < 0) {
          this.velocity.x = 0

          coinBlock.LiftCheck(true);
          this.CheckBat = true;
          const offset = this.hitbox.position.x - this.position.x
          // this.position.x = coinBlock.position.x + coinBlock.width - offset + 0.01
          //alert("a");
          break
        }
      }
      else if (this.CheckBat) {
        coinBlock.LiftCheck(false);
        this.CheckBat = false;
        //alert("a")
      }
    }
  }

  checkForVerticalLiftColBat() {
    for (let i = 0; i < LiftColBats.length; i++) {
      const collisionBlock = LiftColBats[i]

      if (
        collision({
          object1: this.hitbox,
          object2: collisionBlock,
        })
      ) {

        if (this.velocity.y > 0) {
          this.velocity.y = 0
          this.CheckBat = true;
          collisionBlock.LiftCheck(true);
          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
          this.position.y = collisionBlock.position.y - offset - 0.01
          break
        }
        // if (this.velocity.y < 0) {
        //   this.velocity.y = 0

        //   const offset = this.hitbox.position.y - this.position.y

        //   // this.position.y =
        //   //   collisionBlock.position.y + collisionBlock.height - offset + 0.01
        //   break
        // }
      }
      else if (this.CheckBat) {
        collisionBlock.LiftCheck(false);
        this.CheckBat = false;
        //alert("a")
      }
    }

  }



}
