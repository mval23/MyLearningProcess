window.addEventListener(
    'load', () => {
        const form = document.querySelector('#form')
        const nombre = document.getElementById('Nombre');
        const age = document.getElementById('Edad');
        const email = document.getElementById('Email');
        const password = document.getElementById('Password') ;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validarform();
        })
    }
)

function validarform(){
    const nameValue = nombre.value;
    const ageValue = age.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const ageRegex = /^[1-9][0-9]?$|^100$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/; 

    if (!nameRegex.test(name)) {
    alert('Porfavor ingresa tu nombre correctamente.');
    } else if (!ageRegex.test(age)) {
    alert('Porfavor ingresa tu edad correctamente.');
    } else if (!emailRegex.test(email)) {
    alert('Porfavor ingresa tu email correctamente.');
    } else if (!dateRegex.test(date)) { 
        alert('Por favor ingresa una fecha válida en formato dd/mm/yyyy.');
    } else {
    alert('Su data se ha enviado!');
    }

}

const failValidation = (inout, msj) => {
    const form = input.parentElement;
    console.log(form)
    const notif = form.querySelector('p');
    notif.innerText = msj;
}