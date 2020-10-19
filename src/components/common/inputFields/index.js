import React, { useState } from "react";
import useForm from "./useForm";

const InputFields = ({
    type,
    placeholder,
    name,
    label,
    inputClassName,
    labelClassName,
    autoComplete,
    validation,
}) => {
    const [inputValue, setInputValue] = useState("");

    const { inputs, errors, handleInputChange } = useForm(
        inputValue
    );

    return (
        <div className="form-group">
            {label && (
                <label className={`form-label ${labelClassName}`}>
                    {label}
                </label>
            )}
            <input
                className={`form-control ${inputClassName}`}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={handleInputChange}
                autoComplete={autoComplete}
            />
            {errors && (
                <p className="input-error">
                    <small>{errors}</small>
                </p>
            )}
        </div>
    );
};

InputFields.defaultProps = {
    placeholder: "",
    name: "",
    type: "text",
    value: "",
    autoComplete: "off",
    validation: "",
};

export default InputFields;
