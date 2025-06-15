const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasSize = 400;
canvas.width = canvasSize;
canvas.height = canvasSize;

let snake = [{ x: 9 * box, y: 9 * box }];
let direction = "RIGHT";
let apple = spawnApple();
let score = 0;
let game;
let isDead = false;

const eatSound = new Audio("eat.mp3");
const dieSound = new Audio("die.mp3");

function spawnApple() {
  let newApple;
  do {
    newApple = {
      x: Math.floor(Math.random() * (canvas.width / box)) * box,
      y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
  } while (snake.some(s => s.x === newApple.x && s.y === newApple.y));
  return newApple;
}

function draw() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 画蛇
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeStyle = "black";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  // 画苹果
  ctx.fillStyle = "red";
  ctx.fillRect(apple.x, apple.y, box, box);

  // 显示分数
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 390);
}

function update() {
  if (isDead) return;

  let head = { x: snake[0].x, y: snake[0].y };

  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;

  // 碰墙或自己
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height ||
    snake.some((s, i) => i !== 0 && s.x === head.x && s.y === head.y)
  ) {
    clearInterval(game);
    isDead = true;
    dieSound.play();
    return;
  }

  snake.unshift(head);

  // 吃苹果
  if (head.x === apple.x && head.y === apple.y) {
    score++;
    eatSound.play();
    apple = spawnApple();
  } else {
    snake.pop();
  }

  draw();
}

function changeDirection(key) {
  const opposites = {
    LEFT: "RIGHT",
    RIGHT: "LEFT",
    UP: "DOWN",
    DOWN: "UP"
  };

  const newDir = {
    ArrowLeft: "LEFT",
    ArrowRight: "RIGHT",
    ArrowUp: "UP",
    ArrowDown: "DOWN"
  }[key];

  if (newDir && newDir !== opposites[direction]) {
    direction = newDir;
  }
}

document.addEventListener("keydown", e => changeDirection(e.key));

// ✅ 触屏按键支持
["up", "down", "left", "right", "restart"].forEach(id => {
  const btn = document.getElementById(id);
  btn.addEventListener("touchstart", e => {
    e.preventDefault();
    const keyMap = {
      up: "ArrowUp",
      down: "ArrowDown",
      left: "ArrowLeft",
      right: "ArrowRight"
    };

    if (id === "restart") restartGame();
    else changeDirection(keyMap[id]);
  }, { passive: false });
});

function restartGame() {
  snake = [{ x: 9 * box, y: 9 * box }];
  direction = "RIGHT";
  apple = spawnApple();
  score = 0;
  isDead = false;
  clearInterval(game);
  game = setInterval(update, 500);
  draw();
}

// 初始开始游戏
game = setInterval(update, 500);
draw();
