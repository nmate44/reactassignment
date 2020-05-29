import React, {Component} from 'react';
import CarForm from "./CarForm";
import './App.css';
import CarList from "./CarList";

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>My Application</h1>
            <CarForm />
            <CarList />
        </div>
    );
  }

}

export default App;
