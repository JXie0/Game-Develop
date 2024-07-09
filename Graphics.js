const img = new Image();
img.src = 'sprite.png';
img.onload = () => { 
  ctx.drawImage(img, 0, 0);
};
