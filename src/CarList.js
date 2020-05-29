import React, { Component } from "react";

import { connect } from 'react-redux';

import Car from './Car';
import CarEditForm from "./CarEditForm";

class CarList extends Component {
    render() {
        return (
            <div>
                <h2>List of Cars</h2>
                {this.props.cars.map((car) => (
                    <div key={car.id}>
                        {car.isEdited ? <CarEditForm car={car} key={car.id}/> :
                            <Car key={car.id} car={car}/>}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state
    }
}

export default connect(mapStateToProps)(CarList);
