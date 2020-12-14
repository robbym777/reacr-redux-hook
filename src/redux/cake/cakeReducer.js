import { BUY_CAKE, MAKE_CAKE } from './cakeTypes';

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        case MAKE_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        default : return state
    }
}

export default cakeReducer