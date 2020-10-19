import React, { useEffect, useReducer } from "react";
import "./Input.css";
// import { validate } from "../../utils/validators";
import { validate } from "../../utils/form-validation";

const inputReducer = (state, action) => {
    const { type, val, validators } = action;
    switch (type) {
        case "CHANGE":
            return {
                ...state,
                value: val,
                errors: validate(val, validators),
            };
        case "TOUCH":
            return { ...state, isTouched: true };
        default:
            return state;
    }
};

const Input = ({
    label,
    labelClassName,
    inputClassName,
    type,
    placeholder,
    name,
    autoComplete,
    element,
    cols,
    rows,
    validation,
    onInput,
}) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: "",
        errors: { message: "", isValid: false },
        isTouched: false,
    });

    const { value, errors, isTouched } = inputState;

    useEffect(() => {
        onInput(name, value, errors.isValid);
    }, [name, value, onInput, errors.isValid]);

    const changeHandler = (e) => {
        dispatch({
            type: "CHANGE",
            val: e.target.value,
            validators: validation,
        });
    };

    const touchHandler = () => {
        dispatch({
            type: "TOUCH",
        });
    };

    const inputContent =
        element === "input" ? (
            <input
                className={`form-control ${inputClassName}`}
                type={type}
                placeholder={placeholder}
                name={name}
                autoComplete={autoComplete}
                onChange={changeHandler}
                onBlur={touchHandler}
                defaultValue={inputState.value}
            />
        ) : (
            <textarea
                name={name}
                className={`form-control ${inputClassName}`}
                cols={cols || 30}
                rows={rows || 5}
                onChange={changeHandler}
                onBlur={touchHandler}
                defaultValue={inputState.value}
            />
        );
    return (
        <div className={`form-group`}>
            {label && (
                <label
                    htmlFor={name}
                    className={`form-label ${labelClassName}`}
                >
                    {label}
                </label>
            )}
            {inputContent}
            {!errors.isValid && isTouched && (
                <p className="form--input--error">{errors.message}</p>
            )}

            {/* {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>} */}
        </div>
    );
};
Input.defaultProps = {
    placeholder: "",
    name: "",
    type: "text",
    value: "",
    autoComplete: "off",
    validation: "",
};

export default Input;
