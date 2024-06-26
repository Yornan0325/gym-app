import { useState } from 'react';
import { signupFields } from "../../../constants/formFields"
import FormAction from "./ActionButton";
import InputAction from "./FormInput";

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount = () => {

  }

  return (
    <>
      <form className="mt-12" onSubmit={handleSubmit}>
      
        {
          fields.map(field =>
            <InputAction
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />

          )
        }
        <div className="flex mt-4">
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>



      </form >
    </>
  )
}