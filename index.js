////////

async function CoindSound() {
  var audio = new Audio('Music/scale.mp3');
  audio.play()
}


var audio = new Audio('Music/Wallpaper.mp3');



async function PlayMusic() {
  audio.play();
  audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    audio.play();
    
  });


}

PlayMusic()

/////////


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var modal = document.getElementById("myModal");
var RedCoinCount = 0
var BlueCoinCount = 0
canvas.width = 1450
canvas.height = 900

const scaledCanvas = {
  width: canvas.width / 2,
  height: canvas.height / 2,
}

const CoinCollisions2D = []
for (let index = 0; index < CoinCollisions.length; index += 63) {
  CoinCollisions2D.push(CoinCollisions.slice(index, index + 63))

}


const floorCollisions2D = []
for (let i = 0; i < CoinCollisions.length; i += 63) {
  floorCollisions2D.push(CoinCollisions.slice(i, i + 63))
}

var TBlocks1 = []
var WBlocks = []
const coinBlocks = []
const collisionBlocks = []
var LiftBlocks = []
var BlueCoins = []
var Portals = []
var GBlocks = []
var Lift2Blocks = []
var LiftCols = []
var LiftColBats = []

var player = new Player({
  position: {
    x: 100,
    y: 800,
  },
  collisionBlocks,
  coinBlocks,
  TBlocks1,
  imageSrc: './img/warrior/Idle.png',
  frameRate: 1,
  animations: {
    Idle: {
      imageSrc: './img/warrior/Idle.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    Run: {
      imageSrc: './img/warrior/Run.png',
      frameRate: 4,
      frameBuffer: 7,
    },
    Jump: {
      imageSrc: './img/warrior/Jump.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    Fall: {
      imageSrc: './img/warrior/Fall.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    FallLeft: {
      imageSrc: './img/warrior/Fall.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    RunLeft: {
      imageSrc: './img/warrior/RunLeft.png',
      frameRate: 4,
      frameBuffer: 7,
    },
    IdleLeft: {
      imageSrc: './img/warrior/IdleLeft.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    JumpLeft: {
      imageSrc: './img/warrior/Jump.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    killF: {
      imageSrc: './img/foggy.png',
      frameRate: 1,
      frameBuffer: 1,
    }
  },
})


// palyer 2

var player2 = new Player2({
  position: {
    x: 100,
    y: 700,
  },
  collisionBlocks,
  coinBlocks,
  TBlocks1,
  imageSrc: './player2/idle2.png',
  frameRate: 1,
  animations: {
    Idle: {
      imageSrc: './player2/idle2.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    Run: {
      imageSrc: './player2/Run2.png',
      frameRate: 4,
      frameBuffer: 7,
    },
    Jump: {
      imageSrc: './player2/Jump2.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    Fall: {
      imageSrc: './player2/Fall2.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    FallLeft: {
      imageSrc: './player2/Fall2.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    RunLeft: {
      imageSrc: './player2/RunLeft2.png',
      frameRate: 4,
      frameBuffer: 7,
    },
    IdleLeft: {
      imageSrc: './player2/IdleLeft2.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    JumpLeft: {
      imageSrc: './player2/Jump2.png',
      frameRate: 1,
      frameBuffer: 3,
    },
    killF: {
      imageSrc: './img/foggy.png',
      frameRate: 1,
      frameBuffer: 1,
    }
  },
})


floorCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol == 1) {
      collisionBlocks.push(
        new CollisionBlock({
          position: {
            x: x * 23,
            y: y * 23,
          },
        })
      )
    }
    else if (symbol == 2) {
      coinBlocks.push(
        new CoinBlock({
          position: {
            x: x * 23,
            y: y * 23,
          },
        })
      )
    }
    else if (symbol == 3) {
      TBlocks1.push(
        new TBlock(
          {
            position: {
              x: x * 23,
              y: y * 23,
            },
          }
        )

      )
    }
    else if (symbol == 4) {
      LiftBlocks.push(
        new LiftBlock(
          {
            position: {
              x: x * 23,
              y: y * 23,
            },
          }
        )
      )
    }
    else if (symbol == 5) {
      LiftCols.push(
        new LiftCol(
          {
            position: {
              x: x * 23,
              y: y * 23,
            }
          },
        )
      )
    }
    else if (symbol == 6) {
      WBlocks.push(
        new WBlock(
          {
            position: {
              x: x * 23,
              y: y * 23,
            }
          }
        )
      )
    }
    else if (symbol == 7) {
      LiftColBats.push(
        new LiftColBat(
          {
            position: {
              x: x * 23,
              y: y * 23,
            }
          }
        )
      )
    }
    else if (symbol == 8) {
      Lift2Blocks.push(
        new Lift2Block(
          {
            position: {
              x: x * 23,
              y: y * 23,
            }
          }
        )
      )
    }
    else if (symbol == 9) {
      BlueCoins.push(
        new BlueCoinBlock(
          {
            position: {
              x: x * 23,
              y: y * 23,
            }
          }
        )
      )
    }
    else if (symbol == 10) {
      Portals.push(
        new PortalBlock(
          {
            position: {
              x: x * 23,
              y: y * 23,
            }
          }
        )
      )
    }
    else if (symbol == 11) {
      GBlocks.push(
        new GBlock(
          {
            position: {
              x: x * 23,
              y: y * 23,
            }
          }
        )
      )
    }

  })

})


const gravity = 0.1

const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
}

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './img/png 1.png',
})

const backgroundImageHeight = 700
var ISGlobal = true;
var ISGlobal2 = true;
function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.save()
  background.update()
  Portals.forEach((P) => {
    P.update()
  })
  player.checkForHorizontalCanvasCollision()
  player.update()
  player2.checkForHorizontalCanvasCollision()
  player2.update()
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.update()
  })
  // c.scale(4, 4)
  coinBlocks.forEach((C1) => {
    C1.update()
  })

  TBlocks1.forEach((T) => {
    T.update()
  })
  LiftBlocks.forEach((L) => {
    L.update(ISGlobal)
  })
  Lift2Blocks.forEach((L2B) => {
    L2B.update(ISGlobal2)
  })
  LiftCols.forEach((LC) => {
    LC.update()
  })
  WBlocks.forEach((WB) => {
    WB.update()
  })
  LiftColBats.forEach((LCB) => {
    LCB.update(this.ISGlobal2)
  })
  BlueCoins.forEach((BC) => {
    BC.update()
  })
  GBlocks.forEach((GB) => {
    GB.update()
  })



  player.velocity.x = 0

  if (player.isWin && player2.isWin) {

    keys.w.pressed = true
    keys.ArrowUp.pressed = true;
    player.switchSprite("Idle")
    player2.switchSprite("Idle")
    modal.style.display = "block";
    let RedC = document.getElementById('RedC');
    RedC.innerHTML = `3/${RedCoinCount}`
    let BlueC = document.getElementById('BlueC');

    BlueC.innerHTML = `3/${BlueCoinCount}`
    clearInterval(intervalId);
    return
  }
  else if (player.iskill && player2.iskill) {


    if (keys.d.pressed) {
      player.switchSprite('Run')
      player.velocity.x = 3
      player.lastDirection = 'right'
      //  player.shouldPanCameraToTheLeft({ canvas})
    }
    // else if (keys.w.pressed){
    //   keys.w.pressed = false;
    // } 
    else if (keys.a.pressed) {
      player.switchSprite('RunLeft')
      player.velocity.x = -3
      player.lastDirection = 'left'
      // player.shouldPanCameraToTheRight({ canvas})
    } else if (player.velocity.y == 0) {
      if (player.lastDirection == 'right') player.switchSprite('Idle')
      else player.switchSprite('IdleLeft')
    }

    if (player.velocity.y < 0) {
      //player.shouldPanCameraDown({ camera, canvas })
      if (player.lastDirection == 'right') player.switchSprite('Jump')
      else player.switchSprite('JumpLeft')
    } else if (player.velocity.y > 0) {
      //player.shouldPanCameraUp({ camera, canvas })
      if (player.lastDirection == 'right') player.switchSprite('Fall')
      else player.switchSprite('FallLeft')
    }
    Player2Key()
  }
  else if (!player.iskill || !player2.iskill) {
    keys.w.pressed = true
    keys.ArrowUp.pressed = true;
    GameOver();
    clearInterval(intervalId);

  }


  c.restore()

}

animate()


function Player2Key() {


  player2.velocity.x = 0
  if (player2.iskill) {


    if (keys.ArrowRight.pressed) {
      player2.switchSprite('Run')
      player2.velocity.x = 3
      player2.lastDirection = 'right'
      //  player.shouldPanCameraToTheLeft({ canvas})
    }
    // else if (keys.w.pressed){
    //   keys.w.pressed = false;
    // } 
    else if (keys.ArrowLeft.pressed) {
      player2.switchSprite('RunLeft')
      player2.velocity.x = -3
      player2.lastDirection = 'left'
      // player.shouldPanCameraToTheRight({ canvas})
    } else if (player2.velocity.y == 0) {
      if (player2.lastDirection == 'right') player2.switchSprite('Idle')
      else player2.switchSprite('IdleLeft')
    }

    if (player2.velocity.y < 0) {
      //player.shouldPanCameraDown({ camera, canvas })
      if (player2.lastDirection == 'right') player2.switchSprite('Jump')
      else player2.switchSprite('JumpLeft')
    } else if (player2.velocity.y > 0) {
      //player.shouldPanCameraUp({ camera, canvas })
      if (player2.lastDirection == 'right') player2.switchSprite('Fall')
      else player2.switchSprite('FallLeft')
    }
  }
}


window.addEventListener('keydown', (event) => {

  switch (event.key) {
    case 'd':
      keys.d.pressed = true
      break
    case 'a':
      keys.a.pressed = true
      break
    case 'w':
      if (player.velocity.y == 0 && player.iskill && !keys.w.pressed) {

        player.velocity.y = -5
        keys.w.pressed = true
      }
      break
    case 'ArrowUp':
      if (player2.velocity.y == 0 && player2.iskill && !keys.ArrowUp.pressed) {
        player2.velocity.y = -5
        keys.ArrowUp.pressed = true
      }
      break
    case 'ArrowRight':
      keys.ArrowRight.pressed = true
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true
      break
  }
  //alert(event.key)
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 'w':
      keys.w.pressed = false
      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
    case 'ArrowUp':
      keys.ArrowUp.pressed = false
      break
  }
})

/////////////////////////////////////////////////////////////////
// var soundSpin = new Audio('./Music/Wallpaper.mp3');
// soundSpin.muted = false;
// soundSpin.play();

// // soundSpin.addEventListener('ended', function () {
// //   soundSpin.currentTime = 0;
// //   soundSpin.play();
// // }, true);




var btn = document.getElementById("myBtn");
var MIN_SEC = document.getElementById("Sec_Min");
let Section = 0;
let Minute = 0;

var intervalId = setInterval(() => {
  Section_Clock()
}, 1000);


let Min = Minute_Clock();

function Section_Clock() {
  // console.log(Section.length)
  if (Section.toString().length > 1) {
    if (Section > 59) {
      Section = 0
      Minute++
      Min = Minute_Clock()
      MIN_SEC.innerHTML = `${Min}:${Section}`
    }
    else {
      MIN_SEC.innerHTML = `${Min}:${Section}`
    }
  }
  else {
    MIN_SEC.innerHTML = `${Min}:0${Section}`
  }
  Section++;
}

function GameOver() {
  let Wik = document.getElementById('Wik')
  Wik.innerHTML = "GAME OVER"
  modal.style.display = "flex"
}
function Minute_Clock() {
  if (Minute.toString().length > 1) {
    return Minute.toString()
  }
  else {
    return `0${Minute}`
  }
}



var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  location.reload();
  modal.style.display = "none";
}


