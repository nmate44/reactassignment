const carReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return state.concat([action.data]);
        case 'DELETE_CAR':
            return state.filter((car) => car.id !== action.id);
        case 'EDIT_CAR':
            return state.map((car) => car.id === action.id ? {...car, isEdited:!car.isEdited}:car);
        case 'UPDATE':
            return state.map((car) => {
                if(car.id === action.id) {
                    return {
                        ...car,
                        manufacturer:action.data.newManufacturer,
                        name:action.data.newName,
                        horsepower:action.data.newHorsepower,
                        isEdited: !car.isEdited
                    }
                } else return car;
            });
        default:
            return state;
    }
}

export default carReducer;
