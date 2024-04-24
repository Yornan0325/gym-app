import { useState,useEffect } from 'react';
import { loginFields } from "../../constants/formFields";
import ActionButton from "./prueba/ActionButton";
import FormExtra from "./FormExtra";
import FormInput from "./prueba/FormInput";
import {useNavigate } from 'react-router-dom'


const fields = loginFields;

// let fieldsState = {};
// fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const navigate  = useNavigate();
    // const [loginState, setLoginState] = useState(fieldsState);
    const [fieldsState, setFieldsState] = useState({});

    const handleChange = (e) => {
        setFieldsState({ ...fieldsState, [e.target.id]: e.target.value })
    }


    useEffect(() => {
        const fields = loginFields;
        const initialFieldsState = {};
        fields.forEach(field => {
          initialFieldsState[field.id] = '';
        });
        setFieldsState(initialFieldsState);
      }, []);


    const handleSubmit = (event) => {
        event.preventDefault ();
        // authenticateUser();
        const email = "jhornan.coningenieria@gmail.com";
        const correo = "123456";

        const inputs = fields.map(field =>
            fieldsState[field.id] 
        )
        const  emails = inputs[0]
        const passwords = inputs[1]


        if (email === emails && correo === passwords) {
            return navigate("/home");
            // return redirect("/home")
         
        } else {
            // Autenticación fallida
            console.log("Autenticación fallida");
        }
    }

    //Handle Login API Integration here
    // const authenticateUser =  () => {

    //     const email = "jhornan.coningenieria@gmail.com";
    //     const correo = "123456";

    //     const inputs = fields.map(field =>
    //         loginState[field.id] 
    //     )
    //     const  emails = inputs[0]
    //     const passwords = inputs[1]


    //     if (email === emails && correo === passwords) {
    //         // navigate.push("/home");
    //         return redirect("/home")
         
    //     } else {
    //         // Autenticación fallida
    //         console.log("Autenticación fallida");
    //     }
    // }
  
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {
                    fields?.map(field =>
                        <FormInput
                            key={field.id}
                            handleChange={handleChange}
                            value={fieldsState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                            icon={field.icons}
                        />

                    )
                }
            </div>

            <FormExtra />
            <div className="flex mt-12 ">
            <ActionButton handleSubmit={handleSubmit} text="Login" />
            </div>
           

        </form>
    )
}
