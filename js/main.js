import "../css/style.css";
import Player from "./Player";

const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

const player = new Player({
    x: 10,
    y: 10,
});

function update() {
    player.draw(ctx);
    requestAnimationFrame(update);
}

update();
