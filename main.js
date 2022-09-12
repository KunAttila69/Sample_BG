var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var starCount = Math.floor(Math.random()*500)+100
var stars = []
CreateStars(stars, starCount, canvas.width, canvas.height)
function DrawStar(star){
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
    ctx.fillStyle = "white"
    ctx.fill()
    ctx.stroke();
    if (star.x < canvas.width+5) {
        star.x += star.speed*star.dir;
        star.dir += (Math.random()*0.02)-0.01;
    }
    else{
        star.x = -5
    }
    if (star.y < canvas.height+5) {
        star.y += star.speed;
    }
    else{
        star.y = -5
    }
}
function Animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for (var star = 0; star < stars.length; star++) {
        DrawStar(stars[star])
    }
    requestAnimationFrame(Animate);
}
Animate()