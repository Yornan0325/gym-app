import  { useState } from 'react'
import {omit} from 'lodash'

export default function useForm (callback){
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});


    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();
        }else{
            alert("Hay un error!");
        }
    }

    const validate = (event, name, value) => {
        //Una función para validar cada valor de entrada.
        switch (name) {
            case 'username':
                if(value.length <= 4){
                    // Estado de error

                    setErrors({
                        ...errors,
                        username:'El nombre de usuario tiene al menos 5 letras.'
                    })
                }else{
                    // set the error state empty or remove the error for username input
                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "username");
                    setErrors(newObj);
                }
                break;

            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{
                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                }
            break;

            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password:'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                }else{
                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                }
            break;

            default:
                break;
        }
    }

  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events
        event.persist();
        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);

        //Let's set these values in state
        setValues({
            ...values,
            [name]:val,
        })

    }
    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

 