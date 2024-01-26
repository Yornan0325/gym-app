import { useState } from 'react';
import { loginFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import {useNavigate } from 'react-router-dom'


const fields = loginFields;

let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const navigate  = useNavigate();
    const [loginState, setLoginState] = useState(fieldsState);

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault ();
        // authenticateUser();
        const email = "jhornan.coningenieria@gmail.com";
        const correo = "123456";

        const inputs = fields.map(field =>
            loginState[field.id] 
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
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
            </div>

            <FormExtra />
            <div class="flex mt-12 ">
            <FormAction handleSubmit={handleSubmit} text="Login" />
            </div>
           

        </form>
    )
}
