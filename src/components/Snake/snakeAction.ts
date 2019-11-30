import { Snake } from "./snake";
import { Game } from "../game";

export class SnakeAction {
    constructor(public game: Game) {

    }
    eatBall(coordinate: { x: number, y: number }) {
        let ballCoordinate = this.game.ball.coordinate;
        if ((coordinate.x >= ballCoordinate.x && coordinate.x <= ballCoordinate.x) && (coordinate.y >= ballCoordinate.y && coordinate.y <= ballCoordinate.y)) {
            this.game.ball.genericBall();
            this.game.snake.addBlocks();
        }
    }
}