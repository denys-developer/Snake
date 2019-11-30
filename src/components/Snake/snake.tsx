import React from 'react';
import { Block } from '../Block/block';
import BlockComponent from '../Block/block';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

import { Game } from '../game';

interface Props {
    game: Game;
}
export class Snake {
    @observable blocks: Block[] = [];
    interval: any;

    constructor() {
        this.blocks.push(new Block('head', { x: 20, y: 0 }), new Block('body', { x: 10, y: 0 }));
        this.startMove('ArrowRight');
    }
    @action addBlocks() {
        var lastblock = this.blocks[this.blocks.length - 1].coordinate;
        this.blocks.push(new Block('body',{x:lastblock.x+10,y:lastblock.y}));
    }
    startMove(key: String) {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            console.log(this.blocks.length);
            var previos = Object.assign({}, this.blocks[0].coordinate);
            var before;
            for (var i = 0; i < this.blocks.length; i++) {
                if (this.blocks[i].type == 'head') {
                    if (key == 'ArrowRight')
                        this.blocks[i].coordinate.x += 10;
                    if (key == 'ArrowDown')
                        this.blocks[i].coordinate.y += 10;
                    if (key == 'ArrowUp')
                        this.blocks[i].coordinate.y -= 10;
                    if (key == 'ArrowLeft')
                        this.blocks[i].coordinate.x -= 10;
                }
                else {

                        before = Object.assign({}, this.blocks[i].coordinate);
                    this.blocks[i].coordinate.x = previos.x;
                    this.blocks[i].coordinate.y = previos.y;
                    previos = Object.assign({}, before);
                }
            }
        }, 200);
    }
}
@observer
export default class SnakeComponent extends React.Component<Props, {}> {
    snake: Snake;
    blocks: JSX.Element[] = [];

    constructor(props: Props) {
        super(props);
        this.snake = this.props.game.snake;

    }
    componentWillMount() {
        document.addEventListener("keydown", (event) => {
            this.snake.startMove(event.key);
        });
    }
    genericBlocks() {
        this.blocks = this.snake.blocks.map((item, index) => {
            return (
                <BlockComponent key={index} block={item} game={this.props.game} />
            )
        })
    }
    render() {
        this.genericBlocks();

        return (
            this.blocks
        )
    }
}