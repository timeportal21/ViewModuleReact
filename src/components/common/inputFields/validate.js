const validate = (validation, inputValue) => {
    //return true if is valid
    //else return false
    let error = {};
    if (validation) {
        const rules = validation.split("|");

        for (let i = 0; i < rules.length; i++) {
            const current = rules[i];

            if (current === "required") {
                if (!inputValue) {
                    error.message("This field is required");
                    return false;
                }
            }

            const pair = current.split(":");
            switch (pair[0]) {
                case "min":
                    if (inputValue.length < pair[1]) {
                        error.message(
                            `This field must be at least ${pair[1]} charactesr long`
                        );
                        return false;
                    }
                    break;
                case "max":
                    if (inputValue.length > pair[1]) {
                        error.message(
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
    return error;
};

export default validate;
