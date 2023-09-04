export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove('form__input-invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = "";
    } else {
        input.parentElement.classList.add('form__input-invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
]

const mensajesDeError = {
    name: {
        valueMissing: "Este campo no puede estar vacío"
    },
    last_name:{
        valueMissing: "Este campo no puede estar vacío"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    phone: {
        // valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Ingrese un número de teléfono válido"
    },
/*     message: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La descripción debe tener al menos 10 caracteres",
        tooShort: "Esta descripción es muy corta"
    }, */
}

function mostarMensajeDeError(tipoDeInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}