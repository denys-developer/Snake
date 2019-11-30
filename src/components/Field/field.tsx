import React from 'react';
import SnakeComponent from '../Snake/snake';
import BallComponent from '../Ball/ball';
import './field.css'
import { Game } from '../game';
export class Field extends React.Component {
    game: Game;
    constructor(props: Readonly<{}>) {
        super(props);
        this.game = new Game();
    }
    render() {
        return (
            <svg id="field">
                <SnakeComponent game={this.game}/>
                <BallComponent game={this.game}/>
            </svg>

        )
    }
}