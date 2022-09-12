class Star{
  constructor(x,y,size,speed,dir){
    this.x = x,
    this.y = y,
    this.size = size
    this.speed = speed
    this.dir = dir
  }
}
function CreateStars(stars,starCount, maxWidth, maxHeight){
  for (let i = 0; i < starCount; i++) {
    let starX = Math.floor(Math.random()*maxWidth)-10;
    let starY = Math.floor(Math.random()*maxHeight)-10;
    let starSize = Math.floor(Math.random()*5)+3;
    let starSpeed = Math.floor(Math.random()*4)+1;
    let starDir = (Math.random()*0.02)-0.1;
    stars.push(new Star(starX,starY,starSize,starSpeed,starDir));
  }
}