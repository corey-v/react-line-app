import React, { Component } from 'react';
import './DrawingCanvas.css';
import { TwitterPicker } from 'react-color';

class DrawingCanvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastClick: [0, 0],
            clicks: 0,
            color: '#000000'
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }

    handleChangeComplete(newColor) {
        this.setState({ color: newColor.hex });
    }

    handleClick(e) {
        let canvas = this.refs.canvas;
        if (this.state.clicks === 0) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;

        }
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;

        let context = this.refs.canvas.getContext('2d');

        if (this.state.clicks > 0) {
            context.beginPath();
            context.moveTo(this.state.lastClick[0], this.state.lastClick[1]);
            context.lineTo(x, y);
            context.strokeStyle = this.state.color;
            context.stroke();
        } else {
            this.setState({
                clicks: 1
            });
        }

        this.setState({
            lastClick: [x, y]
        })

    }

    render() {
        return (
            <div>
                <canvas id="canvas1" ref="canvas" onClick={this.handleClick}></canvas>
                <TwitterPicker className="twitterPicker" onChangeComplete={this.handleChangeComplete} />
            </div>
        )
    }

}

export default DrawingCanvas;