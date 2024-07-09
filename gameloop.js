function gameLoop() {
  update();
  render();
  requestAnimationFrame (gameLoop);
}
function update() {
  //Update game state
}

function render() {
  //Draw game graphics
  ctx.clearRect(0,0, canvas.width,
canvas.height);
  //Example: draw a rectangle
  ctx.fillstyle = 'blue';
  ctx.fillRect(50, 50, 100, 100);
}
gameLoop();
