

let caja_edad = document.getElementById('edad');
let calcEdadBtn = document.getElementById('calcEdad');
let result = document.getElementById('resultado');
//const LIMITE = 18;


calcEdadBtn.addEventListener('click', () => {
    let edad = caja_edad.value;
    if ( edad >= 18) {
        result.innerHTML = "Tienes mayor de edad";
        console.log('no')
    } else {
        console.log('si');
        result.innerHTML = "Tienes menor de edad";
        
    }
});

/*const MAYORIA_DE_EDAD = 18;

function a () {
    let caja_edad = document.getElementById('edad');
    console.log(caja_edad.value);
    let edad = caja_edad.value;
    if (edad >= MAYORIA_DE_EDAD) {
        console.log('es mayor de edad')
    } else {
        console.log('es menor de edad')
    }
}*/
