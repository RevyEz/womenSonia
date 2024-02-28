// Función para enviar el formulario
document.querySelector('#botonEnvia').addEventListener('click', function(){
    let camposValidados = 0;

    if(validarNombre()){
        camposValidados++;
    }

    if(validarApellido()){
        camposValidados++;
    }

    if(validarCorreo()){
        camposValidados++;
    }
    if(validarPolitica()){
        camposValidados++;
    }

    if (camposValidados === 4){
        alert('¡Formulario enviado correctamente!');
        document.formulario1.submit();
    }
});

// Función validarApellido
function validarNombre(){
    let campoUsuario = document.querySelector('#nombre');
    let nombreUsuario = campoUsuario.value;
    let spanError = document.querySelector('#nombreError');

    // Evaluación condicional
    if(nombreUsuario === '' || nombreUsuario.indexOf(' ') >= 0){
        spanError.innerHTML = '+ Introduzca un nombre, por favor';
        spanError.className = 'error';
        campoUsuario.className = 'borderror';
        return false;
    } else {
        spanError.className = 'noError';
        campoUsuario.className = 'noborderror';
        return true;
    }
}

// Función validarNombre
function validarApellido(){
    let campoUsuario = document.querySelector('#apellidos');
    let nombreUsuario = campoUsuario.value;
    let spanError = document.querySelector('#apellidosError');

    // Evaluación condicional
    if(apellidoUsuario === '' || apellidoUsuario.indexOf(' ') >= 0){
        spanError.innerHTML = '+ Introduzca un apellido, por favor';
        spanError.className = 'error';
        campoUsuario.className = 'borderror';
        return false;
    } else {
        spanError.className = 'noError';
        campoUsuario.className = 'noborderror';
        return true;
    }
}

// Función para validar el e-mail
function validarCorreo(){
    let campoUsuario = document.querySelector('#correo');
    let correoUsuario = campoUsuario.value;
    let spanError = document.querySelector('#correoError');

    // Evaluación condicional
    if(!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(correoUsuario))){
        spanError.innerHTML = '+ Introduzca un mail correcto, por favor';
        spanError.className = 'error';
        campoUsuario.className = 'borderror';
        return false;
    } else {
        spanError.className = 'noError';
        campoUsuario.className = 'noborderror';
        return true;
    } 
}


// Función validar como nos has conocido
// function validarConocido(){
//     let campoUsuario = document.querySelector('#conocer');
//     let nombreUsuario = campoUsuario.value;
//     let spanError = document.querySelector('#conocerError');

//     // Evaluación condicional
//     if(nombreUsuario === '' || nombreUsuario.indexOf(' ') >= 0){
//         spanError.innerHTML = '+ selecciones una opcion, por favor';
//         spanError.className = 'error';
//         campoUsuario.className = 'borderror';
//         return false;
//     } else {
//         spanError.className = 'noError';
//         campoUsuario.className = 'noborderror';
//         return true;
//     }
// }

// Función para validar la política de privacidad
function validarPolitica(){
    let campoPolitica = document.querySelector('#condiciones');
    let spanError = document.querySelector('#politicaError');

    // Evaluación condicional
    if (!campoPolitica.checked) {
        spanError.innerHTML = '+ Por favor, acepta las condiciones de nuestra política de privacidad';
        spanError.className = 'error';
        return false;
    } else {
        spanError.className = 'noError';
        return true;
    }
}


// Repasar las alertas y el pop-up de formulario enviado.