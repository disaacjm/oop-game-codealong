class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.width = 10;
    this.height = 10;
    
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
    this.domElement.style.left = this.positionX + "vw"
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

const player = new Player();

// attach event listeners...
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  } else if (event.code === "ArrowUp") {
    player.moveUp()
  } else if (event.code === "ArrowDown") {
    player.moveDown()
  }
});
