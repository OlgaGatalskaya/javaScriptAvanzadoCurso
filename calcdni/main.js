
let calcBtn = document.getElementById('calcDni');
let result = document.getElementById('resultado');

function prepararNumero (letra, numero) {
    let dni_num = '';
        

        dni_num = letra + numero;

    return dni_num

}

function mostrarResultado (letra) {
    let nuveo_elemento_div = document.querySelector('div');

    if (!nuveo_elemento_div) {
        nuveo_elemento_div = document.createElement('div');
        let etiqueta_body = document.getElementById('body');
        etiqueta_body.appendChild (nuveo_elemento_div);
    }
 
    nuveo_elemento_div.innerHTML = "Tu letra es: " + letra
}



calcBtn.addEventListener('click', () => {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    let caja_dni = document.getElementById('dni');
    let dni = caja_dni.value;

    let elemento_seleccionado = document.querySelector('[name="prefijo"]:checked');
    let dni_final = prepararNumero (elemento_seleccionado.value, dni)

    let posicion = dni_final % 23;
    let letra = letras.charAt(posicion);

    
    mostrarResultado(letra);

    

    //return (result.innerHTML = "Tu letra es: " + letra)
})



