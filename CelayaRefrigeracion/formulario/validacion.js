document.getElementById('correo')
    .addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
        valido.innerText = "válido";
        document.getElementById('emailOK').style.background='green';
    } else {
        valido.innerText = "incorrecto";
        document.getElementById('emailOK').style.background='red';
    }
});

document.getElementById('btnenviar').addEventListener('click',
    ()=>{
        alert('Mensaje enviado con exito');

});