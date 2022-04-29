//creamos la variables que vamos a utilizar
const formulario = document.getElementById('form__d_p_f');
const inputs = document.querySelectorAll('#form__d_p_f input');
const selects = document.querySelectorAll('#form__d_p_f select');
const textarea = document.querySelectorAll('#form__d_p_f textarea');

console.log('Inputs: ', inputs);
console.log('Textarea: ', textarea);
console.log('Selects: ', selects);

const btn = document.getElementById('btnenviar');
btn.disabled = true;
const uni = document.getElementById('form-uni');

//creamos las expresiones regulares
const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
        edad: /^[0-9]{1,2}$/,
        whattsapp: /^[0-9]{10}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        facebook: /^(https:\/\/facebook.com\/)+([a-zA-Z]{1,20})$/,
        domicilio: /^[a-zA-Z0-9\s]{1,40}$/,

        universidad: /^[A-Z]{1,5}$/,
        carrrera: /^[a-zA-Z]{1,20}$/,
        escuela: /^[a-zA-Z]{1,20}$/,
        horario: /^[a-zA-Z]{1,50}$/,
        porque: /^[a-zA-Z\s]{1,100}$/,

        comentario: /^[a-zA-Z\s]{1,200}$/,
        nombre_tutor: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        celular: /^[0-9]{10}$/

    }
    //las variables las vamos a poner en false para poder verificar cuando ya fueron llenadas
const campos = {
    nombre: false,
    edad: false,
    whattsapp: false,
    correo: false,
    facebook: false,
    domicilio: false,
    universidad: false,
    carrrera: false,
    escuela: false,
    horario: false,
    porque: false,
    comentario: false,
    nombre_tutor: false,
    celular: false

}

//dependiendo del nombre de los campos del formulario va a entrar en eñ switch para despues llamar a validar campo o en validar select y se va a mandar la expersion el evento y el nombre
const validarFormulario = (e) => {
    validar();
    switch (e.target.name) {
        case "form_name":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "form_edad":
            validarCampo(expresiones.edad, e.target, 'edad');
            break;
        case "form_num":
            validarCampo(expresiones.whattsapp, e.target, 'whattsapp');
            break;
        case "form_email":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "form_face":
            validarCampo(expresiones.facebook, e.target, 'facebook');
            break;
        case "form_dom":
            validarCampo(expresiones.domicilio, e.target, 'domicilio');
            break;

            /////////////////////////////
        case "form_uni":
            validarSelect(e.target, 'universidad');
            break;

        case "form_carrera":
            validarCampo(expresiones.carrrera, e.target, 'carrrera');
            break;
        case "form_escuela":
            validarCampo(expresiones.escuela, e.target, 'escuela');
            break;
        case "form_cuentanos":
            validarCampo(expresiones.porque, e.target, 'porque');
            break;
        case "form_horario":
            validarSelect(e.target, 'horario');
            break;
        case "form_csdt":
            validarCampo(expresiones.comentario, e.target, 'comentario');
            break;
        case "form_name_padre":

            validarCampo(expresiones.nombre_tutor, e.target, 'nombre_tutor');
            break;
        case "form_tel_padre":

            validarCampo(expresiones.celular, e.target, 'celular');

            break;

    }


}

const validarSelect = (e, campo) => {
    if (e.options.selectedIndex === 0) { //Valida si la primera opcion del select fue seleccionada si fue asi el nombre del capo va a seguir siendo false y por lo tanto va a desactivar el boton
        campos[campo] = false;
        btn.disabled = true;
    } else {
        //de lo contrario el capo va a cambuar a verdadero y va a llamar a la funcion validar
        campos[campo] = true;
        validar();
    }
}

//para validar el campo va a comprobar que dicho campo cupla con la expresion regular si es asi la variable va a cambiar a verdaderp y va a llamar a la funcion validar si entra en el else el campo sera falso y el boton se va a desactivar 
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        campos[campo] = true;
        console.log('valido');
        validar();
    } else {
        campos[campo] = false;
        console.log('no valido');
        btn.disabled = true;
    }
}

//se crean los eventos cuando se oprima una letra va a validar que lo ya escrito cumpla con las especificaciones si el usuario selecciona fuera del campo tambien va a validar que cumpla 
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

selects.forEach((select) => {
    select.addEventListener('change', validarFormulario);
});

textarea.forEach((text) => {
    text.addEventListener('keyup', validarFormulario);
    text.addEventListener('blur', validarFormulario);
});

//en la funcion validar va a verificar que los ccapos esten completos dependiendo de lo anterior va a activar o desactivar el boton
function validar() {
    if (campos.nombre && campos.edad && campos.whattsapp && campos.correo && campos.facebook && campos.domicilio && campos.carrrera && campos.escuela && campos.comentario && campos.nombre_tutor && campos.celular && campos.universidad && campos.horario && campos.porque) {
        btn.disabled = false;

        console.log('completo');

    } else {
        console.log('incompleto');
    }

    console.log(campos);


}
//cuando los compos esten llenos el boton estara activo y por en de al dar click volvemos a verigicar que los campos esten correctos y validamos que la casilla de los acuardos tambien este seleccionada el formulario se va a reiniciar y el boton se volvera a desactivar de lo contrario no va a relaizar ninguna accion 
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const terminos = document.getElementById('form-check');

    if (campos.nombre && campos.edad && campos.whattsapp && campos.correo && campos.facebook && campos.domicilio && campos.carrrera && campos.escuela && campos.comentario && campos.nombre_tutor && campos.celular && campos.horario && campos.porque && terminos.checked) {
        formulario.reset();
        console.log('completo');
        btn.disabled = true;

    } else {
        console.log('incompleto');

    }

});