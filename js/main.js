import "../css/style.css";
import Player from "./Player";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const player = new Player({
    x: 10,
    y: 10,
});
