import { 
    ADD_PRESSED, 
    SUB_PRESSED, 
    DIV_PRESSED, 
    MULT_PRESSED, 
    EQUAL_PRESSED, 
    AC_PRESSED, 
    DEC_PRESSED, 
    NUMBER_PRESSED 
} from "./actionTypes";

export const addPressed = buttonId => ({
    type: ADD_PRESSED,
    buttonId: buttonId
});

export const subPressed = buttonId => ({
    type: SUB_PRESSED,
    buttonId: buttonId
});

export const divPressed = buttonId => ({
    type: DIV_PRESSED,
    buttonId: buttonId
});

export const multPressed = buttonId => ({
    type: MULT_PRESSED,
    buttonId: buttonId
});

export const equalPressed = buttonId => ({
    type: EQUAL_PRESSED,
    buttonId: buttonId
});

export const acPressed = buttonId => ({
    type: AC_PRESSED,
    buttonId: buttonId
});

export const decPressed = buttonId => ({
    type: DEC_PRESSED,
    buttonId: buttonId
});

export const numberPressed = buttonId => ({
    type: NUMBER_PRESSED,
    buttonId: buttonId
});