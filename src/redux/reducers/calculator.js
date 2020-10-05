import { 
    OPERATOR_PRESSED,
    AC_PRESSED, 
    DEC_PRESSED, 
    NUMBER_PRESSED, 
    EQUAL_PRESSED
} from "../actionTypes";

const initialState = {
    value: '0',
    inputString: ''
}

const lastInputNumber = /\d$/;
const lastInputOperator = /[+\-x\/]$/;
const lastInputNoDec = /[^.]/;
// const lastInputNegativeSign = /[+x/]-$/;

export default function(state = initialState, action) {
    const newInput = state.inputString + ' ' + action.buttonId;
    const newInputNoSpace = state.inputString + action.buttonId;

    switch (action.type) {
        
        case OPERATOR_PRESSED: {
            if (state.inputString === '') {
                return state
            }
            if (lastInputOperator.test(state.inputString)) {
                return state
            }
            return {
                ...state,
                inputString: newInput
            }
        };

        case NUMBER_PRESSED: {
            if (lastInputNumber.test(state.inputString)) {
                return {
                    ...state,
                    inputString: newInputNoSpace
                }
            }
            return {
                ...state,
                inputString: newInput
            }
        };

        case DEC_PRESSED: {
            const newInputArray = state.inputString.split(" ")
            const lastItem = newInputArray.slice(-1)
            if (lastInputNumber.test(state.inputString) && lastInputNoDec.test(lastItem)) {
                return {
                    ...state,
                    inputString: newInputNoSpace
                }
            }
            return state
        };

        case AC_PRESSED: {
            return initialState
        };

        case EQUAL_PRESSED: {
            return state
        };

        default:
            return state;
    }
};