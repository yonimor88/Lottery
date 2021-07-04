import React, { Component } from 'react'

export default class Ball extends Component {
    render() {
        return (
            <div className="Ball">
                {this.props.num}
            </div>
        )
    }
}
