import React from "react";
import { Link } from "react-router-dom";
import Input from "../shared/components/FormElements/Input";
import { useForm } from "../shared/hooks/form-hook";
// import { VALIDATOR_REQUIRE } from "../shared/utils/validators";
// import InputFields from "../common/inputFields";

const Login = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: "",
            isValid: false,
        },
        desc: {
            value: "",
            isValid: false,
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };
    return (
        <div className="register__form">
            <div className="auth__box">
                <div className="info__header">
                    <h1 className="large text-center">Login In</h1>
                    <p className="lead text-center">Access Your Account</p>
                </div>
                <div className="form__box">
                    <form onSubmit={handleSubmit}>
                        <Input
                            element="input"
                            type="text"
                            placeholder="Enter First Name"
                            name="firstname"
                            label="First Name"
                            validation={"required|min:6|max:100"}
                            onInput={inputHandler}
                        />
                        <Input
                            type="text"
                            name="desc"
                            label="Description"
                            validation={"required|min:6|max:100"}
                            onInput={inputHandler}
                        />

                        <button type="submit">Submit</button>
                    </form>
                    {/* <form onSubmit={handleSubmit}>
                        <InputFields
                            type="text"
                            name="firstname"
                            placeholder="Enter First Name"
                            onChange={handleChange}
                            validation={"required|min:6|max:10"}
                        />
                        <InputFields
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            onChange={handleChange}
                            validation={"required|min:6|max:100"}
                        />

                        <button type="submit">Submit</button>
                    </form> */}
                </div>
                <p className="my-1">
                    Dont't have an account?
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
