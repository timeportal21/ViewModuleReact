export const validate = (inputValue, validation) => {
    let isValid = true;
    let error = { message: "", isValid: isValid };
    if (validation) {
        const rules = validation.split("|");

        for (let i = 0; i < rules.length; i++) {
            const current = rules[i];

            if (current === "required") {
                if (!inputValue) {
                    error.message = "This field is required";
                    error.isValid = false;
                    return error;
                }
            }

            const pair = current.split(":");
            switch (pair[0]) {
                case "min":
                    if (inputValue.length < pair[1]) {
                        error.isValid = false;
                        error.message = `This field must be at least ${pair[1]} charactesr long`;
                        return error;
                    }
                    break;
                case "max":
                    if (inputValue.length > pair[1]) {
                        error.isValid = false;
                        error.message = `This field must be no longer than ${pair[1]} charactesr long`;
                        return error;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    return error;
};
