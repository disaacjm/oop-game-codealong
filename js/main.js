class Player {
  constructor() {
    this.width = 20;
    this.height = 10;
    this.positionX = 50 - this.width / 2;
    this.positionY = 0;

    this.domElement = null;

    this.createDomElement();
  }

  createDomElement() {
    this.domElement = document.createElement("div");

    // step2: add content or modify (ex. innerHTML...)
    this.domElement.id = "player";
    this.domElement.innerText = "This is the player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  moveLeft() {
    this.positionX--;
    this.domElement.style.left = this.positionX + "vw";
    console.log(`new position.... ${this.positionX}`);
  }
  moveRight() {
    this.positionX++;
    this.domElement.style.left = this.positionX + "vw";
    console.log(`new position.... ${this.positionX}`);
  }

  moveUp() {
    this.positionY++;
    this.domElement.style.bottom = this.positionY + "vh";
    console.log(`new position.... ${this.positionY}`);
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
    console.log(`new position.... ${this.positionY}`);
  }
}

class Obstacle {
  constructor() {
    this.width = 20;
    this.height = 10;
    this.positionX = 50 - this.width / 2;
    this.positionY = 100;
    this.domElement = null;

    this.createDomElement();
  }
  createDomElement() {
    // step1: create the element
    this.domElement = document.createElement("div");

    // step2: add content or modify (ex. innerHTML...)
    this.domElement.className = "obstacle";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";

    //step3: append to the dom: `parentElm.appendChild()`
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }
  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";
  }
}

const player = new Player();
const obstaclesArr = [];

// Create new obstacles
setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
}, 4000);

// Move all obstacles
setInterval(() => {
  obstaclesArr.forEach((obstacleInstance) => {
    // Move current obstacle
    obstacleInstance.moveDown();

    // Detect collision
    if (
      obstacleInstance.positionX < player.positionX + player.width &&
      obstacleInstance.positionX + obstacleInstance.width > player.positionX &&
      obstacleInstance.positionY < player.positionY + player.height &&
      obstacleInstance.height + obstacleInstance.positionY > player.positionY
    ) {
      console.log("game over my fren");
      location.href = "./gameover.html";
    }

    // Detect if obstacle needs to be removed
    if (obstacleInstance.positionY < 0 - obstacleInstance.height) {
      //1. remove elm from the dom
      obstacleInstance.domElement.remove();

      //2. remove from the array of obstacles
      obstaclesArr.shift(); //remove from the array
    }
  });
}, 60);

// attach event listeners...
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  } else if (event.code === "ArrowUp") {
    player.moveUp();
  } else if (event.code === "ArrowDown") {
    player.moveDown();
  }
});
