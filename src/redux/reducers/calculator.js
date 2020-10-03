import { 
    ADD_PRESSED, 
    SUB_PRESSED, 
    DIV_PRESSED, 
    MULT_PRESSED, 
    EQUAL_PRESSED, 
    AC_PRESSED, 
    DEC_PRESSED, 
    NUMBER_PRESSED 
} from "../actionTypes";

const initialState = {
    value: 0,
    inputString: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_PRESSED: {
            const newInput = state.inputString + ' +'
            return {
                ...state,
                inputString: newInput
            }
        };
        default:
            return state;
    }
};