const formulario = document.getElementById('form__d_p_f');
const inputs = document.querySelectorAll('#form__d_p_f input');
const selects = document.querySelectorAll('#form__d_p_f select');
const textarea = document.querySelectorAll('#form__d_p_f textarea');

//console.log('Inputs: ', inputs);
//console.log('Textarea: ', textarea);
//console.log('Selects: ', selects);


//Objeto objeto1 = new Objeto();
//nombre.

const btn = document.getElementById('btnenviar');
btn.disabled = true;
const uni = document.getElementById('form-uni');


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
class Imprime {	

    constructor(expresion,input,campo){
        this.expresion = expresion;
        this.input = input;
        this.campo = campo;
    }
    
    imprimir() {
        if (this.expresion.test(this.input.value)) {
            campos[this.campo] = true;
            console.log('valido');
            validar();
        } else {
            campos[this.campo] = false;
            console.log('no valido');
            btn.disabled = true;
        }
    }
}

class Imprime2 {	

    constructor(e, campo){
        this.e = e;
        this.campo = campo;
    }
    
    imprimir2() {
        if (this.e.options.selectedIndex === 0) {

            seleccionada
            campos[this.campo] = false;
            btn.disabled = true;
            console.log('select');
        } else {
            campos[this.campo] = true;
            validar();
            console.log('select');
        }
    }
}



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
validarSelect = (e, campo) => {
    let imprime = new Imprime2(e, campo);
    imprime.imprimir2();
    
}


validarCampo = (expresion, input, campo) => {
    let validar = new Imprime(expresion, input, campo);
    validar.imprimir();
}


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

function validar() {
    if (campos.nombre && campos.edad && campos.whattsapp && campos.correo && campos.facebook && campos.domicilio && campos.carrrera && campos.escuela && campos.comentario && campos.nombre_tutor && campos.celular && campos.universidad && campos.horario && campos.porque) {
        btn.disabled = false;

        console.log('completo');

    } else {
        console.log('incompleto');
    }

    console.log(campos);

}
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