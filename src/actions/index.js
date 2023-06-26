export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_APPLY = "MEMORY_APPLY";
export const MEM0RY_CLEAR = "MEM0RY_CLEAR";


export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    // alert("Hello")
    return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operator) => {
    return ({ type: CHANGE_OPERATION, payload: operator });
}

export const clearDisplay = () => {
    return ({ type: CLEAR_DISPLAY });
}

export const addMemory = () => {
    // alert('hello')
    return ({ type: MEMORY_ADD })
}

export const applyMemory = () => {
    return ({ type: MEMORY_APPLY });
}

export const clearMemory = () => {
    return ({ type: MEM0RY_CLEAR });
}