var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var starCount = Math.floor(Math.random()*500)+250;
var stars = [];
CreateStars(stars, starCount, canvas.width, canvas.height);

function Animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for (var star = 0; star < stars.length; star++) {
        DrawStar(stars[star]);
        MoveStar(stars[star]);
    }
    requestAnimationFrame(Animate);
}
Animate();