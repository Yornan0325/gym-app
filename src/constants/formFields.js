import Icon from '@mdi/react';
import { mdiEyeLock  } from '@mdi/js';
import { mdiEyeLockOpen  } from '@mdi/js';

const loginFields = [
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        icons: {
            iconState:false,
            classN:"",
            icon_A: null,
            icon_B: null
        },
        
        placeholder: "Correo electrónico"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        icons: {
            icon_A: <Icon path={mdiEyeLock } size={1.2} />,
            icon_B: <Icon path={mdiEyeLockOpen } size={1.2} />
        },
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Contraseña"
    }
]

const signupFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequired: true,
        placeholder: "Nombre de usuario"
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Correo electrónico"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Contraseña"
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm-password",
        isRequired: true,
        placeholder: "Confirmar Contraseña"
    }
]

// const editUser = [
//     {
//         labelText: "Nombres",
//         lastName: "Apellidos",
//         labelFor: "name",
//         id: "username",
//         name: "username",
//         type: "text",
//         autoComplete: "username",
//         isRequired: true,
//         placeholder: "Nombre de usuario"
//     },
//     {
//         labelText: "Email address",
//         labelFor: "email-address",
//         id: "email-address",
//         name: "email",
//         type: "email",
//         autoComplete: "email",
//         isRequired: true,
//         placeholder: "Correo electrónico"
//     },
//     {
//         labelText: "Password",
//         labelFor: "password",
//         id: "password",
//         name: "password",
//         type: "password",
//         autoComplete: "current-password",
//         isRequired: true,
//         placeholder: "Contraseña"
//     },
//     {
//         labelText: "Confirm Password",
//         labelFor: "confirm-password",
//         id: "confirm-password",
//         name: "confirm-password",
//         type: "password",
//         autoComplete: "confirm-password",
//         isRequired: true,
//         placeholder: "Confirmar Contraseña"
//     }
// ]

export { loginFields, signupFields }