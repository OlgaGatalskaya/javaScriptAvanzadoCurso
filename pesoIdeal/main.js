let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let calculateBtn = document.getElementById('calculate');


/*function demostrateResult(tuImc) {
    let divResult = document.querySelector('div')

    if(!divResult)
}*/


function calculateImc() {
    let weightValue = weightInput.value;
    let heightValue = heightInput.value;
    let tuImc = ((weightValue/Math.pow(heightValue, 2))*10000).toFixed();
    
    console.log(tuImc);

    if (tuImc < 16) {
        console.log('es desnutrido')
    } else if (16 <= tuImc < 18) {
        console.log('es delgado') 
    } else if (18 <= tuImc < 25) {
        console.log('es ideal')
    } else if (25 <= tuImc < 31) {
        console.log('es sobrepeso')
    } else {
        console.log('obeso')
    }

}

calculateBtn.addEventListener('click', calculateImc);