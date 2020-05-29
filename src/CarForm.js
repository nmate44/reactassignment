import React, { Component } from "react";
import { connect } from 'react-redux';

class CarForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const manufacturer = this.getManufacturer.value;
        const name = this.getName.value;
        const horsepower = this.getHorsepower.value;

        const data = {
            id: new Date(),
            manufacturer,
            name,
            horsepower,
            isEdited: false
        }
        this.props.dispatch({type:'ADD_CAR', data});
        this.getManufacturer.value = '';
        this.getName.value = '';
        this.getHorsepower.value = '';
    }

    render() {
        return (
            <div>
                <h2>Add a Car</h2>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" ref={(input) => this.getManufacturer = input} placeholder="Manufacturer"/><br />
                    <input required type="text" ref={(input) => this.getName = input} placeholder="Name"/><br />
                    <input required type="number" ref={(input) => this.getHorsepower = input} placeholder="Horsepower"/><br />
                    <button>Add Car</button>
                </form>
            </div>
        );
    }
}

export default connect()(CarForm);
