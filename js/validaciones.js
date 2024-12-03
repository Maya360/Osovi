document.addEventListener("DOMContentLoaded", page_onload);

//El codigo de validaciones funciona en 3 paginas (Donaciones, Voluntariado y la pagina de Contacto)

function page_onload() {
    const forms = document.querySelectorAll(".donacion-form, .formulario-voluntariado, .contact-form");
    forms.forEach(form => {
        form.addEventListener("submit", onForm_submit);
    });
}

// Esta funcion previene el envio del formulario para realizar la validacion y se ejecuta en cuanto se envia el formulario
function onForm_submit(e) {
    e.preventDefault();
    if (!validateForm(e.target)) {
        return;
    }
    e.target.submit();
}

// Esta función genera un ID del elemento de error basado en el nombre del campo
function getErrorName(name) {
    return `error${name[0].toUpperCase()}${name.slice(1)}`;
}

// Esta función valida todos los campos de los formularios 
function validateForm(form) {
    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((inp) => {
        const errorElement = document.getElementById(getErrorName(inp.name));
        if (!errorElement) return;

        errorElement.innerHTML = "";

        if (inp.hasAttribute("required") && !inp.value.trim()) {
            errorElement.innerHTML = `El campo ${inp.name} es obligatorio.`;
            isValid = false;
        } else if (inp.name === "name" && !validateName(inp.value)) {
            errorElement.innerHTML = `El nombre/apellido deben tener al menos 3 letras y no debe contener letras repetidas más de 3 veces.`;
            isValid = false;
        } else if (inp.type === "email" && !validateEmail(inp.value)) {
            errorElement.innerHTML = `El formato del correo no es válido.`;
            isValid = false;
        } else if (inp.type === "number" && (isNaN(inp.value) || inp.value < 30 )) {
            errorElement.innerHTML = `El monto mínimo de donación es L.30.`;
            isValid = false;
        } else if (inp.type === "tel" && !validatePhone(inp.value)) {
            errorElement.innerHTML = `El teléfono debe tener al menos 8 dígitos.`;
            isValid = false;
        } else if (inp.name === "cardNumber" && !validateCardNumber(inp.value)) {
            errorElement.innerHTML = `Número de tarjeta inválido.`;
            isValid = false;
        } else if (inp.name === "expiryDate" && !validateExpiryDate(inp.value)) {
            errorElement.innerHTML = `Fecha de expiración inválida.`;
            isValid = false;
        } else if (inp.name === "cvv" && !validateCvv(inp.value)) {
            errorElement.innerHTML = `CVV inválido.`;
            isValid = false;
        }
    });

    return isValid;
}

function validateName(name) {
    const minLength = 3; //Longitud minima del nombre
    const letterRegex = /(.)\1{3,}/; //Detecta letras repetidas mas de 3 veces

    if (name.length < minLength) {
        return false;
    }

    if (letterRegex.test(name)) {
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para el formato del correo electrónico
    return emailValid.test(email); 
}

function validatePhone(phone) {
    const phoneValid = /^\d{8,}$/; // Expresión regular para el formato del número de teléfono
    return phoneValid.test(phone);
}

function validateCardNumber(number) {
    const cleanedNumber = number.replace(/\s+/g, ''); // Limpia los espacios del número de tarjeta
    const cardNumberValid = /^\d{16}$/; // Expresión regular para el formato del número de tarjeta
    return cardNumberValid.test(cleanedNumber);
}

function validateExpiryDate(date) {
    const expiryDateValid = /^(0[1-9]|1[0-2])\/\d{2}$/; // Expresión regular para el formato de la fecha de expiración
    return expiryDateValid.test(date);
}

function validateCvv(cvv) {
    const cvvValid = /^\d{3}$/; // Expresión regular para el formato del CVV
    return cvvValid.test(cvv);
}

