const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;

let snake = [];
let direction = null;
let food = {};
let score = 0;
let gameInterval;

const eatSound = document.getElementById("eatSound");
const deadSound = document.getElementById("deadSound");
const scoreDisplay = document.getElementById("score");

document.addEventListener("keydown", e => changeDirection(e.key));

function changeDirection(key) {
  const opposite = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
  const newDir = { ArrowUp: "UP", ArrowDown: "DOWN", ArrowLeft: "LEFT", ArrowRight: "RIGHT" }[key];
  if (newDir && direction !== opposite[newDir]) {
    direction = newDir;
  }
}

function spawnFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
  };
}

function restartGame() {
  clearInterval(gameInterval);
  score = 0;
  direction = null;
  snake = [{ x: 9 * box, y: 10 * box }];
  food = spawnFood();
  scoreDisplay.textContent = score;
  gameInterval = setInterval(draw, 120);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // Move snake
  let head = { ...snake[0] };
  if (direction === "LEFT") head.x -= box;
  else if (direction === "RIGHT") head.x += box;
  else if (direction === "UP") head.y -= box;
  else if (direction === "DOWN") head.y += box;
  else return; // no direction yet

  // Check collision
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    clearInterval(gameInterval);
    deadSound.play();
    return;
  }

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    snake.unshift(head);
    score++;
    scoreDisplay.textContent = score;
    food = spawnFood();
    eatSound.play();
  } else {
    snake.pop();
    snake.unshift(head);
  }
}

// 绑定触屏按钮事件，避免 iOS 延迟
document.getElementById("up").addEventListener("touchstart", () => changeDirection("ArrowUp"));
document.getElementById("down").addEventListener("touchstart", () => changeDirection("ArrowDown"));
document.getElementById("left").addEventListener("touchstart", () => changeDirection("ArrowLeft"));
document.getElementById("right").addEventListener("touchstart", () => changeDirection("ArrowRight"));
document.getElementById("restart").addEventListener("touchstart", restartGame);

// 启动游戏
restartGame();
