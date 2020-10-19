import React, { useState, useEffect } from "react";

const InputFields = ({
    type,
    placeholder,
    name,
    label,
    inputClassName,
    labelClassName,
    autoComplete,
    onChange,
    validation,
}) => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = React.useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setError("");
        onChange(e.target.name, e.target.value);
    };

    useEffect(() => {
        const validate = () => {
            //return true if is valid
            //else return false
            if (validation) {
                const rules = validation.split("|");

                for (let i = 0; i < rules.length; i++) {
                    const current = rules[i];

                    if (current === "required") {
                        if (!inputValue) {
                            setError("This field is required");
                            return false;
                        }
                    }

                    const pair = current.split(":");
                    switch (pair[0]) {
                        case "min":
                            if (inputValue.length < pair[1]) {
                                setError(
                                    `This field must be at least ${pair[1]} charactesr long`
                                );
                                return false;
                            }
                            break;
                        case "max":
                            if (inputValue.length > pair[1]) {
                                setError(
                                    `This field must be no longer than ${pair[1]} charactesr long`
                                );
                                return false;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            return true;
        };
        validate();
    }, [inputValue, validation]);

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
                onChange={handleChange}
                name={name}
                autoComplete={autoComplete}
            />
            {error && (
                <p className="input-error">
                    <small>{error}</small>
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
