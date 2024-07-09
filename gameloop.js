function gameLoop() {
  update();
  render();
  requestAnimationFrame (gameLoop);
}
function update() {
}

function render() {
  ctx.clearRect(0,0, canvas.width,
canvas.height);

  ctx.fillstyle = 'blue';
  ctx.fillRect(50, 50, 100, 100);
}
gameLoop();
