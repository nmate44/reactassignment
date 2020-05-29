import React, { Component } from "react";

import { connect } from 'react-redux';

import Car from './Car';

class CarList extends Component {
    render() {
        return (
            <div>
                <h2>List of Cars</h2>
                { this.props.cars.map((car) => < Car key={car.id} car={car} />) }
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
