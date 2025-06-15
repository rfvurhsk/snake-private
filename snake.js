
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;
let score = 0;
let snake = [{ x: 9 * box, y: 10 * box }];
let direction = null;
let food = spawnFood();
let gameInterval;

const eatSound = new Audio("apple.mp3");
const deadSound = new Audio("dead.mp3");

function spawnFood() {
  return {
    x: Math.floor(Math.random() * 19) * box,
    y: Math.floor(Math.random() * 19) * box,
  };
}

document.addEventListener("keydown", (e) => changeDirection(e.key));

function changeDirection(key) {
  if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  else if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function restartGame() {
  clearInterval(gameInterval);
  score = 0;
  document.getElementById("score").textContent = score;
  direction = null;
  snake = [{ x: 9 * box, y: 10 * box }];
  food = spawnFood();
  gameInterval = setInterval(draw, 150);
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
    clearInterval(gameInterval);
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

function collision(head, array) {
  return array.some(segment => head.x === segment.x && head.y === segment.y);
}

restartGame();
