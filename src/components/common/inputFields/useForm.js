import { useState } from "react";

const useForm = (initialValue) => {
    const [inputs, setInputs] = useState(initialValue);
    const [errors, setErrors] = useState("");

    const handleSubmit = (e, data) => {
        e.preventDefault();
        data(inputs);
    };

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    return {
        handleSubmit,
        handleInputChange,
        inputs,
        errors,
    };
};

export default useForm;
