import React from 'react';
import '../index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <button
                key={this.props.index}
                onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


class Board extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     squares: Array(9).fill(null),
        //     isNext: true,
        // }
    }

    // handleClick(i) {
    //     let squares = this.state.squares.slice();
    //     //已经填写过了或者游戏已经结束
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //     }

    //     squares[i] = this.state.isNext ? 'X' : 'O';
    //     this.setState({
    //         squares: squares,
    //         isNext: !this.state.isNext,
    //     });
    // }
    renderSquare(i) {
        return <Square
            index={i}
            key={i}
            value={this.props.squares[i]}
            onClick={() => this.props.handleClick(i)}
        />
    }


    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            isNext: true,
            curStep: 0,
        }
    }

    handleClick(i) {

        let history = this.state.history.slice(0, this.state.curStep + 1);
        let current = history[history.length - 1];
        let squares = current.squares.slice();
        //已经填写过了或者游戏已经结束
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.isNext ? 'X' : 'O';

        let newHistory = history.concat([{
            squares: squares
        }]);
        this.setState({
            history: newHistory,
            isNext: !this.state.isNext,
            curStep: history.length,
        });
    }

    jumpTo(index) {
        // this.setState({
        //     ...this.state, curStep: index
        // })
        this.setState({
            curStep: index,
            isNext: (index % 2) === 0
        });
    }
    render() {
        let history = this.state.history;
        let current = history[this.state.curStep];
        const winner = calculateWinner(current.squares);

        const move = history.map((item, index) => {
            const desc = index ?
                'Go to Move #' + index :
                'Go to game start';
            return (
                <li>
                    <button className="jumpButton" onClick={() => this.jumpTo(index)}>{desc}</button>
                </li>
            );
        })

        let status;
        if (winner) {
            status = "winner " + winner;
        } else {
            status = `Next player : ${this.state.isNext ? 'X' : 'O'}`;
        }
        return (
            <div>
                <Board
                    squares={current.squares}
                    handleClick={(i) => this.handleClick(i)} />
                <div>
                    <div>{status}</div>
                    <ol>{move}</ol>
                </div>
            </div>

        );
    }
}

export default Game;