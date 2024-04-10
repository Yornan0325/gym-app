import React from "react";
import InputField from "./InputField";

import {
  requiredRule,
  minLengthRule,
  maxLengthRule,
  passwordMatchRule
} from "./inputValidationRules";

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
export default function  formConfig (label, name, type, placeholders, defaultValue = "",  ) {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <InputField
          key={key}
          name={name}
          type={type}
          placeholders={placeholders}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false
  };
}

// representación de objeto del formulario de registro
export const signupFormText = {
  name: {
    ...formConfig("Nombre y Apellido", "name", "text","Johan Fit",),
     
    validationRules: [
      requiredRule("name"),
      minLengthRule("name", 10),
      maxLengthRule("name", 50)
    ]
  },
  email: {
    ...formConfig("Correo", "email", "email","johanfit@gmail.com"),
    validationRules: [
      requiredRule("email"),
      minLengthRule("email", 10),
      maxLengthRule("email", 100)
    ]
  },
  password: {
    ...formConfig("Contraseña", "password", "password","****"),
    validationRules: [
      requiredRule("password"),
      minLengthRule("password", 4),
      maxLengthRule("password", 20)
    ]
  },
  confirmPassword: {
    ...formConfig("Confirma tu contraseña", "confirmPassword", "password","****"),
    validationRules: [passwordMatchRule()]
  }
};
