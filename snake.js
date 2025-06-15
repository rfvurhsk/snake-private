const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let score = 0;
let direction = null;
let snake = [{ x: 9 * box, y: 10 * box }];
let food;

const eatSound = document.getElementById("eatSound");
const deadSound = document.getElementById("deadSound");

function spawnFood() {
  return {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
  };
}

function simulateKey(key) {
  changeDirection(key);
}

function changeDirection(key) {
  if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  else if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

document.addEventListener("keydown", (e) => changeDirection(e.key));

function restartGame() {
  clearInterval(gameLoop);
  score = 0;
  direction = null;
  snake = [{ x: 9 * box, y: 10 * box }];
  food = spawnFood();
  document.getElementById("score").textContent = score;
  gameLoop = setInterval(draw, 150);
}

function collision(head, body) {
  return body.some(part => part.x === head.x && part.y === head.y);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  let head = { x: snake[0].x, y: snake[0].y };

  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;

  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height ||
    collision(head, snake)
  ) {
    clearInterval(gameLoop);
    deadSound.play();
    return;
  }

  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("score").textContent = score;
    food = spawnFood();
    eatSound.play();
  } else {
    snake.pop();
  }

  snake.unshift(head);
}

let gameLoop = setInterval(() => {}, 1000); // 空占位
restartGame();
