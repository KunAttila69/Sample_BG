class Star{
  constructor(x,y,size,speed,dir){
    this.x = x,
    this.y = y,
    this.size = size,
    this.speed = speed,
    this.dir = dir
  }
}
function CreateStars(stars,starCount, maxWidth, maxHeight){
  for (let i = 0; i < starCount; i++) {
    let starX = Math.floor(Math.random()*maxWidth)-10;
    let starY = Math.floor(Math.random()*maxHeight)-10;
    let starSize = Math.floor(Math.random()*2)+2;
    let starSpeed = Math.floor(Math.random()*3)+1;
    let starDir = (Math.random()*0.02)-0.01;
    stars.push(new Star(starX,starY,starSize,starSpeed,starDir));
  }
}
function DrawStar(star){
  ctx.beginPath();
  ctx.arc(star.x, star.y, star.size*star.speed, 0, 2 * Math.PI);
  //Set color
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.stroke();
}
function MoveStar(star) {
  //X coordinate
  if(star.x > canvas.width+5){
      star.x = -1;
  }
  else if(star.x < -5){
      star.x = canvas.width-1;
  }
  else{
      star.x += star.speed*star.dir;
  }
  star.dir += (Math.random()*0.02)-0.01;

  //Y coordinate
  if (star.y < canvas.height+5) {
      star.y += star.speed;
  }
  else{
      star.y = -5;
  }
}