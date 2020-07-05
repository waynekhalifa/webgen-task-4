import React from "react";
import useForm from "../../../hooks/useForm";
import './form.css'

function CustomForm({ fields, validation, submitHandler, submitButtonText }) {
    function getInitialValues(inputs) {
        const initialValues = {};

        inputs.forEach((field) => {
            if (!initialValues[field.name]) {
                initialValues[field.name] = field.value;
            }
        });

        return initialValues;
    }

    function renderTextField(input) {
        return (
            <div key={input.name} className="form-controll">
                <label className="form-label" htmlFor={input.name}>{input.label}</label>
                <input
                    className="form-input"
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={values[input.name]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                {errors[input.name] && <p className="form-invalid">{errors[input.name]}</p>}
            </div>
        );
    }

    const renderFields = (inputs) => {
        return inputs.map((input) => {
            switch (input.type) {
                default:
                    return renderTextField(input);
            }
        });
    };

    const INITIAL_VALUES = getInitialValues(fields);

    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        isSubmitting,
    } = useForm(INITIAL_VALUES, validation, submitHandler);

    return (
        <form onSubmit={handleSubmit}>
            {renderFields(fields)}
            <button className="submit-button"disabled={isSubmitting} type="submit">
                {submitButtonText}
            </button>
        </form>
    );
}

export default CustomForm;