window.addEventListener('load', () => {
    const form = document.querySelector('#form');
    const nombre = document.getElementById('Nombre');
    const email = document.getElementById('Email');
    const password1 = document.getElementById('Password1');
    const password2 = document.getElementById('Password2');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validarForm();
    });
});

function validarForm() {
    const nombre = document.getElementById('Nombre');
    const email = document.getElementById('Email');
    const password1 = document.getElementById('Password1');
    const password2 = document.getElementById('Password2');
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();

    if (nombreValue === '') {
        failValidation(nombre, 'El nombre es requerido');
    } else {
        removeValidation(nombre);
    }

    if (emailValue === '') {
        failValidation(email, 'El correo electrónico es requerido');
    } else if (!isEmailValid(emailValue)) {
        failValidation(email, 'El correo electrónico no es válido');
    } else {
        removeValidation(email);
    }

    if (password1Value === '') {
        failValidation(password1, 'La contraseña es requerida');
    } else {
        removeValidation(password1);
    }

    if (password2Value === '') {
        failValidation(password2, 'Debe confirmar su contraseña');
    } else if (password1Value !== password2Value) {
        failValidation(password2, 'Las contraseñas no coinciden');
    } else {
        removeValidation(password2);
    }
}

function isEmailValid(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

const failValidation = (input, msj) => {
    const form = input.parentElement;
    const notif = form.querySelector('#' + input.id + '-msg.error-msg');
    notif.innerText = msj;
}

const removeValidation = (input) => {
    const form = input.parentElement;
    const notif = form.querySelector('p');
    input.classList.remove('invalid');
    notif.innerText = '';
    notif.classList.remove('invalid');
}
