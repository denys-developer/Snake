import React from 'react';
import { Game } from '../game';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { string } from 'prop-types';
interface Props {
    game: Game;
}
let mas = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190]
export class Ball {
    @observable coordinate: { x: Number, y: Number } = {
        x: 0,
        y: 0
    }
    constructor() {
    }
    @action genericBall() {
        this.coordinate = {
            x: mas[Math.round(Math.random() * (mas.length - 0) + 0)],
            y: mas[Math.round(Math.random() * (mas.length - 0) + 0)]
        }
    }
}
@observer
export default class BallComponent extends React.Component<Props>{
    
    constructor(props: Props) {
        super(props);
    }
    componentWillMount(){
        this.props.game.ball.genericBall();
    }
    render() {
        var {x,y} = this.props.game.ball.coordinate;
        return (
            <rect x={String(x)} y={String(y)} width="10" height="10" />
        )
    }

}