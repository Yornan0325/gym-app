import React from "react";
import InputField from "./InputField";
import Icon from '@mdi/react';
import { mdiAccount,mdiEmail,mdiLock   } from '@mdi/js';
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
export default function formConfig(label, name, type, placeholders,icon, defaultValue = "") {
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
          icon={icon}
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
    ...formConfig("Nombre y Apellido", "name", "text", "Johan Fit",<Icon path={mdiAccount} size={1} />),

    validationRules: [
      requiredRule("El nombre es requerido"),
      minLengthRule("El nombre", 5),
      maxLengthRule("El nombre", 50)
    ]
  },

  email: {
    ...formConfig("Correo", "email", "email", "johanfit@gmail.com",<Icon path={mdiEmail} size={1} />),
    validationRules: [
      requiredRule("El correo es requerido"),
      minLengthRule("El Correo", 10),
      maxLengthRule("El Correo", 100)
    ]
  },
  //Nombre,mensaje,tipo,placeholder
  password: {
    ...formConfig("Contraseña", "password", "password", "****",<Icon path={mdiLock} size={1} />),
    validationRules: [
      requiredRule("La contraseña es requerida"),
      minLengthRule("La contrseña", 4),
      maxLengthRule("La contraseña", 20)
    ]
  },
  confirmPassword: {
    ...formConfig("Confirma tu contraseña", "confirmPassword", "password", "****",<Icon path={mdiLock} size={1} />),
    validationRules: [passwordMatchRule()]
  }
};
