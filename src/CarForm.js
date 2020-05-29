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
                    <div className="inputBlock">
                        <label>Car Manufacturer:</label><br />
                        <input required type="text" ref={(input) => this.getManufacturer = input} placeholder="Manufacturer"/><br />
                    </div>

                    <div className="inputBlock">
                        <label>Car Name:</label><br />
                        <input required type="text" ref={(input) => this.getName = input} placeholder="Name"/><br />
                    </div>

                    <div className="inputBlock">
                        <label>Horsepower:</label><br />
                        <input required type="number" ref={(input) => this.getHorsepower = input} placeholder="Horsepower"/><br />
                    </div>

                    <div className="buttonBlock">
                        <button>Add Car</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(CarForm);
