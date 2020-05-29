import React, { Component } from "react";

import { connect } from 'react-redux';

class Car extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.car.manufacturer} {this.props.car.name}</h2>
                <h2>{this.props.car.horsepower} horsepower</h2>

                <button onClick={ () => this.props.dispatch({type: 'EDIT_CAR', id:this.props.car.id}) }>
                    Edit
                </button>
                <button onClick={ () => this.props.dispatch({type: 'DELETE_CAR', id:this.props.car.id}) }>
                    Delete
                </button>
            </div>
        );
    }
}

export default connect()(Car);
