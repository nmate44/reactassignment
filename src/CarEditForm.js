import React, { Component } from "react";
import { connect } from 'react-redux';

class CarEditForm extends Component {

    handleEdit = (event) => {
        event.preventDefault();
        const newManufacturer = this.getManufacturer.value;
        const newName = this.getName.value;
        const newHorsepower = this.getHorsepower.value;

        const data = {
            newManufacturer,
            newName,
            newHorsepower
        };
        this.props.dispatch({ type:'UPDATE', id: this.props.car.id, data: data });
    };

    render() {
        return (
            <div>
                <h2>Add a Car</h2>
                <form onSubmit={this.handleEdit}>
                    <input required type="text"
                           ref={(input) => this.getManufacturer = input}
                           defaultValue={this.props.car.manufacturer}
                           placeholder="Manufacturer"/><br />
                    <input required type="text"
                           ref={(input) => this.getName = input}
                           defaultValue={this.props.car.name}
                           placeholder="Name"/><br />
                    <input required type="number" ref={(input) => this.getHorsepower = input}
                           defaultValue={this.props.car.horsepower}
                           placeholder="Horsepower"/><br />
                    <button>Edit Car</button>
                </form>
            </div>
        );
    }
}

export default connect()(CarEditForm);
