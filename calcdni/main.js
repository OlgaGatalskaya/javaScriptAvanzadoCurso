let caja_dni = document.getElementById('dni');
let calcBtn = document.getElementById('calcDni');
let result = document.getElementById('resultado');


calcBtn.addEventListener('click', () => {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    let dni = caja_dni.value;
    let posicion = dni % 23;
    let letra = letras.charAt(posicion);
    return (result.innerHTML = "Tu letra es: " + letra)
})

