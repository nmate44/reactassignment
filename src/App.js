import React, {Component} from 'react';
import CarForm from "./CarForm";
import './App.css';
import CarList from "./CarList";

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="header">
                <h1>Car List</h1>
            </div>
            <div className="row">
                <div className="carForm-container">
                    <CarForm />
                </div>
                <div className="carList-container">
                    <CarList />
                </div>
            </div>
            <div className="footer">
                <p>Made by: Németh Máté (K5BPCA)</p>
            </div>
        </div>
    );
  }

}

export default App;
