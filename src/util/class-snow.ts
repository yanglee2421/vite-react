import { GetRandom } from "./class-getRandom";
const getRadius = new GetRandom(1, 4);
const getSpeed = new GetRandom(-1, 1);
const getColor = new GetRandom(0.5, 1);
class SnowFlake {
  x = 0;
  y = 0;
  r = 0;
  color = "";
  constructor(private readonly canvas: HTMLCanvasElement) {
    this.reset();
    const getY = new GetRandom(0, this.canvas.height);
    this.y = getY.get();
  }
  get #isShow() {
    const isX = this.x > 0 && this.x < this.canvas.width;
    const isY = this.y > 0 && this.y < this.canvas.height;
    return isX && isY;
  }
  reset() {
    const getX = new GetRandom(0, this.canvas.width);
    this.x = getX.get();
    this.y = 0;
    this.r = getRadius.get();
    this.color = `rgba(255,255,255,${getColor.get()})`;
  }
  draw() {
    const ctx = this.canvas.getContext("2d")!;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.#isShow || this.reset();
    this.x += 0.3;
    this.y += 1;
    this.draw();
  }
}
export class Snow {
  #snowflake: SnowFlake[] = [];
  constructor(private readonly canvas: HTMLCanvasElement, number = 100) {
    for (let i = 0; i < 100; i++) {
      this.#snowflake.push(new SnowFlake(canvas));
    }
  }
  #animationId = 0;
  animation() {
    const ctx = this.canvas.getContext("2d")!;
    const { width, height } = this.canvas;
    this.#animationId = requestAnimationFrame(this.animation.bind(this));
    ctx.clearRect(0, 0, width, height);
    this.#snowflake.forEach((item) => {
      item.update();
    });
  }
  abortAnimation() {
    cancelAnimationFrame(this.#animationId);
  }
}
