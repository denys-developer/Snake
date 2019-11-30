import { Snake } from './Snake/snake';
import { Ball } from './Ball/ball';
export class Game {
    snake: Snake;
    ball: Ball;
    constructor() {
        this.snake = new Snake();
        this.ball = new Ball();
    }
}