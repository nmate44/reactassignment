import React, { Component } from "react";

class CarForm extends Component {
    render() {
        return (
            <div>
                <h2>Add a Car</h2>
                <form>
                    <input required type="text" placeholder="Manufacturer"/><br />
                    <input required type="text" placeholder="Name"/><br />
                    <input required type="number" placeholder="Horsepower"/>
                </form>
            </div>
        );
    }
}

export default CarForm;
