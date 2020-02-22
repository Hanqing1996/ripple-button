import React, { Component } from 'react';
import './button.css'

export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            spanStyle: {}
        }
        this.activeCircle = (e) => {
            const button = this.refs.button
            const { left, top } = button.getBoundingClientRect()

            this.setState({
                active: true,
                spanStyle: {
                    left:e.clientX - left-10,
                    top:e.clientY - top-10
                }
            })
        }
        this.deactiveCircle=()=>{
            this.setState({
                active: false
            })
        }
    };
    render() {
        return (
            <button className="Button" ref="button" onClick={(e) => { this.activeCircle(e) }}>
                按钮
                {this.state.active ? <span className='circle' onAnimationEnd={this.deactiveCircle} style={this.state.spanStyle}></span> : ''}
            </button>
        );
    }
}
