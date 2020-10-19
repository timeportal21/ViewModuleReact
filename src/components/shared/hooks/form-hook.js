import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    const { type, isValid } = action;
    switch (type) {
        case "INPUT_CHANGE":
            let formIsValid = true;
            for (const inputName in state.inputs) {
                if (inputName === action.inputName) {
                    formIsValid = formIsValid && isValid;
                } else {
                    formIsValid =
                        formIsValid && state.inputs[inputName].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputName]: {
                        value: action.value,
                        isValid: action.isValid,
                    },
                    isValid: formIsValid,
                },
            };
        default:
            return state;
    }
};

export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity,
    });

    const inputHandler = useCallback((name, value, isValid) => {
        dispatch({
            type: "INPUT_CHANGE",
            value: value,
            isValid: isValid,
            inputName: name,
        });
    }, []);

    return [formState, inputHandler];
};
