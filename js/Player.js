export default class Player {
    constructor({ x, y, ctx } = { x: 0, y: 0, ctx: null }) {
        this.x = x;
        this.y = y;
    }

    draw(ctx = null) {
        if (ctx) {
            ctx.fillStyle = "red";
            ctx.rect(this.x, this.y, 10, 10);
            ctx.fill();
        } else {
            console.error("Context nor provided!");
        }
    }
}
