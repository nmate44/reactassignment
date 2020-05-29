import React, { Component } from "react";

class Car extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.car.manufacturer} {this.props.car.name}</h2>
                <h2>{this.props.car.horsepower} horsepower</h2>
            </div>
        );
    }
}

export default Car;
